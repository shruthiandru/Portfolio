---
name: Blueprint portfolio layout & footer
description: Durable design constraints for the Shruthi Andru blueprint portfolio (shared layout, footer one-line rule).
---

# Blueprint portfolio — layout & footer constraints

- Shared blueprint chrome (grid background, corner markers, top ruler, rotated side labels, nav header, footer) lives in one layout wrapper that every page renders inside. Pages provide only their own content. Keep new pages consistent by rendering inside this wrapper rather than re-creating the chrome.
- Nav is route-driven (wouter): active state comes from the current route, not local component state. Add new pages by registering a route and adding a nav entry.

## Footer "one line" rule
The user's requirement is that the **contact links** (LinkedIn · email · name/year) stay on a single line — they previously wrapped to two. It is NOT a requirement that the long tagline share that same single line.

**Why:** The tagline ("Designed with love, coffee, …Taylor Swift") is ~97 chars. Inside the 900px max-width container (≤836px content), fitting tagline + links on one line needs ~10px font on wide desktop and even smaller on tablet (~768px → ~704px content), which is unreadable and overflows. Forcing the tagline onto one line causes horizontal overflow.

**How to apply:** Keep the links group `white-space: nowrap` + `flex-shrink: 0` so it never wraps; let the tagline shrink/wrap on the left; footer row is `flex-wrap: nowrap` on desktop/tablet and stacks (column) only below ~600px. Do not try to force the tagline and links onto a single shared line.

## Responsiveness gotchas
- Section grid must use `minmax(min(100%, 320px), 1fr)` (not a bare `minmax(340px, 1fr)`) or it overflows below 340px.
- The rotated side labels are `position: fixed`; hide them (`.bp-side-label { display:none }`) below ~1180px so they don't overlap content.
