# Ashish Ranjan — Portfolio

A polished, fully responsive React + Tailwind portfolio tailored for Ashish Ranjan. The site highlights DevOps, data, product projects and is optimised for GitHub Pages deployment at [`coolashishranjan44551-bit.github.io/ashish-portfolio`](https://coolashishranjan44551-bit.github.io/ashish-portfolio/).

## ✨ Highlights

- Modern React architecture (Vite) with modular sections and reusable UI primitives.
- Tailwind design system featuring gradients, glassmorphism touches and typography tuned for storytelling.
- Data-driven content (`src/data/resume.js`) makes updates quick without touching layout code.
- Ready-to-deploy GitHub Pages configuration (`homepage` + `vite.config.js#base`).
- Includes placeholder repositories to inspire showcasing deeper case studies — swap them with real links when available.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) **18.x or newer**. Installing Node automatically provides the `npm` CLI that the project
  scripts rely on. Verify your version with `node -v` and `npm -v`.
- An internet connection that can reach `https://registry.npmjs.org`. Corporate networks sometimes block this domain; if that
  happens, the install step will fail until the restriction is lifted or a proxy is configured.

### Install and run locally

```bash
npm install
npm run dev
```

The development server runs at [http://localhost:5173](http://localhost:5173). Hot reloading is enabled by default.

### Troubleshooting `npm install`

If you see `npm ERR! code E403` or `npm ERR! 403 Forbidden ... registry.npmjs.org`, your network is blocking the npm registry.
To fix it:

1. Confirm Node.js is installed (`node -v`). If not, install it from the official site or via a version manager such as
   [nvm](https://github.com/nvm-sh/nvm).
2. Check whether a firewall, VPN, or antivirus is intercepting npm traffic. Whitelist `registry.npmjs.org` or use your
   organisation's approved proxy. With npm you can run `npm config set proxy http://proxy.company.com:PORT` (and similarly for
   `https-proxy`).
3. If you cannot adjust the network, download the dependencies once from an unrestricted machine and copy the resulting
   `node_modules/` folder or create an offline npm mirror using tools like `npm pack` for each dependency.

Once the network access issue is resolved, re-run `npm install` and the portfolio will build normally.

codex/create-complete-portfolio-website-from-scratch-z8zjxg
### Removing the "Tests not run" warning

If you see status messages such as `Tests not run (npm install blocked by environment restrictions)` in pull request summaries or
CI logs, it simply means the automated checks could not execute because dependencies were missing. To clear the warning:

1. Ensure `npm install` completes successfully by following the troubleshooting steps above.
2. Run the available checks locally:

   ```bash
   npm run lint
   npm run build
   ```

   Both commands should finish without errors.
3. Commit the updated lockfile (if it changed) and push again. GitHub will rerun the workflow, and the "Tests not run" note will
   disappear once the commands succeed.
 main

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

### Automatic (recommended)

1. Push the repository to GitHub under the `coolashishranjan44551-bit/ashish-Portfolio` project.
2. In **Settings → Pages**, choose "GitHub Actions" as the deployment source. The included workflow (`.github/workflows/deploy.yml`) will:
   - install dependencies,
   - run the production build, and
   - publish the `dist/` output to GitHub Pages.
   Make sure the `homepage` field in `package.json` points to `https://coolashishranjan44551-bit.github.io/ashish-Portfolio/` so the generated asset paths match the GitHub Pages URL.
 codex/create-complete-portfolio-website-from-scratch-z8zjxg

   > **Note:** The workflow automatically skips npm caching when no `package-lock.json` is present (which is why the template does not enable caching yet). As soon as you run `npm install` locally and commit the generated lockfile, the workflow will detect it and enable `cache: npm` for faster builds.

 main
3. The first deploy takes a few minutes. Track progress under **Actions → Deploy to GitHub Pages**.
4. Once the workflow succeeds, the live site is available at [`https://coolashishranjan44551-bit.github.io/ashish-Portfolio/`](https://coolashishranjan44551-bit.github.io/ashish-Portfolio/).

### Manual (fallback)

```bash
npm run build
git subtree push --prefix dist origin gh-pages
```

## 🔀 Publishing the `main` branch

The portfolio now lives directly on the `main` branch. To publish it to your GitHub repository, run:

```bash
git status                        # ensure there are no local changes pending
git pull                          # grab the latest commits (should include this portfolio)
git remote add origin git@github.com:coolashishranjan44551-bit/ashish-Portfolio.git
git push -u origin main           # push the main branch once; subsequent pushes can omit -u
```

If you already have a remote configured, simply push `main`. Any future updates should also be committed on `main`; the GitHub Actions workflow is triggered automatically whenever `main` is updated.

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
