# Neville Ken | Portfolio

The personal portfolio of Neville Ken, Software Engineer (backend systems and APIs). It is a single scrolling page covering background, skills, projects, experience, education and contact details, with a downloadable one-page CV.

**Live site:** https://nevilleken.vercel.app

## Tech stack

| Layer | Tools |
| --- | --- |
| Framework | Next.js 16 (App Router, Cache Components), React 19 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4, theme colours as CSS variables |
| Icons | react-icons |
| Fonts | Cormorant Garamond (headings), Inter (body) |
| Linting | ESLint 9 |
| Hosting | Vercel (a push to `main` redeploys) |

## Project structure

```
app/
  page.tsx               the whole page: sticky nav, intro, About, Skills, Projects, Experience, Education, Contact
  layout.tsx             fonts, metadata (title, description) and the page shell
  opengraph-image.tsx    share preview image, generated in code
  globals.css            Tailwind import and theme colours (CSS variables)
  icon.svg               favicon
components/
  ProjectCard.tsx        the card used for each project
public/                  static files, including the CV PDF     
```

## Running it locally

You need Node.js and npm.

```bash
git clone https://github.com/KingN3V/nevportfolio.git
cd nevportfolio
npm install
npm run dev
```

The site is at http://localhost:3000.

Before pushing, check that the production build passes:

```bash
npm run build
```

## Design decisions

- **One page, no router.** Everything is on a single scrolling page. The sticky nav uses anchor links (`#about`, `#projects`, `#experience`, `#contact`) and smooth scrolling, so there are no extra routes to maintain.
- **Theme colours are CSS variables.** The palette is defined once in `app/globals.css` and mapped to Tailwind colour names, so changing a colour means editing one line.
- **Fonts load through `next/font`.** Cormorant Garamond and Inter are loaded at build time and exposed as CSS variables, so the browser doesn't need to fetch them from Google at runtime.
- **Project content lives in props.** `ProjectCard` is one reusable component, so adding a project is one more `<ProjectCard />` with its own title, points, stack and links.
- **No backend and no contact form.** Contact is a `mailto:` link plus GitHub and LinkedIn, so there is nothing to host, secure or spam-filter.
- **The share preview is generated in code.** `opengraph-image.tsx` builds the preview image with the same colours as the site, so there is no image file to keep in sync.

## Author

Built by Neville Ken ([@KingN3V](https://github.com/KingN3V)).