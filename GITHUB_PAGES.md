# Deploying DevKit on GitHub Pages

This package is configured for:

- GitHub owner: `Saiiz`
- Repository: `devkit`
- Site: `https://saiiz.github.io/devkit/`
- Branch: `main`

## Publish

1. Copy these files into the root of the `Saiiz/devkit` repository.
2. Commit and push to `main`.
3. In GitHub: **Settings → Pages → Source → GitHub Actions**.
4. Open **Actions → Deploy DevKit to GitHub Pages**.
5. Wait for both `build` and `deploy` to be green.
6. Open `https://saiiz.github.io/devkit/`.

The Vite `base` is already set to `/devkit/` so JS/CSS asset paths work on the project Pages URL.
