# Shruthi Andru Portfolio — Project & Deployment Context

This file documents how the **shruthiandru.com** portfolio is built, hosted, and changed.
Hand this file to Claude (along with access to the GitHub repo) and it will have everything
needed to edit the site and ship changes. If placed at the repo root as `CLAUDE.md`, Claude
Code will load it automatically.

---

## 1. What this is

- A personal portfolio website for Shruthi Andru (Product Designer at Adobe).
- Live at **https://shruthiandru.com** (also `www.shruthiandru.com`).
- Single-page React app with a "blueprint" aesthetic, plus an `/articles` route.
- Source of truth is the GitHub repo: **https://github.com/shruthiandru/Portfolio** (branch `main`).
- There is **no Replit anymore** — all edits happen directly in the GitHub repo.

## 2. Tech stack

- **Vite + React 18 + TypeScript** (originally a Replit "rest-express" template).
- Routing: **wouter** (`client/src/App.tsx`).
- Styling: Tailwind + custom CSS (`client/src/index.css`), some inline styles. framer-motion available.
- The repo contains an Express `server/` folder, but it is an **empty scaffold with no real API**
  (`server/routes.ts` registers nothing). The site is effectively a **static SPA** — only the
  Vite client build is deployed. **Ignore the server for deployment.**
- Build command: `npx vite build` → outputs static files to **`dist/public/`**
  (configured in `vite.config.ts`, `build.outDir`). Do NOT run `npm run build` (that script also
  bundles the server, which is unnecessary).

## 3. How hosting & deployment works

- Hosted on **GitHub Pages**, deployed via **GitHub Actions** (Pages "Source" = GitHub Actions).
- Workflow file: **`.github/workflows/deploy.yml`**. On every push to `main` (and via manual
  `workflow_dispatch`), it:
  1. `npm ci`
  2. `npx vite build` (NODE_ENV=production)
  3. writes `dist/public/CNAME` = `shruthiandru.com` and copies `index.html` → `404.html`
     (SPA fallback so client-side routes like `/articles` don't 404)
  4. uploads the Pages artifact and deploys it.
- **Result: any commit to `main` auto-builds and publishes to shruthiandru.com in ~1–2 minutes.**
  No manual steps. You can also trigger a deploy manually: repo → **Actions** → "Deploy to GitHub
  Pages" → **Run workflow** (this is the `workflow_dispatch` trigger).

### Domain / DNS (GoDaddy) — already configured, don't change unless moving hosts
- Apex `shruthiandru.com` → four **A records**: `185.199.108.153`, `185.199.109.153`,
  `185.199.110.153`, `185.199.111.153` (GitHub Pages IPs).
- `www` → **CNAME** `shruthiandru.github.io`.
- GitHub Pages **custom domain** = `shruthiandru.com`, **Enforce HTTPS = ON** (Let's Encrypt cert).

## 4. How to make a change (the normal workflow)

1. Edit the relevant file(s) in the repo on `main` (via github.com pencil edit, github.dev,
   Codespaces, a local clone, or by asking Claude).
2. Commit to `main`.
3. The Actions workflow auto-runs and redeploys. Verify the run is green in the **Actions** tab.
4. Check the change live (hard-refresh with Cmd/Ctrl+Shift+R if the browser caches).

> If editing locally and pushing, push straight to `main`. If a push is ever rejected as
> non-fast-forward, `git pull --no-rebase` then push. See Gotchas for the secret-scanning case.

## 5. Where things live (key files)

| What | File |
|------|------|
| Page `<title>`, meta tags, favicon links | `client/index.html` |
| Routes (`/`, `/articles`, 404) | `client/src/App.tsx` |
| Header/nav + footer (logo, nav buttons, LinkedIn/email/copyright) | `client/src/components/BlueprintLayout.tsx` |
| Main page content (bio + Speaking / Teaching / Mentorship / Patents lists) | `client/src/pages/PortfolioFrame.tsx` |
| Articles page | `client/src/pages/Articles.tsx` (and `client/src/pages/` for others) |
| Global styles | `client/src/index.css` |
| Favicon image (white coiled-cord logo on navy) | `client/public/andru-icon.png` (also `favicon.png`) |
| PDFs / images used on the site | `attached_assets/` |

### Content data structures (in `PortfolioFrame.tsx`)
- `speakingEngagements`, `teachingItems`, `mentorshipItems`, `patentsAndPublications` are arrays of
  items shaped like `{ title: string; detail: string; links?: { label: string; href: string }[] }`.
- To **add a link** to an item, add to its `links` array, e.g.
  `links: [{ label: "Slides", href: "https://…" }]`. The `ItemRow` component renders them.
- The intro/bio paragraph is JSX further down in the same file's `PortfolioFrame` component.

### Nav buttons (currently hidden)
- In `BlueprintLayout.tsx`, the `navItems` array drives the top-right nav.
- **HOME and ARTICLES are currently commented out** (hidden per request). To bring them back,
  uncomment the two lines in `navItems`:
  ```ts
  const navItems: { label: string; path: string }[] = [
    // { label: "HOME", path: "/" },
    // { label: "ARTICLES", path: "/articles" },
  ];
  ```
- The logo (separate `<Link href="/">`) still acts as the home link regardless.

### Footer
- In `BlueprintLayout.tsx`. LinkedIn = `https://www.linkedin.com/in/shruthiandru`,
  email = `mailto:shruthiandru@gmail.com`, plus a tagline and copyright line.

## 6. Branding already set
- Browser tab title: **"Andru"**. Social/meta description: "Shruthi Andru — Product Designer at Adobe. Portfolio."
- Favicon: white coiled-cord ("eee") logo on deep navy, referenced as `/andru-icon.png?v=3`
  (as `icon`, `shortcut icon`, and `apple-touch-icon` in `index.html`).

## 7. Gotchas / things to know

- **GitHub secret scanning (push protection) blocks secrets.** A previously committed Adobe PDF
  had an embedded "Adobe Short-Lived Access Token", and pushes were rejected (`GH013`). Those PDFs
  were removed from history. **Don't commit files (esp. Adobe-exported PDFs) that contain embedded
  tokens.** If a push is blocked for a secret, remove the offending file from the commit/history
  rather than allowing the secret (the repo is public).
- The repo is **public**.
- **Vite build does not run `tsc`** — TypeScript type errors won't fail the deploy. (Run
  `npm run check` locally if you want type checking.)
- **Favicon caching** is aggressive. If you change the icon, give it a new filename or bump the
  `?v=` query in `index.html` so browsers refetch.
- **Custom-domain CNAME** is generated by the workflow at build time (not committed as a file), so
  it survives every deploy. Keep that step in the workflow if you edit it.
- SPA routes rely on the `404.html` copy step in the workflow — keep it.
- After connecting a brand-new domain, GitHub takes time (minutes to ~24h) to issue the HTTPS cert;
  this is already done here, so just keep "Enforce HTTPS" on.

## 8. Quick recipes

- **Edit text/links:** change `PortfolioFrame.tsx` (content arrays / bio) or `BlueprintLayout.tsx`
  (footer/nav) → commit to `main` → auto-deploys.
- **Re-show Home/Articles nav:** uncomment the `navItems` entries in `BlueprintLayout.tsx`.
- **Change the tab title or favicon:** edit `client/index.html` (and replace
  `client/public/andru-icon.png`, bumping `?v=`).
- **Force a redeploy without code changes:** Actions → "Deploy to GitHub Pages" → Run workflow.

---
_Last updated after: deployment setup, custom domain + HTTPS, "Andru" title + logo favicon,
footer LinkedIn fix, and hiding the Home/Articles nav buttons._
