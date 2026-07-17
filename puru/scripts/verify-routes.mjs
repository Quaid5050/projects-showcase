const baseUrl = process.env.ROUTE_BASE_URL || process.argv[2] || 'http://localhost:3000';

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
  '/sitemap.xml',
];

const redirects = [
  ['/partnership', '/partnerships'],
  ['/industries/wholesale-distribution', '/industries/commercial'],
  ['/industries/import-export-businesses', '/products/global-trading'],
  ['/industries/industrial-machinery', '/products/industrial-machinery'],
];

const ignoredProtocols = ['mailto:', 'tel:', 'javascript:'];
const visited = new Set();
const broken = [];
const malformed = [];
const missingFragments = [];

function normalizePath(path) {
  if (!path.startsWith('/')) return `/${path}`;
  return path;
}

function absolute(path) {
  return new URL(path, baseUrl).toString();
}

function sameOrigin(url) {
  return new URL(url, baseUrl).origin === new URL(baseUrl).origin;
}

function extractLinks(html) {
  const links = new Set();
  const regex = /\s(?:href|src)=["']([^"']+)["']/gi;
  let match;
  while ((match = regex.exec(html))) {
    const raw = match[1].trim();
    if (!raw || raw.startsWith('#') || ignoredProtocols.some((protocol) => raw.toLowerCase().startsWith(protocol))) continue;
    const url = new URL(raw, baseUrl);
    if (!sameOrigin(url)) continue;
    if (url.pathname.startsWith('/_next/')) continue;
    links.add(`${url.pathname}${url.search}${url.hash}`);
  }
  return [...links];
}

function extractIds(html) {
  const ids = new Set();
  const regex = /\sid=["']([^"']+)["']/gi;
  let match;
  while ((match = regex.exec(html))) ids.add(match[1]);
  return ids;
}

async function check(path, { follow = true } = {}) {
  const url = absolute(path);
  const res = await fetch(url, { redirect: follow ? 'follow' : 'manual' });
  return res;
}

async function crawl(path = '/') {
  const parsed = new URL(path, baseUrl);
  const key = `${parsed.pathname}${parsed.search}`;
  if (visited.has(key)) return;
  visited.add(key);

  let res;
  try {
    res = await check(key);
  } catch (error) {
    broken.push(`${key} failed: ${error.message}`);
    return;
  }

  if (res.status >= 400) {
    broken.push(`${key} returned ${res.status}`);
    return;
  }

  const contentType = res.headers.get('content-type') || '';
  if (!contentType.includes('text/html')) return;

  const html = await res.text();
  const ids = extractIds(html);
  for (const link of extractLinks(html)) {
    const linked = new URL(link, baseUrl);
    if (linked.pathname.includes('//')) malformed.push(link);
    if (linked.hash && !ids.has(decodeURIComponent(linked.hash.slice(1))) && linked.pathname === parsed.pathname) {
      missingFragments.push(`${key} -> ${linked.hash}`);
    }
    if (visited.size < 250) await crawl(`${linked.pathname}${linked.search}`);
  }
}

for (const route of requiredRoutes) await crawl(route);

for (const [from, to] of redirects) {
  try {
    const res = await check(from, { follow: false });
    const location = res.headers.get('location') || '';
    if (![301, 302, 307, 308].includes(res.status) || !location.includes(to)) {
      broken.push(`Redirect ${from} expected ${to}, got ${res.status} ${location}`);
    }
  } catch (error) {
    broken.push(`Redirect ${from} failed: ${error.message}`);
  }
}

console.log(`Route verification base: ${baseUrl}`);
console.log(`Visited routes: ${visited.size}`);
console.log(`Broken routes: ${broken.length}`);
console.log(`Malformed URLs: ${malformed.length}`);
console.log(`Missing fragments: ${missingFragments.length}`);

if (broken.length) console.log(`\nBroken:\n${broken.map((item) => `- ${item}`).join('\n')}`);
if (malformed.length) console.log(`\nMalformed:\n${malformed.map((item) => `- ${item}`).join('\n')}`);
if (missingFragments.length) console.log(`\nMissing fragments:\n${missingFragments.map((item) => `- ${item}`).join('\n')}`);

if (broken.length || malformed.length || missingFragments.length) process.exit(1);
