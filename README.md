# James Afful — Portfolio

Personal portfolio website for **James Afful** — DevOps Engineer, Backend Developer, Full-Stack (React), Python & AI Automation.

Built with **React + Vite + Tailwind CSS v3**.

---

## Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Install & Run

```bash
# 1. Navigate into the project
cd james-afful-portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🏗️ Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder. Deploy it to any static host:
- **Netlify**: drag & drop the `dist/` folder
- **Vercel**: `vercel --prod`
- **GitHub Pages**: use `gh-pages` package
- **AWS S3 + CloudFront**: upload `dist/` contents

-# Project Structure

```
james-afful-portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Fixed nav with mobile menu + theme toggle
│   │   ├── Hero.jsx         # Landing section with terminal card
│   │   ├── About.jsx        # About + stats grid
│   │   ├── Skills.jsx       # Skills by category
│   │   ├── Projects.jsx     # Filterable project cards
│   │   ├── Workflow.jsx     # DevOps pipeline diagram
│   │   ├── GitHub.jsx       # GitHub profile section
│   │   ├── Research.jsx     # Research & innovation cards
│   │   ├── Contact.jsx      # Contact form + links
│   │   └── Footer.jsx       # Site footer
│   ├── data/
│   │   └── data.js          # ← All content lives here (easy to update)
│   ├── hooks/
│   │   └── useScrollFadeUp.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

---

##  Customising Content

All portfolio content is in **`src/data/data.js`**:

- `skillCategories` — skills grouped by category
- `projects` — all project cards with stack, links, and descriptions
- `researchItems` — research & innovation cards
- `workflowSteps` — the DevOps pipeline steps

To update contact links, GitHub URL, LinkedIn, or email — edit **`src/components/Contact.jsx`** and **`src/components/GitHub.jsx`**.

To add your resume PDF:
1. Place your resume file in `public/james-afful-resume.pdf`
2. Search for `alert('Replace with your resume PDF link.')` in the codebase
3. Replace with: `window.open('/james-afful-resume.pdf', '_blank')`

---

## Design

- **Dark/light mode** — toggle in the navbar, persisted to localStorage
- **Fonts**: Syne (display) + Space Mono (code) + DM Sans (body)
- **Accent colors**: `#00e6a0` (cyan-green) + `#00b8ff` (electric blue)
- **Animations**: floating terminal card, fade-up scroll reveals, status dot blink
- **Responsive**: mobile, tablet, desktop

---

##  Tech Stack

| Tool | Version |
|------|---------|
| React | 18 |
| Vite | 5 |
| Tailwind CSS | 3 |

---

© 2025 James Afful · Ghana 🇬🇭
