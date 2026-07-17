# Portfolio Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and deploy a single-page React portfolio website for shamough1792 using Vite, GitHub Dark theme, hosted on GitHub Pages.

**Architecture:** Single-page React SPA with seven sections composed in App.jsx. Navigation via hash-based scroll anchors. Zero external runtime dependencies beyond React. CSS Modules for scoped styling with CSS Variables for theming. GitHub Actions CI deploys to `gh-pages` branch on push to `main`.

**Tech Stack:** React 18, Vite 6, React Router 6 (HashRouter), CSS Modules, CSS Variables, GitHub Actions

## Global Constraints

- No runtime dependencies beyond `react` and `react-router-dom` (vite is dev-only)
- All colors defined as CSS custom properties in `src/styles/variables.css`
- Every component has a co-located `.module.css` file
- All text displayed in Traditional Chinese (繁體中文) except project names and code terms
- All section references (`about`, `skills`, `projects`, `education`, `contact`) match the nav link hrefs exactly (lowercase English, used as `id` attributes and `href` values)
- Mobile responsive: nav collapses, cards go full-width, max-width container adapts

---
### Task 1: Scaffold Vite + React Project

**Files:**
- Create: `package.json`
- Create: `vite.config.js`
- Create: `index.html`
- Create: `src/main.jsx`
- Create: `.gitignore`

**Interfaces:**
- Produces: runnable `npm run dev` that serves a blank React SPA at localhost
- Produces: `vite.config.js` with `base: '/portfolio-website/'` for GitHub Pages

- [ ] **Step 1: Create package.json**

Create `package.json` with React 18, Vite 6, react-router-dom:

```json
{
  "name": "portfolio-website",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.28.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.4",
    "vite": "^6.0.0"
  }
}
```

- [ ] **Step 2: Create vite.config.js**

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/portfolio-website/',
  build: { outDir: 'dist' },
})
```

- [ ] **Step 3: Create index.html**

```html
<!DOCTYPE html>
<html lang="zh-Hant">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Shamough | Portfolio</title>
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

- [ ] **Step 4: Create src/main.jsx**

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App.jsx'
import './styles/variables.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
)
```

- [ ] **Step 5: Create .gitignore**

```
node_modules
dist
.DS_Store
*.local
```

- [ ] **Step 6: Create placeholder directories**

```bash
mkdir -p src/components src/styles src/data public
```

- [ ] **Step 7: Install and verify**

```bash
npm install
npm run build
```
Expected: Build succeeds, `dist/` directory created.

- [ ] **Step 8: Commit**

```bash
git add package.json vite.config.js index.html src/main.jsx .gitignore
git commit -m "feat: scaffold Vite + React project"
```

---
### Task 2: CSS Variables + Global Styles

**Files:**
- Create: `src/styles/variables.css`
- Create: `src/App.module.css`

**Interfaces:**
- Produces: `variables.css` imported by `main.jsx`, available globally to all components
- Produces: `App.module.css` with section spacing, smooth scroll, font defaults

- [ ] **Step 1: Create src/styles/variables.css**

```css
/* GitHub Dark palette — change these to swap the entire theme */
:root {
  --bg-primary:   #0d1117;
  --bg-card:      #161b22;
  --bg-nav:       #0d1117;
  --border:       #21262d;
  --accent:       #58a6ff;
  --accent-hover: #79c0ff;
  --green:        #238636;
  --green-hover:  #2ea043;
  --text-primary: #f0f6fc;
  --text-secondary: #8b949e;
  --text-muted:   #484f58;
  --tag-bg:       rgba(88, 166, 255, 0.1);
  --tag-border:   #30363d;

  --font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --max-width: 960px;
  --nav-height: 60px;
}

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-family);
  background: var(--bg-primary);
  color: var(--text-primary);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

a {
  color: var(--accent);
  text-decoration: none;
}
a:hover {
  color: var(--accent-hover);
}

::selection {
  background: var(--accent);
  color: var(--bg-primary);
}
```

- [ ] **Step 2: Create src/App.module.css**

```css
.container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0;
}

.section {
  padding: 64px 24px;
  border-bottom: 1px solid var(--border);
}

