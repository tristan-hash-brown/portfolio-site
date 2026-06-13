# Redline Plumbing & Drains Demo Site

A production-style static demo site for a fictional Hamilton plumbing company. Built to show trades business owners how a practical lead-generation website can make the phone ring.

## Structure

- `index.html` - Home conversion page
- `services/index.html` - Service detail sections
- `areas/index.html` - Service area page
- `about/index.html` - Trust story
- `contact/index.html` - Quote form and contact details
- `css/styles.css` - Shared responsive styling
- `js/main.js` - Lightweight tracking stubs

## Cloudflare Pages Deploy Steps

1. Create a new GitHub repository and add these files.
2. In Cloudflare Pages, choose **Create a project**.
3. Connect the repository.
4. Use these build settings:
   - Framework preset: **None**
   - Build command: leave blank
   - Build output directory: `/`
5. Deploy.
6. After the first deploy, replace `https://example.com/` canonical, Open Graph, and schema URLs with the live domain.

## Formspree Connection Steps

1. Create a Formspree form at `https://formspree.io/`.
2. Copy the form endpoint.
3. Replace both placeholder form actions:
   - `index.html`
   - `contact/index.html`
4. Current placeholder:
   - `https://formspree.io/f/YOUR_FORM_ID`
5. Keep the existing field names unless the Formspree account needs different routing.

## Placeholder TODOs

- Replace the Formspree placeholder endpoint in `index.html` and `contact/index.html`.
- Replace `https://example.com/` canonical, Open Graph, and schema URLs after choosing the real domain.
- Replace `https://example.com/og-redline-plumbing.jpg` with a real social sharing image.
- Replace the Google Business Profile placeholder link: `https://example.com/google-business-profile`.
- Replace map placeholders with a branded Hamilton service-area map or approved local map image.
- Replace About page photo placeholder with a real owner/team photo beside a branded service van.
- Add real license number, insurance details, and review sources for a real business.
- Connect GA4 or Cloudflare Web Analytics in `js/main.js` where the TODO comment is placed.

## Sensible Decisions Made

- Used system sans-serif fonts instead of a Google Font to keep performance simple and fast.
- Used solid CSS placeholder panels instead of stock photos so there are no image licensing or hotlinking issues.
- Used a single shared tracking script with `dataLayer` pushes and console logs for easy analytics handoff.
- Kept JavaScript minimal and non-blocking.
- Set the fictional placeholder address as `123 King Street East, Hamilton, ON L8N 1A1`.

## Notes

This is a fictional demo site. Do not launch it for a real contractor without replacing the address, phone, photos, legal claims, reviews, analytics IDs, form endpoint, and business profile links.
