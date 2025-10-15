# Ashish Ranjan — Portfolio

A polished, fully responsive React + Tailwind portfolio tailored for Ashish Ranjan. The site highlights DevOps, data, product projects and is optimised for GitHub Pages deployment at [`coolashishranjan44551-bit.github.io/ashish-Portfolio`](https://coolashishranjan44551-bit.github.io/ashish-Portfolio/).

## ✨ Highlights

- Modern React architecture (Vite) with modular sections and reusable UI primitives.
- Tailwind design system featuring gradients, glassmorphism touches and typography tuned for storytelling.
- Data-driven content (`src/data/resume.js`) makes updates quick without touching layout code.
- Ready-to-deploy GitHub Pages configuration (`homepage` + `vite.config.js#base`).
- Includes placeholder repositories to inspire showcasing deeper case studies — swap them with real links when available.

## 🚀 Getting Started

```bash
npm install
npm run dev
```

The development server runs at [http://localhost:5173](http://localhost:5173). Hot reloading is enabled by default.

## 🧱 Project Structure

```
.
├── public/              # Static assets (favicon, OG images)
├── src/
│   ├── components/      # Layout primitives (cards, navigation, footer)
│   ├── data/            # Centralised resume/portfolio data
│   ├── sections/        # Page sections (hero, projects, contact, ...)
│   ├── App.jsx          # Composition root
│   └── main.jsx         # React entry point
├── index.html           # Vite HTML shell (loads fonts + root div)
└── tailwind.config.js   # Custom design tokens
```

## 📦 Scripts

| Command        | Description                          |
| -------------- | ------------------------------------ |
| `npm run dev`  | Start local dev server               |
| `npm run build`| Build production assets              |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint with the provided config  |

## 🌐 Deploying to GitHub Pages

1. Push the repository to GitHub under the `coolashishranjan44551-bit/ashish-Portfolio` project.
2. Run `npm run build` to generate the `dist` folder.
3. Deploy using the GitHub Pages workflow (enable `gh-pages` branch or use GitHub Actions). For manual deployment:

   ```bash
   npm run build
   git subtree push --prefix dist origin gh-pages
   ```

4. Confirm the site at [`https://coolashishranjan44551-bit.github.io/ashish-Portfolio/`](https://coolashishranjan44551-bit.github.io/ashish-Portfolio/).

## 🔧 Customisation Checklist

- Update `contact.resume` in `src/data/resume.js` with your actual PDF link.
- Replace placeholder GitHub project URLs with the real repositories.
- Swap testimonial quotes with authentic feedback snippets.
- Add OG images or analytics scripts via `index.html` if needed.

## 💡 GitHub Optimisation Tips

- Pin 3–6 repositories (including the two project repos referenced here) on your profile to reflect breadth across DevOps, analytics and product experiments.
- Use README badges (build status, live demo, tech stack) for quick visual credibility.
- Create case-study style READMEs for each featured project — include problem statements, approach diagrams and key metrics.

## 📄 License

This portfolio scaffold is provided without an explicit license. Feel free to adapt it for personal use.
