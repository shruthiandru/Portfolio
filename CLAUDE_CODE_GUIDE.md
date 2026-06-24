# Working on this site from Claude Code (no Cowork)

This guide is for editing and deploying the **shruthiandru.com** portfolio using **Claude Code**
in a terminal, on any computer. It assumes no Cowork and no Replit — just the GitHub repo and a
terminal. Read `CLAUDE.md` (in this repo) first for how the site is structured and deployed;
this file is the step-by-step operating plan.

Repo: **https://github.com/shruthiandru/Portfolio** · Live: **https://shruthiandru.com**

---

## 0. One-time prerequisites

Install on the new computer:
- **Node.js 20+** and npm — https://nodejs.org
- **git** — https://git-scm.com
- **Claude Code** — `npm install -g @anthropic-ai/claude-code` (then run `claude` to sign in).
  Docs: https://docs.claude.com
- (Optional but recommended) **GitHub CLI** `gh` — https://cli.github.com — makes auth and
  manual deploys easy: `gh auth login`.

You need push access to the GitHub repo (sign in as the repo owner, or have a collaborator
account + a Personal Access Token / `gh auth login`).

## 1. Get the code

```bash
git clone https://github.com/shruthiandru/Portfolio.git
cd Portfolio
npm install
```

## 2. Start Claude Code in the repo

```bash
claude
```

Because `CLAUDE.md` lives at the repo root, Claude Code loads it automatically and will already
understand the project layout, deploy flow, and gotchas. You can then just ask, e.g.:
- "Hide the Home and Articles nav buttons" / "bring them back"
- "Add a 'Slides' link to the second speaking engagement"
- "Change the footer LinkedIn URL to …"

Claude Code will edit the files, and (if you ask) run git to commit and push.

## 3. Preview locally before shipping (optional but smart)

Build the static site exactly like the deploy does, and preview it:

```bash
npx vite build          # outputs to dist/public/
npx vite preview        # serves the production build locally (prints a localhost URL)
```

Or for a live-reloading dev server while editing:

```bash
npm run dev             # starts the app in dev mode
```

> Note: the deploy only uses the **Vite client build** (`npx vite build`). Ignore the Express
> `server/` folder — it's an empty scaffold and is not part of the deployed site.
> Also note Vite's build does **not** type-check; run `npm run check` if you want `tsc` to verify types.

## 4. Commit and deploy

Deployment is automatic on push to `main`:

```bash
git add -A
git commit -m "Describe your change"
git push origin main
```

Within ~1–2 minutes, the GitHub Actions workflow (`.github/workflows/deploy.yml`) rebuilds and
publishes to shruthiandru.com. Watch it: repo → **Actions** tab (or `gh run watch`).

### Manually trigger a deploy without a code change
- UI: repo → **Actions** → "Deploy to GitHub Pages" → **Run workflow** → branch `main`.
- CLI: `gh workflow run "Deploy to GitHub Pages" --ref main`

## 5. Common tasks (file map)

- **Tab title / favicon / meta:** `client/index.html` (and image at `client/public/andru-icon.png`).
- **Header nav + footer (logo, nav buttons, LinkedIn/email):** `client/src/components/BlueprintLayout.tsx`.
  - Home/Articles nav buttons are the commented-out entries in the `navItems` array — uncomment to restore.
- **Main content (bio + Speaking/Teaching/Mentorship/Patents lists):** `client/src/pages/PortfolioFrame.tsx`.
  - Items are `{ title, detail, links?: [{ label, href }] }`. Add to `links` to add buttons.
- **Routes (`/`, `/articles`):** `client/src/App.tsx`.
- **Global styles:** `client/src/index.css`.

## 6. Gotchas (important)

- **Secret scanning blocks pushes.** The repo is **public**, and GitHub push protection will reject
  any commit that contains a secret (this already happened with an Adobe PDF that had an embedded
  "Adobe Short-Lived Access Token"). Don't commit files with embedded tokens. If a push is blocked
  with a `GH013` secret error, **remove the offending file from the commit/history** instead of
  allowing the secret. To strip a file from history:
  ```bash
  git filter-branch --force --index-filter \
    "git rm -r --cached --ignore-unmatch 'attached_assets/THE_FILE.pdf'" --prune-empty HEAD
  git push origin main      # (use a new branch + PR if main rejects a non-fast-forward)
  ```
- **Push rejected as non-fast-forward** (remote has commits you don't): `git pull --no-rebase`,
  resolve any conflicts, then `git push`. If you can't pull, push to a new branch
  (`git push origin HEAD:my-changes`) and open a PR into `main` on github.com.
- **Favicon caching:** if you change the icon, give it a new filename or bump the `?v=` query in
  `index.html` so browsers refetch.
- **Don't touch DNS / custom domain / Enforce HTTPS** unless you're intentionally moving hosts —
  they're already configured (4 A records to GitHub IPs, `www` CNAME → `shruthiandru.github.io`,
  custom domain `shruthiandru.com`, Enforce HTTPS on). The workflow regenerates the `CNAME` file
  on each deploy, so keep that step.

## 7. Sanity checklist before pushing

- [ ] `npx vite build` succeeds locally.
- [ ] No secrets/tokens in any committed file.
- [ ] Change looks right in `npx vite preview` (or `npm run dev`).
- [ ] Commit message describes the change.
- [ ] After push, the Actions run goes green and the live site updates (hard-refresh to bust cache).

---
_Pair this with `CLAUDE.md` (same repo) for full project context._
