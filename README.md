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

1. Push the repository to GitHub under the `coolashishranjan44551-bit/ashish-portfolio` project.
2. In **Settings → Pages**, choose "GitHub Actions" as the deployment source. The included workflow (`.github/workflows/deploy.yml`) will:
   - install dependencies,
   - run the production build, and
   - publish the `dist/` output to GitHub Pages.
   Make sure the `homepage` field in `package.json` points to `https://coolashishranjan44551-bit.github.io/ashish-portfolio/` so the generated asset paths match the GitHub Pages URL.

   > **Note:** npm caching is disabled by default because no `package-lock.json` is committed yet. After you run `npm install` locally and add the generated lockfile to git, you can re-enable caching by editing `.github/workflows/deploy.yml` and adding `cache: npm` under the `actions/setup-node@v4` step.
3. The first deploy takes a few minutes. Track progress under **Actions → Deploy to GitHub Pages**.
4. Once the workflow succeeds, the live site is available at [`https://coolashishranjan44551-bit.github.io/ashish-portfolio/`](https://coolashishranjan44551-bit.github.io/ashish-portfolio/).

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
git remote add origin git@github.com:coolashishranjan44551-bit/ashish-portfolio.git
git push -u origin main           # push the main branch once; subsequent pushes can omit -u
```

If you already have a remote configured, simply push `main`. Any future updates should also be committed on `main`; the GitHub Actions workflow is triggered automatically whenever `main` is updated.

## 📥 Creating a Pull Request

If you prefer working on a separate branch (for example `work`) and want to open a pull request (PR) into `main`, follow these steps:

1. Make sure all changes are committed on your feature branch and pushed to GitHub:

   ```bash
   git status                     # confirm the branch is clean
   git push origin work           # replace 'work' with your branch name if different
   ```

2. In your browser, go to the repository page: `https://github.com/coolashishranjan44551-bit/ashish-portfolio`.
3. You should see a prompt offering to “Compare & pull request” for the branch you just pushed. Click that button. If you do not see the banner, choose **Pull requests → New pull request** and select `work` as the source branch and `main` as the target.
4. Review the diff, enter a descriptive PR title and summary, then click **Create pull request**.
5. Once the PR is approved (or you are satisfied with the changes), click **Merge pull request** and choose **Confirm merge**. GitHub will merge your branch into `main` and the deployment workflow will publish the latest build.

If merging locally is easier, you can also run:

```bash
git checkout main
git pull                          # get the latest main
git merge work                    # resolve any conflicts if prompted
git push origin main
```

After the merge, consider deleting the feature branch (`git branch -d work` and `git push origin --delete work`) to keep the repository tidy.

## 🔧 Customisation Checklist

- Update `contact.resume` in `src/data/resume.js` with your actual PDF link.
- Replace placeholder GitHub project URLs with the real repositories.
- Swap testimonial quotes with authentic feedback snippets.
- Replace `public/ashish-portrait.svg` with your own headshot (JPG/PNG/SVG). If you prefer a raster image, update
  `contact.image` to point at the new filename.
- Add OG images or analytics scripts via `index.html` if needed.

## 💡 GitHub Optimisation Tips

- Pin 3–6 repositories (including the two project repos referenced here) on your profile to reflect breadth across DevOps, analytics and product experiments.
- Use README badges (build status, live demo, tech stack) for quick visual credibility.
- Create case-study style READMEs for each featured project — include problem statements, approach diagrams and key metrics.

## 📄 License

This portfolio scaffold is provided without an explicit license. Feel free to adapt it for personal use.
