# Mahadi Islam – Portfolio (React + Vite + Tailwind + Framer Motion)
Frontend-only. No backend, database or API.

## Run on Windows 11 + VS Code
1. Install Node.js LTS from https://nodejs.org (accept defaults), then restart your PC/VS Code. Check: `node -v`
2. VS Code → File → Open Folder → `mahadi-portfolio`. Open a terminal (Ctrl + `).
3. `npm install`
4. `npm run dev` → open http://localhost:5173

## Customize
- Text, skills, education, projects, Codeforces/LeetCode links, LinkedIn URL: `src/data/portfolio.js`
- Photo: replace `public/profile.jpg`. Resume: replace `public/Mahadi_Islam_CV.pdf` (keep the same name or edit `cv` in portfolio.js).
- Keep the public resume free of passport/NID/home address/parents' names/date of birth. The included PDF is already sanitized.

## Build: `npm run build` (output in `dist/`; test with `npm run preview`)

## Deploy free
- **Vercel**: push to GitHub → vercel.com → Add New Project → import repo → Deploy (auto-detects Vite).
- **Netlify**: netlify.com → Add new site → import repo, build `npm run build`, publish `dist`. (Or drag-drop the `dist` folder.)
- **GitHub Pages**: push to GitHub → Settings → Pages → Source: GitHub Actions → choose the "Vite" / static workflow, or upload `dist` contents to a `gh-pages` branch. `base: './'` is already set.
