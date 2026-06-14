# Tristan Web Studio Portfolio

A static portfolio website for a small web design service focused on quote-focused websites for local trades, service businesses, makers, and food preorder businesses.

Live site:
https://tristanwebstudio.com

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

demos/redline-plumbing/             Redline Plumbing & Drains demo (multi-page: home, services, about, areas, contact)
demos/sparkright-electrical/        SparkRight Electrical demo (multi-page: home, services, about, areas, contact)
demos/sweetcrumb-cakes/             SweetCrumb Cakes demo
demos/island-manila-bites/          Island Manila Bites demo
demos/demandem/                     DEMANDEM brand campaign demo
demos/summitshield-roofing/         SummitShield Roofing demo

css/styles.css                      Portfolio site styles
js/main.js                          Portfolio site scripts
```

## Demos

| Demo | Type | Location |
|------|------|----------|
| Redline Plumbing & Drains | Emergency plumbing, Hamilton ON | `/demos/redline-plumbing/` |
| SummitShield Roofing | Roofing and exteriors, Brampton/GTA | `/demos/summitshield-roofing/` |
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

## Production Notes

- Public contact email: `hello@tristanwebstudio.com`
- Public phone: `(365) 576-0118` / `tel:+13655760118`
- Contact form endpoint in `contact/index.html`: Formspree `mnjyovyd`
- Keep the visible demo disclaimer on fictional demo pages.
- Keep demo forms simulated unless a real client endpoint is intentionally added.
- Replace fictional business details only when adapting a demo into a real client site.

## Hosting Notes

This site uses plain HTML, CSS, and minimal JavaScript. There is no build step, framework, CMS, or package install required.
