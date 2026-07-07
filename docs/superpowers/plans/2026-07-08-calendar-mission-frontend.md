# Calendar Mission Frontend Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the long 365-day mission scroll with a mobile-first calendar mission interface that supports month/day switching, photo proof, advanced reflection unlock, monthly wishes, and a Google sign-in entry.

**Architecture:** Keep the deployed GitHub Pages project as a static single-page app. `index.html` owns the UI, styles, task data, and client-side interactions. `tests/verify-calendar-ui.js` checks the shipped HTML for the required product surface before deployment.

**Tech Stack:** Static HTML, CSS, vanilla JavaScript, Node.js verification script, GitHub Pages.

## Global Constraints

- Work only in `/Users/azt156/Documents/MTK/daily-mission-rick-demo-deploy`.
- Preserve the deployed repo `azt156/daily-mission-rick-demo`.
- Do not implement real Google login, Firebase, GAS writes, AI scoring, payment, or book ordering in this pass.
- Main UI text must be user-facing; do not show developer, backend, business-model, or gamification-theory explanations on the page.
- Mobile layout must avoid a long 365-item vertical list.

---

### Task 1: Verification

**Files:**
- Create: `/Users/azt156/Documents/MTK/daily-mission-rick-demo-deploy/tests/verify-calendar-ui.js`

**Interfaces:**
- Consumes: `index.html` as a static HTML document.
- Produces: A failing-then-passing Node verification command.

- [ ] Write a Node test that requires calendar UI markers, monthly wish copy, advanced reflection copy, Google sign-in entry, photo input, and absence of the old `mission-map` long-list surface.
- [ ] Run `node tests/verify-calendar-ui.js` and confirm it fails on the current long-list page.

### Task 2: Static Page Redesign

**Files:**
- Modify: `/Users/azt156/Documents/MTK/daily-mission-rick-demo-deploy/index.html`
- Modify: `/Users/azt156/Documents/MTK/daily-mission-rick-demo-deploy/rick-demo.html`

**Interfaces:**
- Consumes: The design spec in `docs/superpowers/specs/2026-07-08-calendar-mission-mobile-design.md`.
- Produces: A static app with `calendarGrid`, `missionTitle`, `advancedPanel`, `photoInput`, and month navigation.

- [ ] Replace the long-map UI with a compact mobile-first app.
- [ ] Add a Google sign-in entry button labeled `登入 Google 帳號`.
- [ ] Add a monthly wish card and monthly progress.
- [ ] Add a calendar grid with one month visible.
- [ ] Add a today mission card with photo proof.
- [ ] Add a hidden advanced reflection panel that appears after completion.

### Task 3: Interaction Logic

**Files:**
- Modify: `/Users/azt156/Documents/MTK/daily-mission-rick-demo-deploy/index.html`

**Interfaces:**
- Consumes: `missions`, `monthlyWishes`, selected month/day state.
- Produces: working `renderCalendar`, `selectDay`, `completeMission`, and reflection scoring helpers.

- [ ] Generate 365 missions from a start date.
- [ ] Let users move between months.
- [ ] Let users click a date to switch the mission card.
- [ ] Require a photo before completion.
- [ ] Reveal the advanced reflection task after base completion.
- [ ] Score reflection quality by length and concrete detail cues.

### Task 4: Verify and Deploy

**Files:**
- Commit all modified files in `/Users/azt156/Documents/MTK/daily-mission-rick-demo-deploy`.

**Interfaces:**
- Consumes: passing local tests.
- Produces: updated GitHub Pages site at `https://azt156.github.io/daily-mission-rick-demo/`.

- [ ] Run `node tests/verify-calendar-ui.js`.
- [ ] Run an inline-script syntax check.
- [ ] Preview locally through a simple server and inspect desktop/mobile basics.
- [ ] Commit changes.
- [ ] Push `main` to GitHub.
- [ ] Confirm the live GitHub Pages URL contains the new calendar UI.
