# Tristan Web Studio Portfolio

A static portfolio website for a small web design service focused on quote-focused websites for local trades, service businesses, makers, and food preorder businesses.

## Site Structure

```text
index.html                          Home
work/index.html                     Work / case studies index
work/redline-plumbing/index.html    Redline Plumbing case study
work/sparkright-electrical/         SparkRight Electrical case study
work/sweetcrumb-cakes/              SweetCrumb Cakes strategy
work/island-manila-bites/           Island Manila Bites strategy
work/demandem/                      DEMANDEM case study
pricing/index.html                  Pricing
process/index.html                  Process
contact/index.html                  Contact

demos/redline-plumbing/             Redline Plumbing & Drains demo
demos/sparkright-electrical/        SparkRight Electrical demo
demos/sweetcrumb-cakes/             SweetCrumb Cakes demo
demos/island-manila-bites/          Island Manila Bites demo
demos/demandem/                     DEMANDEM demo

css/styles.css                      Portfolio site styles
js/main.js                          Portfolio site scripts
```

## Demos

| Demo | Type | Location |
|------|------|----------|
| Redline Plumbing & Drains | Emergency plumbing, Hamilton ON | `/demos/redline-plumbing/` |
| SparkRight Electrical | Residential electrician, Brampton/Mississauga | `/demos/sparkright-electrical/` |
| SweetCrumb Cakes | Home bakery, Brampton | `/demos/sweetcrumb-cakes/` |
| Island Manila Bites | Preorder snack boxes and party trays, Brampton | `/demos/island-manila-bites/` |
| DEMANDEM | Brand landing page concept | `/demos/demandem/` |

## Deployment — Cloudflare Pages

1. Push this folder to a GitHub repository.
2. In Cloudflare Pages, go to Workers & Pages → Create → Connect to Git.
3. Select the repository and use these build settings:
   - Framework preset: None
   - Build command: *(leave blank)*
   - Output directory: `/`
4. Deploy. The site updates automatically on every push to `main`.

## Deployment — GitHub Pages (alternative)

1. Go to the repo → Settings → Pages.
2. Set Source to `Deploy from a branch` → `main` → `/ (root)`.
3. The site will be live at `https://<username>.github.io/<repo>/`.

Note: GitHub Pages serves from a subdirectory path, which may affect root-relative links (`/css/styles.css`, etc.). Cloudflare Pages with a custom domain is the recommended setup.

## Before Launch Checklist

**Portfolio site**
- [ ] Replace `https://yourdomain.ca/` canonical URLs with the live domain
- [ ] Replace `hello@yourdomain.ca` with the real business email
- [ ] Replace the Formspree endpoint in `contact/index.html`: `https://formspree.io/f/YOUR_FORM_ID`
- [ ] Confirm all prices, service descriptions, and availability notes are accurate

**Redline Plumbing demo**
- [ ] Replace `https://example.com/...` canonical URLs and OG image URLs
- [ ] Replace the Formspree endpoint: `https://formspree.io/f/YOUR_FORM_ID`
- [ ] Replace the placeholder Google Business Profile link
- [ ] Replace the placeholder business address if using for a real client

**SparkRight Electrical demo**
- [ ] Replace placeholder phone number, email, and business details
- [ ] Replace `https://example.com/...` URLs

## Hosting Notes

This site uses plain HTML, CSS, and minimal JavaScript. There is no build step, framework, CMS, or package install required.
