# Portfolio

Personal portfolio site — React + Vite, deployable to GitHub Pages.

## ✏️ Editing your content

Open **`src/data.js`** — all your content lives there. Change jobs, add projects, add posts. No other files need to be touched for content updates.

## 🚀 Local dev

```bash
npm install
npm run dev
```

Visit `http://localhost:5173`

## 📦 Deploy to GitHub Pages

### Option A — Username site (`chinmaya.github.io`)

1. Create a repo named `<your-username>.github.io`
2. In `vite.config.js`, set `base: '/'`
3. Run:
```bash
npm install
npm run deploy
```

### Option B — Project site (`chinmaya.github.io/portfolio`)

1. Create a repo named `portfolio` (or anything)
2. In `vite.config.js`, set `base: '/portfolio/'` (match your repo name)
3. Run:
```bash
npm install
npm run deploy
```

Both options use `gh-pages` which auto-pushes the `dist/` build to the `gh-pages` branch. Enable GitHub Pages in your repo **Settings → Pages → Deploy from branch → gh-pages**.

## 🗂️ Project structure

```
src/
├── data.js              ← ✏️ Edit your content here
├── App.jsx              ← Root component, wires sections together
├── index.css            ← All styles + CSS variables
├── main.jsx             ← React entry point
├── hooks/
│   ├── useTheme.js      ← Dark/light toggle with localStorage
│   └── useReveal.js     ← IntersectionObserver for scroll animations
└── components/
    ├── Nav.jsx
    ├── Hero.jsx
    ├── About.jsx
    ├── Experience.jsx
    ├── Projects.jsx
    ├── Skills.jsx
    ├── Writing.jsx
    ├── Contact.jsx
    ├── Footer.jsx
    └── Icons.jsx
```

## Adding content

**New job:** Add a block to `experience` in `src/data.js`

**New project:** Add a block to `projects` in `src/data.js`

**New post:** Add a line to `posts` in `src/data.js`:
```js
{ date: "Mar 2025", title: "Your Post Title", tag: "Systems", href: "/posts/your-post.html" }
```
