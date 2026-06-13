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

## Portfolio Integration

This demo is integrated into the Tristan Web Studio portfolio at `/demos/redline-plumbing/`.

The quote forms are simulated for demo purposes and show an in-page success message without sending data to a backend.

## Real Client Adaptation Notes

- Add real license number, insurance details, and review sources for a real business.
- Replace the fictional address, phone, photos, legal claims, reviews, and business profile references before using this structure for a real contractor.
- Connect analytics only when a real client site is being launched.

## Sensible Decisions Made

- Used system sans-serif fonts instead of a Google Font to keep performance simple and fast.
- Used solid CSS visual panels instead of stock photos so there are no image licensing or hotlinking issues.
- Used a single shared tracking script with `dataLayer` pushes and console logs for easy analytics handoff.
- Kept JavaScript minimal and non-blocking.
- Set the fictional demo address as `123 King Street East, Hamilton, ON L8N 1A1`.

## Notes

This is a fictional demo site. Do not launch it for a real contractor without replacing the address, phone, photos, legal claims, reviews, analytics IDs, form endpoint, and business profile links.
