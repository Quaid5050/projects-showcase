import { expect, test } from '@playwright/test';
import fs from 'node:fs/promises';
import path from 'node:path';

const requiredRoutes = [
  '/',
  '/about',
  '/products',
  '/products/new-products',
  '/products/new-products/safe-solution-floor-safety-system',
  '/partnerships',
  '/partnerships/distributors-wanted',
  '/global-markets',
  '/investments',
  '/industries',
  '/resources',
  '/contact',
  '/privacy-policy',
  '/terms-of-use',
];

const prohibited = [
  '11' + '++',
  'Professional Visual ' + 'Placeholder',
  'System Placeholder ' + 'Visual',
  'Client' + '-supplied',
  'Only ' + 'publish',
  'should clearly ' + 'explain',
  'where supported by ' + 'documentation',
  'Download buttons are not ' + 'shown',
  'Uploads are not ' + 'supported',
  'Distributor ' + 'CTA',
  'Product ' + 'Detail',
  'lorem ' + 'ipsum',
  'Ready to submit a ' + 'EV',
  'Ready to submit a ' + 'International',
  'Ready to submit a ' + 'Industrial',
];

test.beforeEach(async ({ page }) => {
  const errors: string[] = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error') errors.push(msg.text());
  });
  test.info().annotations.push({ type: 'console-errors', description: errors.join('\n') });
});

for (const route of requiredRoutes) {
  test(`${route} loads with one h1 and no prohibited wording`, async ({ page }) => {
    await page.goto(route);
    await expect(page.locator('h1')).toHaveCount(1);
    await expect(page.locator('body')).not.toContainText(new RegExp(prohibited.map((item) => item.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')));
  });
}

test('critical navigation and redirects work', async ({ page }) => {
  test.setTimeout(60_000);
  await page.goto('/');
  await expect(page.getByRole('heading', { name: /Professional Cleaning & Floor Safety Solutions/i })).toBeVisible();
  await expect(page.getByRole('heading', { name: /Safe Solution® Floor Safety System/i }).first()).toBeVisible();
  await page.goto('/resources');
  await expect(page.getByRole('heading', { name: /Markets, Partnerships/i })).toBeVisible();
  await page.goto('/products/new-products');
  await expect(page.getByRole('heading', { name: /New Products/i })).toBeVisible();
  await page.goto('/partnership');
  await expect(page).toHaveURL(/\/partnerships/);
  await page.goto('/partnerships#manufacturer-partnerships');
  await expect(page.locator('#manufacturer-partnerships')).toBeVisible();
});

test('mobile menu opens and closes', async ({ page, isMobile }) => {
  test.skip(!isMobile, 'mobile-only coverage');
  await page.goto('/');
  await page.getByRole('button', { name: /open menu/i }).click();
  const mobileNav = page.getByLabel('Mobile Navigation');
  await expect(mobileNav).toBeVisible();
  await expect(mobileNav.getByRole('link', { name: 'Home' })).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(mobileNav).not.toBeVisible();
});

test('contact query parameters preselect form options', async ({ page }) => {
  await page.goto('/contact?inquiry=floor-assessment&product=safe-solution#inquiry-form');
  await expect(page.locator('select[name="inquiryCategory"]')).toHaveValue('Request a Floor Assessment');
  await expect(page.locator('input[name="productOrServiceNeeded"]')).toHaveValue('Safe Solution® Floor Safety System');
});

test('form validation appears and submit disables while submitting', async ({ page }) => {
  test.setTimeout(60_000);
  await page.goto('/contact#inquiry-form');
  const submit = page.getByRole('button', { name: /submit inquiry/i });
  await submit.click();
  await expect(page.getByText(/Full name is required/i)).toBeVisible();
});

test('phone layouts do not overflow at 390px and 430px', async ({ page }) => {
  test.setTimeout(120_000);
  const phoneRoutes = [
    '/',
    '/products',
    '/products/battery-energy-storage',
    '/products/new-products/safe-solution-floor-safety-system',
    '/industries',
    '/industries/healthcare',
    '/resources',
    '/contact',
    '/partnerships/distributors-wanted',
  ];

  for (const width of [390, 430]) {
    await page.setViewportSize({ width, height: 844 });
    for (const route of phoneRoutes) {
      await page.goto(route);
      const overflow = await page.evaluate(() => {
        const viewportWidth = document.documentElement.clientWidth;
        const offenders = [...document.querySelectorAll<HTMLElement>('body *')]
          .map((element) => {
            const rect = element.getBoundingClientRect();
            return {
              tag: element.tagName.toLowerCase(),
              className: typeof element.className === 'string' ? element.className : '',
              left: Math.round(rect.left),
              right: Math.round(rect.right),
              width: Math.round(rect.width),
            };
          })
          .filter(({ left, right, width: elementWidth }) => elementWidth > 0 && (left < -1 || right > viewportWidth + 1))
          .slice(0, 8);
        return {
          documentWidth: document.documentElement.scrollWidth,
          viewportWidth,
          offenders,
        };
      });
      expect(
        overflow.documentWidth,
        `${route} overflows at ${width}px: ${JSON.stringify(overflow.offenders)}`
      ).toBeLessThanOrEqual(overflow.viewportWidth);
    }
  }
});

test('product inquiry modal fits a phone viewport', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/products');
  await page.getByRole('button', { name: /request a quote/i }).first().click();
  const dialog = page.getByRole('dialog');
  await expect(dialog).toBeVisible();
  const bounds = await dialog.locator('> div').boundingBox();
  expect(bounds).not.toBeNull();
  expect(bounds!.width).toBeLessThanOrEqual(390);
  expect(bounds!.height).toBeLessThanOrEqual(844);
  await page.getByRole('button', { name: /close modal/i }).click();
  await expect(dialog).not.toBeVisible();
});

test('screenshots for client review', async ({ page, isMobile }) => {
  test.setTimeout(120_000);
  const screenshotDir = path.join(process.cwd(), 'docs', 'review-screenshots');
  await fs.mkdir(screenshotDir, { recursive: true });
  const shots = isMobile
    ? [
        ['homepage-mobile.png', '/'],
        ['safe-solution-mobile.png', '/products/new-products/safe-solution-floor-safety-system'],
        ['distributor-form-mobile.png', '/partnerships/distributors-wanted#distributor-application'],
      ]
      : [
        ['homepage-desktop.png', '/'],
        ['products-desktop.png', '/products'],
        ['new-products-desktop.png', '/products/new-products'],
        ['safe-solution-desktop.png', '/products/new-products/safe-solution-floor-safety-system'],
        ['industries-desktop.png', '/industries'],
        ['resources-desktop.png', '/resources'],
        ['distributors-desktop.png', '/partnerships/distributors-wanted'],
        ['global-markets-desktop.png', '/global-markets'],
        ['contact-form-desktop.png', '/contact#inquiry-form'],
      ];

  for (const [filename, route] of shots) {
    await page.goto(route);
    await page.screenshot({ path: path.join(screenshotDir, filename), fullPage: true });
  }
});
