# UAScribe website — October 14, 2026 update

Static site for https://uascribe.com, served by the existing GitHub Pages repository.

## Upload this update

1. Extract `UAScribe-Website-SEO-Update-2026-10-14.zip`.
2. Open `aolson2043-web/UAScribe` on GitHub and stay at the repository root, where `index.html` is visible.
3. Choose **Add file → Upload files**.
4. Drag the extracted files and `assets` folder into the upload area. Upload the contents, not the ZIP itself and not an extra enclosing folder.
5. Commit the upload to `main`. Existing videos and video posters are already in the repository and are reused by this update; they are not duplicated in this ZIP. The upload adds or replaces individual files.
6. After Pages finishes publishing, check the homepage, Resources, preflight PDF, quote PDF, maintenance PDF, Support, and Privacy on uascribe.com.

## Included changes

- Shared navigation and footer across site pages; home links use `/`.
- Simpler homepage, report preview beside the heading on desktop and beneath it at narrow widths, quote screenshot replacing the repeated report image, and one consolidated “Why UAScribe” section.
- Phone QR hiding at narrow widths plus phone-device detection for landscape layouts. A physical-phone check is still needed after upload.
- Visible US price: 3 free reports, then $29.99 once. The US App Store listing was checked October 14, 2026; regional prices may differ.
- Resources hub; quote/pricing guide; maintenance-log guide; factual drone-logbook comparison with official provider links.
- Three branded printable PDF resources, with no email signup gate.
- MobileApplication and Organization structured data, visible FAQ markup on home and support, breadcrumbs, page-specific social cards, and updated search titles and descriptions.
- Download landing page marked `noindex,follow` and removed from the sitemap. Every indexable sitemap entry has an actual update date.
- Existing Google Analytics ID and `app_store_click` event preserved; PDF links also emit `resource_download` on the website.

## Cloudflare: finish the real 301 redirect

GitHub Pages cannot read an Apache `.htaccess` file or a Cloudflare Pages `_redirects` file. This package deliberately does not pretend either file will apply a server redirect on GitHub Pages.

In Cloudflare for `uascribe.com`, go to **Rules → Overview → Create rule → Redirect Rule**. Use a custom filter expression:

```
(http.host in {"uascribe.com" "www.uascribe.com"} and http.request.uri.path eq "/index.html")
```

Then choose:

- Name: `Canonical homepage`
- Redirect URL: `https://uascribe.com/`
- Type: Static
- Status: `301`
- Preserve query string: On

The rule works only for DNS records proxied through Cloudflare. If the site currently uses DNS-only records, do not change DNS blindly; confirm the Cloudflare proxy and HTTPS configuration first. No DNS or Cloudflare changes were made by this update.

Official instructions: https://developers.cloudflare.com/rules/url-forwarding/single-redirects/create-dashboard/

After activation, opening `https://uascribe.com/index.html?utm_source=test` should return an HTTP 301 to `https://uascribe.com/?utm_source=test`. The target `/` does not match the rule, so it will not redirect in a loop.

## Support email: keep delivery working

The current working contact is `aodigital.lab@gmail.com`. The footer points visitors to the branded support page. A nonexistent `support@uascribe.com` address has not been published.

To adopt the domain address, set up Cloudflare Email Routing (or your email provider) to forward `support@uascribe.com` to the current inbox, complete destination verification, and test delivery from another mailbox. Once verified, replace `aodigital.lab@gmail.com` with `support@uascribe.com` in `support.html`, `privacy.html`, and the Organization contact details embedded in the HTML pages. A forwarding address alone does not configure sending mail as that address.

## Verification

The upload package is checked for local links and assets against the package plus the existing repository inventory, sitemap consistency, canonical URLs, JSON-LD, shared navigation, metadata, JavaScript syntax, image dimensions, and PDF page counts. Printable PDFs were rendered and visually inspected. An interactive browser and physical iPhone were not available for this pass; check the live mobile layout after upload.

No new app build is needed for these website changes.
