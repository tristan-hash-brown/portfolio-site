# Tristan Web Studio Portfolio

A static portfolio website for a small web design service focused on quote-focused websites for local trades and service businesses.

## Structure

```text
index.html
work/index.html
work/redline-plumbing/index.html
pricing/index.html
process/index.html
contact/index.html
demos/redline-plumbing/index.html
css/styles.css
js/main.js
README.md
```

## Deployment on Cloudflare Pages

1. Push this folder to a GitHub repository.
2. In Cloudflare Pages, create a new project from that repository.
3. Use these settings:
   - Framework preset: None
   - Build command: blank
   - Output directory: /
4. Deploy the site.

## Before Launch

- Replace `https://yourdomain.ca/` canonical URLs after the domain is purchased.
- Replace `hello@yourdomain.ca` with the real business email.
- Replace the Formspree endpoint in `contact/index.html`:
  `https://formspree.io/f/YOUR_FORM_ID`
- Replace placeholder demo and case study pages when those pages are published.
- Confirm all prices, service descriptions, and availability notes are still accurate.

## Hosting Notes

This site uses plain HTML, CSS, and minimal JavaScript. There is no build step, framework, CMS, or package install required, so it can also be hosted on GitHub Pages.
