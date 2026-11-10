# CLAUDE.md — Personal Portfolio Website

---

## 1. Project Overview

- **Owner:** Engr. Md. Julfikar Islam, [Assistant Programmer]
- **Purpose:** Personal portfolio to showcase projects, experience, skills, and contact info to recruiters and clients.
- **Audience:** [e.g. Recruiters, hiring managers, freelance clients]
- **Live URL:** [https://coder-julfikar.netlify.app]
- **Repo:** [https://github.com/dev-julfikar]

### Pages / Sections
- Home (hero + short intro + call to action)
- About (bio, photo, career summary)
- Projects (cards → detail page per project)
- Experience (timeline of roles)
- Skills (grouped by category)
- Contact (form + social links)
- Resume download (PDF)

---

## 2. Tech Stack

- **Framework:** [React.js]
- **Language:** [TypeScript]
- **Styling:** Tailwind CSS [+ Flowbite components]
- **Build tool:** Vite
- **Hosting:** [VPS / Vercel / Netlify]

Do NOT add new dependencies without asking first. Prefer what's already installed.

---

## 3. Commands

```bash
npm create vite@latest portfolio -- --template react-ts   # Create project
npm install
npm run dev
npm run build        # Also type-checks via tsc
npm run lint
npx tsc --noEmit     # Type-check only
```

Always run lint and tests after making changes. Fix failures before saying a task is done.

---

## 4. Project Structure

```
portfolio/
├── public/
│   ├── favicon.ico
│   ├── resume.pdf
│   └── robots.txt
├── src/
│   ├── assets/
│   │   └── images/              # Project screenshots, profile photo (WebP)
│   ├── components/
│   │   ├── ui/                  # Button.tsx, Badge.tsx, Card.tsx, SectionTitle.tsx
│   │   └── layout/              # Navbar.tsx, Footer.tsx, Layout.tsx
│   ├── sections/                # Hero.tsx, About.tsx, Projects.tsx, Experience.tsx, Skills.tsx, Contact.tsx
│   ├── pages/                   # Home.tsx, ProjectDetail.tsx, NotFound.tsx
│   ├── data/                    # projects.ts, experience.ts, skills.ts
│   ├── types/                   # index.ts: shared interfaces (Project, Experience, Skill)
│   ├── hooks/                   # useTheme.ts, useScrollSpy.ts
│   ├── utils/                   # Helper functions (.ts)
│   ├── App.tsx                  # Routes
│   ├── main.tsx                 # Entry point
│   ├── index.css                # Tailwind imports
│   └── vite-env.d.ts            # Vite type declarations
├── .env.example
├── index.html
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── CLAUDE.md
```

---

## 5. Coding Conventions

- Follow existing patterns in the codebase before inventing new ones.
- Use reusable components for anything repeated twice or more (cards, buttons, section headers).
- Keep controllers thin; put logic in services or models.
- Naming: [PascalCase for classes, camelCase for variables, kebab-case for Blade components/files].
- No inline styles — use Tailwind utility classes only.
- No hardcoded content inside components — pass via props or load from config/data files.
- Write clear commit messages: `feat: add project filter`, `fix: navbar overlap on mobile`.

---

## 6. Design System

- **Theme:** [Minimal / modern / dark-first]
- **Dark mode:** [Yes — class-based, toggle in navbar]
- **Primary color:** [e.g. Tailwind `indigo-600`]
- **Accent color:** [e.g. `amber-400`]
- **Fonts:** [Heading: Inter / Body: Inter]
- **Spacing:** Sections use `py-16 md:py-24`; content max width `max-w-6xl mx-auto px-4`.
- **Breakpoints:** Mobile-first. Test at 375px, 768px, 1280px.
- **Animations:** Subtle only (fade/slide on scroll). Respect `prefers-reduced-motion`.

---

## 7. Content Source

**Reference material (read-only, not used by the site):**
- `reference/my-cv-pg1.jpeg`
- `reference/my-cv-pg2.jpeg`

These are scans of my CV. Use them ONLY to extract content into the data files below.
Do not import or display these images in the website.

**Where content lives in the site:**
- `src/data/projects.ts`: projects (typed with `Project`)
- `src/data/experience.ts`: work history (typed with `Experience`)
- `src/data/skills.ts`: skills grouped by category (typed with `Skill`)
- `src/data/profile.ts`: name, title, bio, email, social links

**Rules:**
- Copy names, dates, titles, and institutions exactly as written in the CV. Do not invent or embellish.
- If text in the image is unclear, add a `// TODO: verify` comment instead of guessing.
- To update content later, edit only the data files. Do not touch components.

---

## 8. Quality Requirements

**Performance**
- Lighthouse score target: 90+ on all categories.
- Images: WebP, lazy-loaded, with width/height set.
- No unused JS or CSS in production build.

**SEO**
- Unique `<title>` and meta description per page.
- Open Graph + Twitter card tags (for link previews on LinkedIn).
- `sitemap.xml` and `robots.txt` present.

**Accessibility**
- Semantic HTML (`header`, `nav`, `main`, `section`, `footer`).
- All images have meaningful `alt` text.
- Color contrast meets WCAG AA.
- Everything works with keyboard only; visible focus states.

**Security**
- Contact form: CSRF protection, validation, rate limiting, honeypot or captcha.
- Never commit `.env` or secrets.

---

## 9. Workflow Rules for Claude

1. Before coding, briefly state the plan and which files you'll change.
2. Make the smallest change that solves the task.
3. Don't refactor unrelated code unless asked.
4. After changes: run lint + tests + build, and report results.
5. If something is unclear, ask instead of guessing.
6. When adding a UI section, make it responsive and dark-mode ready from the start.

---

## 10. Do NOT

- Do not change the color palette or fonts without asking.
- Do not install new packages without approval.
- Do not edit `.env`, deployment configs, or `resume.pdf`.
- Do not use placeholder lorem ipsum in committed code — use real or clearly marked `TODO` content.
- Do not remove existing tests.