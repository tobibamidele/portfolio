# Tobi Franklin — Portfolio

Personal portfolio website built with React + Vite + Tailwind CSS.

## Stack
- **React 18** — UI
- **Vite** — Build tool
- **Tailwind CSS v3** — Styling
- **Geist** — Font (Google Fonts)

## Getting Started

```bash
npm install
npm run dev
```

## Deploy to Vercel

### Option A — Vercel CLI
```bash
npm install -g vercel
vercel
```

### Option B — Vercel Dashboard
1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Vercel auto-detects Vite — just click **Deploy**

No extra configuration needed — `vercel.json` is already set up.

## Project Structure

```
src/
  components/
    Hero.jsx          # Landing section
    About.jsx         # About section
    Projects.jsx      # Side projects grid
    ProjectCard.jsx   # Individual project card
    Footer.jsx        # Footer
  App.jsx
  main.jsx
  index.css
```

## Updating Projects

Edit the `projects` array in `src/components/Projects.jsx`:

```js
const projects = [
  {
    name: 'YourProject',
    description: 'Short description.',
    githubUrl: 'https://github.com/you/project',
    icon: null, // or an image URL
  },
  // ...
]
```
