# UAScribe website

Production-ready static marketing website for **https://uascribe.com**. It includes the homepage, feature pages, support, privacy policy, a custom-domain file, search metadata, sitemap, social-sharing artwork, and optimized in-app screenshots.

No framework, installation, database, paid hosting, or build step is required.

## 1. Publish the files to GitHub

1. Unzip this package.
2. Open `https://github.com/aolson2043-web/UAScribe`.
3. Select **Add file → Upload files**.
4. Drag the **contents** of this folder into the upload area, including `CNAME`, `.nojekyll`, and the `assets` folder. Do not upload the containing folder itself.
5. Commit the changes to `main`.
6. In **Settings → Pages**, select **Deploy from a branch**, branch **main**, folder **/(root)**, then save.

## 2. Point uascribe.com to GitHub Pages

At the company where `uascribe.com` was purchased, open its DNS controls and add these records:

| Type | Name/Host | Value |
|---|---|---|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `aolson2043-web.github.io` |

Remove conflicting A, AAAA, or CNAME records for `@` or `www`. Do not remove mail-related MX or TXT records.

Then return to **GitHub → UAScribe repository → Settings → Pages**:

1. Enter `uascribe.com` under **Custom domain** and save.
2. Wait for the DNS check and TLS certificate to finish. DNS changes can take time to propagate.
3. Turn on **Enforce HTTPS** when GitHub makes the option available.
4. Confirm both `https://uascribe.com` and `https://www.uascribe.com` load securely and resolve to the same site.

GitHub’s current custom-domain instructions: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

## 3. App Store buttons are ready

Every download button links directly to UAScribe:
https://apps.apple.com/us/app/uascribe/id6804478230

Links are included in the HTML, so they work even when JavaScript is disabled. The same destination is in assets/site-config.js and the application structured data. Pending-release messages have been removed. No App Store link setup is needed before uploading this package.

## 4. Update App Store Connect URLs

After the custom domain is working, use:

- **Marketing URL:** `https://uascribe.com/`
- **Support URL:** `https://uascribe.com/support.html`
- **Privacy Policy URL:** `https://uascribe.com/privacy.html`

The privacy page describes local records, requested location lookups, PDFs, trial status, Apple in-app purchases, and the website’s current no-analytics configuration. Review it whenever the app or website begins collecting or transmitting new categories of data.

## 5. Help search engines find the site

1. Add `https://uascribe.com/` as a property in Google Search Console.
2. Complete ownership verification using the DNS TXT record Google supplies.
3. Submit `https://uascribe.com/sitemap.xml`.
4. Request indexing for the homepage after the domain is live.
5. Add `uascribe.com` to Apple Business Connect, social profiles, directory listings, and any professional pilot profiles you control.

The site uses static readable HTML, unique page titles and descriptions, canonical URLs, Open Graph metadata, `SoftwareApplication` structured data, `robots.txt`, and `sitemap.xml`. No visitor analytics or advertising scripts are installed.

## 6. Launch check

Before announcing the site:

- Test every navigation link on iPhone, iPad, and desktop.
- Confirm the App Store button opens the correct UAScribe product page.
- Confirm the privacy and support URLs are public without a sign-in.
- Send a test support email from the contact link.
- Share the homepage in Messages or a social preview tool and confirm the UAScribe preview image appears.
- Open a private browser window and verify the HTTPS certificate.
- Do not upload iOS source code, signing files, API credentials, or customer data to this repository.

## Editing

- Page content: the `.html` files in the root
- Shared layout and colors: `assets/style.css`
- App Store destination: `assets/site-config.js`
- Screenshots: `assets/screens/`
- Social preview: `assets/uascribe-social-card.png`

The brand palette remains navy `#17324D`, green `#2F8F6B`, and soft gray `#F3F6F7`.

## September 26 website copy and QR update
Homepage: Without the monthly subscription. Flight reports: Share your work. Support: Help with UAScribe. A static App Store QR code appears on the homepage and Download page; it uses the official direct product link and no tracking or expiring redirect service. Upload all updated HTML pages and the assets folder, including uascribe-app-store-qr.png.


Google Analytics update
- Measurement ID: G-WLELKDGN0F on every HTML page.
- Custom event: app_store_click, including QR taps. QR camera scans go directly to Apple and cannot be counted by website analytics. Clicks do not confirm installs or purchases.
- Upload all ZIP contents, including assets, to the GitHub Pages repository.
- After deployment, open the website and click an App Store link; check GA4 Realtime. Mark app_store_click as a key event in GA4 if desired.
- Search Console DNS verification and sitemap submission are separate steps.
