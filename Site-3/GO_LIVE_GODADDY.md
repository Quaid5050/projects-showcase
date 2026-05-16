# Go-Live Guide — Merchant Orders
## Connecting `www.merchantorders.io` via GoDaddy + Vercel

---

## 1. Add the Domain in Vercel

1. Go to [vercel.com](https://vercel.com) and open your **Merchant Orders** project.
2. Click **Settings → Domains**.
3. Add both:
   - `www.merchantorders.io`
   - `merchantorders.io` (root/apex)
4. Vercel will show you the DNS records you need to add. **Use those exact values** — do not guess.
5. Set `www.merchantorders.io` as the **primary domain** (Vercel will redirect the root to www automatically, or you can configure it the other way).

---

## 2. Update DNS Records in GoDaddy

1. Log in to [GoDaddy](https://godaddy.com) → **My Products → DNS** for `merchantorders.io`.
2. **Delete or disable** any existing:
   - A records pointing to old hosts
   - AAAA records
   - CNAME records for `www`
   - Any domain forwarding rules (Forwarding tab)

### Records to Add

Vercel provides the exact values in your project's Domain settings. The typical setup is:

| Type  | Name | Value                        | TTL  |
|-------|------|------------------------------|------|
| A     | @    | `76.76.21.21`                | 600  |
| CNAME | www  | `cname.vercel-dns.com`       | 600  |

> **Important:** Always copy the values directly from Vercel's Domain settings panel — they may differ from the above. Vercel will show a warning if there is a conflict.

3. Save the records. DNS propagation typically takes **5–30 minutes**, sometimes up to 48 hours.

---

## 3. Verify and Enable HTTPS in Vercel

1. Go back to **Vercel → Settings → Domains**.
2. Wait for both domains to show a green checkmark ✅.
3. Vercel automatically provisions an SSL certificate via Let's Encrypt — no action needed.
4. Once verified, HTTPS will be active at `https://www.merchantorders.io`.

---

## 4. Set Canonical / Preferred Domain

1. In **Vercel → Settings → Domains**, set `www.merchantorders.io` as the primary domain.
2. Vercel will automatically redirect `merchantorders.io` → `https://www.merchantorders.io`.
3. The site's `metadataBase` and canonical URLs are already set to `https://www.merchantorders.io` in the codebase.

---

## 5. Redeploy After Domain Connection

After DNS is verified, trigger a fresh deployment:

```bash
git push origin main
```

Or click **Redeploy** in the Vercel dashboard to ensure the latest build is live on the new domain.

---

## 6. Google SEO / Search Console Setup

### Step 1 — Add Property
1. Go to [Google Search Console](https://search.google.com/search-console).
2. Click **Add Property**.
3. Choose **Domain** property type and enter: `merchantorders.io`
4. Google will provide a **DNS TXT record** for verification.

### Step 2 — Add TXT Record in GoDaddy
1. In GoDaddy DNS, add a new record:

| Type | Name | Value                          | TTL  |
|------|------|--------------------------------|------|
| TXT  | @    | `google-site-verification=...` | 600  |

> Paste the exact value Google provides — it is unique to your account.

2. Save and wait 5–30 minutes for propagation.
3. Return to Search Console and click **Verify**.

### Step 3 — Submit Sitemap
1. In Search Console, go to **Sitemaps**.
2. Enter and submit:
   ```
   https://www.merchantorders.io/sitemap.xml
   ```
3. Google will crawl and index the sitemap automatically.

### Step 4 — Request Indexing
1. In Search Console, use **URL Inspection**.
2. Enter: `https://www.merchantorders.io/`
3. Click **Request Indexing**.
4. Repeat for key pages:
   - `/features`
   - `/services`
   - `/industries`
   - `/contact`

### Step 5 — Monitor After Launch
Check these Search Console reports regularly after launch:

| Report              | What to Check                              |
|---------------------|--------------------------------------------|
| Coverage / Indexing | All pages indexed, no errors               |
| Page Experience     | Core Web Vitals passing                    |
| Enhancements        | No structured data errors                  |
| Performance         | Impressions and clicks growing over time   |

---

## 7. Post-Launch Checklist

- [ ] `https://www.merchantorders.io` loads correctly
- [ ] `http://merchantorders.io` redirects to `https://www.merchantorders.io`
- [ ] SSL certificate is active (padlock in browser)
- [ ] Sitemap accessible at `/sitemap.xml`
- [ ] Robots.txt accessible at `/robots.txt`
- [ ] Google Search Console verified
- [ ] Sitemap submitted to Search Console
- [ ] Key pages requested for indexing
- [ ] Contact email `support@merchantorders.io` is clickable
- [ ] Contact phone `800.269.0818` is clickable
- [ ] No "Commission-Free" wording anywhere on the site
- [ ] No unapproved third-party brand names on the site

---

## Contact

**Email:** support@merchantorders.io  
**Phone:** 800.269.0818  
**Website:** https://www.merchantorders.io
