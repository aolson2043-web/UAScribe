# UAScribe website — SEO and latest-feature update

Prepared October 21, 2026 for https://uascribe.com.

## Upload to GitHub

1. Extract `UAScribe-Website-SEO-2026-10-21.zip`.
2. Open `aolson2043-web/UAScribe` and select **Add file → Upload files** at the repository root, where `index.html` lives.
3. Upload the extracted files and `assets` folder. Upload the contents, not the ZIP or an additional enclosing folder. Replace matching files and merge the assets folder; do not delete the repository first.
4. Commit the upload to `main` and let GitHub Pages finish publishing.
5. Check the homepage, Preflight, Maintenance, Flight Reports, Resources, and Support on desktop and iPhone. Confirm App Store buttons and the sectioned demo report still work.

This ZIP contains a complete snapshot, including existing videos, images, PDFs, scripts, and CNAME. No app build or server-side build step is needed.

## Changes

- Kept existing page URLs and canonical targets because Search Console already associates queries with the relevant landing pages.
- Strengthened the UAV preflight checklist page with aircraft, site, airspace, and crew checks; a clearer heading and description; connected flight-timer and maintenance links; and visible FAQs.
- Strengthened the drone maintenance page around UAV/UAS maintenance logs, aircraft records, and running aircraft flight-time totals. Added a service-entry guide and answers about aircraft totals, the timer, telemetry, and local records.
- Corrected the outdated maintenance-template statement that automatic aircraft flight-time accumulation was unavailable.
- Added homepage features for dedicated preflight, the timer and paired Apple Watch controls, aircraft totals, and saved drafts in History.
- Updated flight-report, commercial-pilot, public-safety, comparison, support, and flight-log guide copy for current features.
- Added contextual links from the homepage and Resources to the search-focused landing pages.
- Aligned search/social descriptions with the content. Updated application features, added the referenced WebSite schema node, and regenerated FAQ structured data from visible answers.
- Updated sitemap dates for edited pages. Kept the download landing page out of the sitemap and preserved its noindex instruction.

Branding, sample report viewer, print/share language, App Store links, trial/pricing copy, privacy messaging, GA4 ID `G-WLELKDGN0F`, and the existing `app_store_click` event are preserved. Existing printable resources remain available; no new template or email signup was added.

## After publication

Use Search Console URL Inspection to request indexing of these updated pages once:

- https://uascribe.com/
- https://uascribe.com/preflight-checklist.html
- https://uascribe.com/aircraft-maintenance.html
- https://uascribe.com/drone-maintenance-log-template.html
- https://uascribe.com/flight-reports.html

The sitemap remains https://uascribe.com/sitemap.xml. Compare query and landing-page impressions, clicks, and positions over the next 28 days. Small counts fluctuate; these edits do not guarantee a ranking or traffic increase.

Verify `app_store_click` in GA4 when testing a button. If download intent is your conversion goal, mark that event as a key event in GA4; website files cannot change account-level settings. This event measures website button clicks, not completed App Store installations or purchases. QR scans going directly to Apple are not measured by the website click event.

## Existing homepage alias

Internal home links and the homepage canonical use `/`. A genuine `/index.html` → `/` HTTP 301 must be configured at the hosting/proxy layer; this ZIP does not create that redirect. Preserve campaign query strings when configuring a redirect. No Cloudflare or DNS settings were changed.

## Validation

Checked HTML for one H1 each, unique titles, local file and fragment targets, nonempty assets, canonical and sitemap consistency, JSON-LD syntax, and agreement between visible FAQ answers and schema. Existing JavaScript was preserved and syntax checked. An interactive browser was unavailable for this pass; check the live desktop/iPhone layout after upload.

References: [FAA AC 107-2A](https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_107-2A.pdf) and [Google SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide). Features follow the current website and the owner's confirmation that aircraft totals are in the public App Store release.