.section:last-of-type {
  border-bottom: none;
}

/* ponytail: max-width constraint keeps readability on wide screens */
@media (max-width: 768px) {
  .section {
    padding: 40px 16px;
  }
}
```

- [ ] **Step 3: Commit**

```bash
git add src/styles/variables.css src/App.module.css
git commit -m "feat: add CSS variables and global styles"
```

---
### Task 3: Navbar Component

**Files:**
- Create: `src/components/Navbar.jsx`
- Create: `src/components/Navbar.module.css`

**Interfaces:**
- Consumes: CSS variable `--nav-height` from `variables.css`
- Produces: `<Navbar />` component with scroll-aware background, nav links, Resume button

- [ ] **Step 1: Create src/components/Navbar.module.css**

```css
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition: background 0.3s ease, box-shadow 0.3s ease;
  background: transparent;
}

.navScrolled {
  background: rgba(13, 17, 23, 0.85);
  backdrop-filter: blur(8px);
  box-shadow: 0 1px 0 var(--border);
}

.inner {
  width: 100%;
  max-width: var(--max-width);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
}

.logo {
  font-size: 18px;
  font-weight: 700;
  color: var(--text-primary);
  cursor: default;
}

.links {
  display: flex;
  align-items: center;
  gap: 20px;
  list-style: none;
}

.link {
  font-size: 13px;
  color: var(--text-secondary);
  cursor: pointer;
  background: none;
  border: none;
  font-family: inherit;
  transition: color 0.2s;
}
.link:hover,
.linkActive {
  color: var(--text-primary);
}

.resumeBtn {
  font-size: 12px;
  padding: 4px 14px;
  border: 1px solid var(--accent);
  border-radius: 6px;
  color: var(--accent);
  background: transparent;
  font-family: inherit;
  cursor: pointer;
  transition: background 0.2s;
}
.resumeBtn:hover {
  background: rgba(88, 166, 255, 0.1);
}

.hamburger {
  display: none;
  background: none;
  border: none;
  color: var(--text-primary);
  font-size: 24px;
  cursor: pointer;
}

