# Portfolio Website — Design Spec

**Date:** 2026-07-17
**Author:** Generated via brainstorming with shamough1792
**Status:** Approved design, pending implementation plan

## Overview

Single-page portfolio website for shamough1792 (GitHub: @shamough1792), built as a
React SPA targeting potential employers. Showcases projects, skills, education,
and contact information with a GitHub Dark aesthetic.

## Target Audience

Potential employers / recruiters. Primary goal: demonstrate technical capability
through clean, functional design that references the GitHub ecosystem the user
operates in.

## Tech Stack

| Layer | Choice | Rationale |
|-------|--------|-----------|
| Framework | React 18+ | User's existing JS familiarity; SPA fits single-page scope |
| Bundler | Vite | Fast dev server, modern toolchain, simple GitHub Pages deploy |
| Routing | React Router | Hash-based SPA routing for GitHub Pages compatibility |
| Styling | CSS Modules + CSS Variables | Scoped styles, easy palette swapping, zero-dependency |
| Icons | Inline SVG / emoji | Keep it dependency-free; no icon library needed |
| Deployment | GitHub Pages + GitHub Actions | Free, integrates with existing GitHub workflow |

## Palette (GitHub Dark)

Defined as CSS custom properties on `:root`:

```css
:root {
  --bg-primary:   #0d1117;
  --bg-card:      #161b22;
  --bg-nav:       #0d1117;
  --border:       #21262d;
  --accent:       #58a6ff;
  --accent-hover: #79c0ff;
  --green:        #238636;
  --text-primary: #f0f6fc;
  --text-secondary: #8b949e;
  --text-muted:   #484f58;
  --tag-bg:       rgba(88, 166, 255, 0.1);
  --tag-border:   #30363d;
}
```

> All colors live in `:root`. Swapping the palette means changing only these
> values — no per-component color hunting.

## Layout & Sections

### Navigation Bar
- Fixed top, transparent → solid on scroll (`--bg-nav` with opacity transition)
- Left: logo mark `<SG />`
- Right: 關於 / 技能 / 專案 / 學歷 / 聯絡 links + Resume download button
- Resume button styled as outlined accent button

### Hero Section (左右不對稱)
- Left column: "OPEN TO WORK" badge, name (large, bold), tagline, short bio, CTA buttons
- Right column: gradient avatar circle on `--bg-card` background
- CTA: GitHub (green button) + LinkedIn (outline button)

### About Section
- Clean prose block, max-width constrained
- Brief intro: HKMU CS student, full-stack + game dev, location

### Skills Section
- Grouped by category: Frontend / Backend / Other
- Each skill rendered as a pill/badge
- Active/expert skills get accent-colored pills with tinted background

### Projects Section
- Project cards staggered left/right (offset alternating)
- Each card: left accent bar (blue), title + year, description, tech tags
- "View on GitHub →" link in section header
- Projects pulled from a local data file (manually curated, not live API)

### Education + Contact (並排)
- Left: timeline-style education entry (blue vertical line + dot)
- Right: contact links (GitHub, LinkedIn, Email)

### Footer
- Copyright year, "Built with React · Hosted on GitHub Pages"

## Component Tree

```
App
├── Navbar (fixed, scroll-aware)
├── Hero
│   ├── Badge
│   ├── IntroText
│   └── CTAButtons
├── AboutSection
├── SkillsSection
│   └── SkillCategory (×3)
├── ProjectsSection
│   └── ProjectCard (×N, staggered)
├── EducationContactSection
│   ├── EducationTimeline
│   └── ContactLinks
└── Footer
```

## File Structure

```
portfolio-website/
├── public/
│   └── shamough1792-resume.pdf      # downloadable resume
├── src/
│   ├── App.jsx                       # root component, section composition
│   ├── App.module.css
│   ├── styles/
│   │   └── variables.css             # :root CSS variables (palette)
│   ├── components/
│   │   ├── Navbar.jsx + .module.css
│   │   ├── Hero.jsx + .module.css
│   │   ├── About.jsx + .module.css
│   │   ├── Skills.jsx + .module.css
│   │   ├── Projects.jsx + .module.css
│   │   ├── EducationContact.jsx + .module.css
│   │   └── Footer.jsx + .module.css
│   ├── data/
│   │   └── projects.js              # curated project list
│   └── main.jsx                     # entry point
├── index.html
├── vite.config.js
├── package.json
└── .github/
    └── workflows/
        └── deploy.yml               # GitHub Actions → GitHub Pages
```

## Interaction Details

- **Scroll-aware navbar:** `background: transparent` at top, solid `--bg-primary` after ~60px scroll, with `backdrop-filter: blur` subtle effect
- **Smooth scroll:** `scroll-behavior: smooth` on html, nav links use `element.scrollIntoView()`
- **Card hover:** slight `translateY(-2px)` + border highlight on project cards
- **Resume download:** direct link to `/shamough1792-resume.pdf`
- **Active nav link:** highlighted based on current scroll position (Intersection Observer)

## Responsive Breakpoints

- Mobile: single column, hamburger nav (or simplified nav), full-width cards
- Tablet: 2-column project grid
- Desktop: staggered layout as designed, max-width centered

## Future Considerations (not in v1)

- Blog section (would require routing and markdown rendering)
- Live GitHub repo stats via API (rate-limited, adds complexity)
- Dark/light theme toggle (easy with CSS variables, nice-to-have)
- Animation library on scroll (AOS / framer-motion)

## Success Criteria

1. All sections render correctly across mobile/tablet/desktop
2. Navigation scrolls smoothly to each section
3. GitHub Pages deploy succeeds via CI
4. Resume PDF downloadable
5. Lighthouse performance score ≥ 90