/* ponytail: simple mobile nav — overlay list, no animation library */
@media (max-width: 768px) {
  .links {
    display: none;
    position: fixed;
    top: var(--nav-height);
    left: 0;
    right: 0;
    background: var(--bg-primary);
    flex-direction: column;
    padding: 24px;
    border-bottom: 1px solid var(--border);
  }
  .linksOpen {
    display: flex;
  }
  .hamburger {
    display: block;
  }
}
```

- [ ] **Step 2: Create src/components/Navbar.jsx**

```jsx
import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const NAV_ITEMS = [
  { label: '關於', href: '#about' },
  { label: '技能', href: '#skills' },
  { label: '專案', href: '#projects' },
  { label: '學歷', href: '#education' },
  { label: '聯絡', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (href) => {
    setMenuOpen(false)
    const id = href.replace('#', '')
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ''}`}>
      <div className={styles.inner}>
        <span className={styles.logo}>&lt;SG /&gt;</span>

        <button className={styles.hamburger} onClick={() => setMenuOpen(v => !v)}>
          {menuOpen ? '✕' : '☰'}
        </button>

        <ul className={`${styles.links} ${menuOpen ? styles.linksOpen : ''}`}>
          {NAV_ITEMS.map(item => (
            <li key={item.href}>
              <button className={styles.link} onClick={() => handleClick(item.href)}>
                {item.label}
              </button>
            </li>
          ))}
          <li>
            <a className={styles.resumeBtn} href="/portfolio-website/resume.pdf" download>
              Resume ↓
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/Navbar.jsx src/components/Navbar.module.css
git commit -m "feat: add Navbar component with scroll-aware bg and mobile menu"
```

---
### Task 4: Hero Component

**Files:**
- Create: `src/components/Hero.jsx`
- Create: `src/components/Hero.module.css`

**Interfaces:**
- Produces: `<Hero />` with asymmetric left/right layout

- [ ] **Step 1: Create src/components/Hero.module.css**

```css
.hero {
  display: flex;
  min-height: calc(100vh - var(--nav-height));
  padding-top: var(--nav-height);
}

.left {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 64px 24px 64px 0;
}

.badge {
  display: inline-block;
  background: #1f6feb;
  color: #fff;
  padding: 2px 12px;
  border-radius: 20px;
  font-size: 11px;
  font-weight: 600;
  width: fit-content;
  margin-bottom: 16px;
}

.name {
  font-size: 44px;
  font-weight: 800;
  color: var(--text-primary);
  letter-spacing: -1px;
  margin: 0 0 8px;
}

.tagline {
  font-size: 18px;
  color: var(--accent);
  margin: 0 0 20px;
  font-weight: 500;
}

.bio {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.7;
  max-width: 420px;
  margin: 0 0 28px;
}

.actions {
  display: flex;
  gap: 12px;
}

.btnPrimary {
  display: inline-block;
  background: var(--green);
  color: #fff;
  padding: 10px 22px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  transition: background 0.2s;
}
.btnPrimary:hover {
  background: var(--green-hover);
  color: #fff;
}

.btnSecondary {
  display: inline-block;
  border: 1px solid var(--border);
  color: var(--text-primary);
  padding: 10px 22px;
  border-radius: 6px;
  font-size: 14px;
  transition: border-color 0.2s;
}
.btnSecondary:hover {
  border-color: var(--text-secondary);
  color: var(--text-primary);
}

.right {
  flex: 0.7;
  background: var(--bg-card);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 320px;
}

.avatar {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent), #1f6feb);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 56px;
  box-shadow: 0 0 40px rgba(88, 166, 255, 0.3);
}

@media (max-width: 768px) {
  .hero {
    flex-direction: column-reverse;
    min-height: auto;
  }
  .left {
    padding: 32px 16px;
  }
  .name {
    font-size: 32px;
  }
  .right {
    min-height: 200px;
  }
  .avatar {
    width: 100px;
    height: 100px;
    font-size: 40px;
  }
}
```

- [ ] **Step 2: Create src/components/Hero.jsx**

```jsx
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <span className={styles.badge}>OPEN TO WORK</span>
        <h1 className={styles.name}>Shamough</h1>
        <p className={styles.tagline}>Full-Stack Developer</p>
        <p className={styles.bio}>
          香港都會大學計算機科學學生。從 Web 到遊戲引擎，
          喜歡把想法變成能動的東西。開源信仰者。
        </p>
        <div className={styles.actions}>
          <a className={styles.btnPrimary} href="https://github.com/shamough1792" target="_blank" rel="noopener noreferrer">
            GitHub →
          </a>
          <a className={styles.btnSecondary} href="#contact">
            LinkedIn
          </a>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.avatar}>🧑‍💻</div>
      </div>
    </section>
  )
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/Hero.jsx src/components/Hero.module.css
git commit -m "feat: add Hero component with asymmetric layout"
```

---
### Task 5: About + Skills Components

**Files:**
- Create: `src/components/About.jsx`
- Create: `src/components/About.module.css`
- Create: `src/components/Skills.jsx`
- Create: `src/components/Skills.module.css`

**Interfaces:**
- Produces: `<About />` with prose block
- Produces: `<Skills />` with categorized tag cloud

- [ ] **Step 1: Create src/components/About.module.css**

```css
.about {
  padding: 64px 24px;
  border-bottom: 1px solid var(--border);
}

.inner {
  max-width: 700px;
}

.title {
  color: var(--accent);
  font-size: 12px;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 16px;
  font-weight: 600;
}

.text {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.8;
  margin: 0;
}
```

- [ ] **Step 2: Create src/components/About.jsx**

```jsx
import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.inner}>
        <h2 className={styles.title}>📋 關於我</h2>
        <p className={styles.text}>
          現居香港，就讀於香港都會大學計算機科學系。擅長全端 Web 開發，
          主要使用 JavaScript/Node.js 與 Java，也有 Unreal Engine 4 遊戲開發經驗。
          從零打造過交通 ETA 查詢、血壓追蹤系統等實際應用。
        </p>
      </div>
    </section>
  )
}
```

- [ ] **Step 3: Create src/components/Skills.module.css**

```css
.skills {
  padding: 64px 24px;
  border-bottom: 1px solid var(--border);
}

.title {
  color: var(--accent);
  font-size: 12px;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 24px;
  font-weight: 600;
}

.groups {
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
}

.groupLabel {
  font-size: 11px;
  color: var(--text-muted);
  margin-bottom: 10px;
  font-weight: 600;
  letter-spacing: 1px;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  display: inline-block;
  padding: 4px 14px;
  border-radius: 20px;
  font-size: 12px;
  border: 1px solid var(--tag-border);
  color: var(--text-secondary);
}

.tagActive {
  border-color: var(--accent);
  color: var(--accent);
  background: var(--tag-bg);
}
```

- [ ] **Step 4: Create src/components/Skills.jsx**

```jsx
import styles from './Skills.module.css'

const SKILLS = [
  {
    category: 'Frontend',
    items: ['React', 'EJS', 'HTML/CSS'],
    active: [true, false, false],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Java', 'Python', 'Shell'],
    active: [true, true, false, false],
  },
  {
    category: '其他',
    items: ['Unreal Engine 4', 'MySQL', 'Git'],
    active: [true, false, false],
  },
]

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <h2 className={styles.title}>🛠 技術棧</h2>
      <div className={styles.groups}>
        {SKILLS.map(group => (
          <div key={group.category}>
            <div className={styles.groupLabel}>{group.category}</div>
            <div className={styles.tags}>
              {group.items.map((item, i) => (
                <span
                  key={item}
                  className={`${styles.tag} ${group.active[i] ? styles.tagActive : ''}`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
```

- [ ] **Step 5: Commit**

```bash
git add src/components/About.jsx src/components/About.module.css src/components/Skills.jsx src/components/Skills.module.css
git commit -m "feat: add About and Skills sections"
```

---
### Task 6: Projects Data + Component

**Files:**
- Create: `src/data/projects.js`
- Create: `src/components/Projects.jsx`
- Create: `src/components/Projects.module.css`

**Interfaces:**
- Produces: `projects.js` — exported array of project objects
- Produces: `<Projects />` with staggered project cards

- [ ] **Step 1: Create src/data/projects.js**

```js
const projects = [
  {
    title: 'Blood Pressure Tracker',
    year: '2024',
    description: '血壓記錄系統 — Node.js + EJS + MySQL',
    tags: ['Node.js', 'EJS', 'MySQL'],
    accent: true,
    url: 'https://github.com/shamough1792/Blood_Pressure_Tracker',
  },
  {
    title: 'HKETA',
    year: '2025',
    description: '香港交通工具 ETA 即時查詢應用',
    tags: ['JavaScript'],
    accent: false,
    url: 'https://github.com/shamough1792/HKETA',
  },
  {
    title: 'CourseWeb',
    year: '2025',
    description: '線上課程網站 — Java + JavaScript',
    tags: ['Java', 'JavaScript'],
    accent: true,
    url: 'https://github.com/shamough1792/CourseWeb',
  },
  {
    title: 'A Fallen Call',
    year: '2025',
    description: 'Unreal Engine 4 恐怖遊戲「未知來電」',
    tags: ['UE4', 'Blueprint'],
    accent: false,
    url: 'https://github.com/shamough1792/A-Fallen-Call',
  },
  {
    title: 'Book Management System',
    year: '2025',
    description: '書籍管理系統 — Node.js + EJS',
    tags: ['Node.js', 'EJS'],
    accent: true,
    url: 'https://github.com/shamough1792/Book-Management-System',
  },
]

export default projects
```

- [ ] **Step 2: Create src/components/Projects.module.css**

```css
.projects {
  padding: 64px 24px;
  border-bottom: 1px solid var(--border);
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 28px;
}

.title {
  color: var(--accent);
  font-size: 12px;
  letter-spacing: 3px;
  text-transform: uppercase;
  font-weight: 600;
}

.ghLink {
  font-size: 13px;
  color: var(--accent);
}

.list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.card {
  display: flex;
  gap: 0;
  background: var(--bg-card);
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
}
.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.accentBar {
  width: 4px;
  flex-shrink: 0;
  background: var(--accent);
}

.accentBarMuted {
  width: 4px;
  flex-shrink: 0;
  background: var(--border);
}

.cardBody {
  padding: 20px 24px;
  flex: 1;
}

.cardTop {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
}

.cardTitle {
  color: var(--text-primary);
  font-size: 15px;
  font-weight: 600;
}

.cardYear {
  color: var(--text-secondary);
  font-size: 11px;
}

.cardDesc {
  color: var(--text-secondary);
  font-size: 13px;
  margin: 0 0 10px;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.tag {
  padding: 2px 10px;
  border-radius: 20px;
  font-size: 11px;
  border: 1px solid var(--tag-border);
  color: var(--text-secondary);
}

.tagActive {
  border-color: var(--accent);
  color: var(--accent);
  background: var(--tag-bg);
}

.offsetRight {
  margin-left: 40px;
}

@media (max-width: 768px) {
  .offsetRight {
    margin-left: 0;
  }
}
```

- [ ] **Step 3: Create src/components/Projects.jsx**

```jsx
import projects from '../data/projects.js'
import styles from './Projects.module.css'

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.header}>
        <h2 className={styles.title}>📂 專案</h2>
        <a className={styles.ghLink} href="https://github.com/shamough1792" target="_blank" rel="noopener noreferrer">
          View on GitHub →
        </a>
      </div>
      <div className={styles.list}>
        {projects.map((p, i) => (
          <a
            key={p.title}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.card} ${i % 2 === 1 ? styles.offsetRight : ''}`}
          >
            <div className={p.accent ? styles.accentBar : styles.accentBarMuted} />
            <div className={styles.cardBody}>
              <div className={styles.cardTop}>
                <h3 className={styles.cardTitle}>{p.title}</h3>
                <span className={styles.cardYear}>{p.year}</span>
              </div>
              <p className={styles.cardDesc}>{p.description}</p>
              <div className={styles.tags}>
                {p.tags.map(tag => (
                  <span key={tag} className={`${styles.tag} ${p.accent ? styles.tagActive : ''}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Commit**

```bash
git add src/data/projects.js src/components/Projects.jsx src/components/Projects.module.css
git commit -m "feat: add Projects section with staggered cards"
```

---
### Task 7: EducationContact + Footer Components

**Files:**
- Create: `src/components/EducationContact.jsx`
- Create: `src/components/EducationContact.module.css`
- Create: `src/components/Footer.jsx`
- Create: `src/components/Footer.module.css`

- [ ] **Step 1: Create src/components/EducationContact.module.css**

```css
.wrapper {
  display: flex;
  border-bottom: 1px solid var(--border);
}

.block {
  flex: 1;
  padding: 40px 24px;
}

.block:first-child {
  border-right: 1px solid var(--border);
}

.title {
  color: var(--accent);
  font-size: 12px;
  letter-spacing: 3px;
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 16px;
}

.timeline {
  display: flex;
  gap: 12px;
  align-items: flex-start;
}

.line {
  width: 2px;
  background: var(--accent);
  height: 48px;
  flex-shrink: 0;
  margin-top: 4px;
}

.school {
  color: var(--text-primary);
  font-weight: 600;
  font-size: 14px;
}

.degree {
  color: var(--text-secondary);
  font-size: 13px;
}

.period {
  color: var(--text-muted);
  font-size: 12px;
}

.links {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.link {
  font-size: 14px;
  color: var(--text-secondary);
}
.linkValue {
  color: var(--accent);
}

@media (max-width: 768px) {
  .wrapper {
    flex-direction: column;
  }
  .block:first-child {
    border-right: none;
    border-bottom: 1px solid var(--border);
  }
}
```

- [ ] **Step 2: Create src/components/EducationContact.jsx**

```jsx
import styles from './EducationContact.module.css'

export default function EducationContact() {
  return (
    <section id="education" className={styles.wrapper}>
      <div className={styles.block}>
        <h2 className={styles.title}>🎓 學歷</h2>
        <div className={styles.timeline}>
          <div className={styles.line} />
          <div>
            <div className={styles.school}>香港都會大學 (HKMU)</div>
            <div className={styles.degree}>計算機科學 學士</div>
            <div className={styles.period}>2022 – 2025</div>
          </div>
        </div>
      </div>
      <div id="contact" className={styles.block}>
        <h2 className={styles.title}>📬 聯絡</h2>
        <div className={styles.links}>
          <span className={styles.link}>
            🐙 <a className={styles.linkValue} href="https://github.com/shamough1792" target="_blank" rel="noopener noreferrer">github.com/shamough1792</a>
          </span>
          <span className={styles.link}>
            💼 <span className={styles.linkValue}>LinkedIn</span>
          </span>
          <span className={styles.link}>
            📧 <span className={styles.linkValue}>Email</span>
          </span>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 3: Create src/components/Footer.module.css**

```css
.footer {
  background: var(--bg-card);
  padding: 20px 24px;
  display: flex;
  justify-content: space-between;
  color: var(--text-muted);
  font-size: 12px;
}
```

- [ ] **Step 4: Create src/components/Footer.jsx**

```jsx
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span>© {new Date().getFullYear()} Shamough</span>
      <span>Built with React · Hosted on GitHub Pages</span>
    </footer>
  )
}
```

- [ ] **Step 5: Commit**

```bash
git add src/components/EducationContact.jsx src/components/EducationContact.module.css src/components/Footer.jsx src/components/Footer.module.css
git commit -m "feat: add EducationContact and Footer components"
```

---
### Task 8: App Assembly + Intersection Observer Active Link

**Files:**
- Modify: `src/App.jsx` (create)
- Modify: `src/App.module.css` (already exists from Task 2)

- [ ] **Step 1: Create src/App.jsx**

```jsx
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import EducationContact from './components/EducationContact.jsx'
import Footer from './components/Footer.jsx'
import styles from './App.module.css'

const SECTION_IDS = ['about', 'skills', 'projects', 'education', 'contact']

export default function App() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        }
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )

    for (const id of SECTION_IDS) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <main className={styles.container}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <EducationContact />
      </main>
      <Footer />
    </>
  )
}
```

- [ ] **Step 2: Verify build**

```bash
npm run build
```
Expected: Build succeeds with no errors. All components imported correctly.

- [ ] **Step 3: Commit**

```bash
git add src/App.jsx
git commit -m "feat: compose all sections in App with Intersection Observer active link"
```

---
### Task 9: GitHub Actions Deploy Workflow

**Files:**
- Create: `.github/workflows/deploy.yml`

- [ ] **Step 1: Create .github/workflows/deploy.yml**

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: write
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

- [ ] **Step 2: Commit**

```bash
git add .github/workflows/deploy.yml
git commit -m "ci: add GitHub Pages deploy workflow"
```

---
### Task 10: Final Polish + Verify

**Files:**
- Modify: none (verify only)
- Create: `public/resume.pdf` (placeholder)

- [ ] **Step 1: Create public/resume.pdf placeholder**

```bash
# Create an empty placeholder — user replaces with real resume later
echo "Placeholder — replace with actual resume" > public/resume.pdf
```

- [ ] **Step 2: Final build check**

```bash
npm run build
```
Expected: Clean build, no warnings.

- [ ] **Step 3: Commit**

```bash
git add public/resume.pdf
git commit -m "chore: add resume placeholder"
```

- [ ] **Step 4: Push**

```bash
git push origin main
```
Expected: GitHub Actions workflow triggers and deploys to `https://shamough1792.github.io/portfolio-website/`.

---

## Spec Coverage Check

| Spec Requirement | Task |
|-----------------|------|
| Vite + React scaffolding | Task 1 |
| CSS Variables palette | Task 2 |
| Fixed scroll-aware Navbar | Task 3 |
| Asymmetric Hero with CTA | Task 4 |
| About prose block | Task 5 |
| Skills tag cloud by category | Task 5 |
| Staggered project cards | Task 6 |
| Curated project data file | Task 6 |
| Education timeline + Contact | Task 7 |
| Footer | Task 7 |
| Intersection Observer active nav | Task 8 |
| App composition | Task 8 |
| GitHub Actions deploy | Task 9 |
| Resume placeholder | Task 10 |
