# Roommate Match: build plan (CIE 3)

## Context

Roommate Match is the team's CS1309 mini project: two roommates answer the same 10 questions on one device, and the site shows a compatibility % and a ✓/✗ table.

**Status: built and live.** All 32 parts below are done. The site is at **https://roommate-match-chi.vercel.app**, deployed from the private GitHub repo `Rishabop/roommate-match` (every push to `main` redeploys it). What's left is listed under "Still to do".

**Roles:**

| Person | Does | Phases |
|---|---|---|
| Prachi | Designs only | (design spec + mockup) |
| Rishab | Types the HTML and CSS | H, then C |
| Dhyan | Types the JavaScript with his own Claude Code | L, then A |
| Disha | Testing & documentation | Testing, the CIE 3 report, the project guide |

Everyone must be able to explain every line, because the teacher can ask anyone about anything. `Roommate Match project guide.docx` explains every file line by line and has 79 viva questions with model answers.

**How each part was built:** explain the concept (with its module tag) → write 5–20 lines → review → test in the browser or console → a viva check every two parts.

**References:**

- Course material: `/Users/rishabbishtt/Desktop/Semester 1/Web Tech`.
- The look: `Roommate Match design spec.md` and `Roommate Match mockup.pdf` in the project folder. They are for the look only and do not override anything decided here or in `CLAUDE.md`.

## Still to do

| Item | Who | Notes |
|---|---|---|
| Photos for Rishab, Dhyan and Disha | Team | Crop square; save in `project work/images/` as `rishab.jpg`, `dhyan.jpg`, `disha.jpg` (or change the `src` in `index.html` to match) |
| Final site name | Team | "Roommate Match" is a stand-in in the `<title>`, header and `<h1>` |
| Illustrations | Prachi + Rishab | Decide whether and where the free illustrations go |
| Learn `app.js` for the viva | Everyone | Sections 7, 8 and 13 of the project guide |
| CIE 3 report | Disha | Prescribed template, screenshots of working features, pending work = the SEE list below |

## Decisions

| Topic | Decision |
|---|---|
| Pages | One `index.html`; JS shows one section at a time |
| Header and footer | On every screen, outside `<main>` |
| Nav links | Plain links that reload the page: "Start" → `index.html`, "About the team" → `index.html#about`. No JavaScript |
| Show/hide | `classList` + the `hidden` class (`display: none`) |
| Form | Hand-written in HTML; all 10 questions are radio buttons in `fieldset` + `legend` cards; each radio's `value` is the answer text |
| Questions data | `questions` array of objects with `id` and `text`; `id` = the radio `name`; `text` is the short label shown in the results table |
| Scoring | matches ÷ 10 × 100; same answer = ✓ (always a whole number) |
| Where answers live | Two JavaScript objects, `answers1` and `answers2`, in memory only; a reload starts fresh |
| Reading answers | One `change` listener on the form stores `event.target.name` and `event.target.value` (event delegation) |
| Validation | Submit blocked; one message near Submit: "Please answer every question (N left)." |
| Clearing the form | `form.reset()` on Continue, on Swap, and on page load (⚠️ OUTSIDE SLIDES, approved) |
| JS files | `logic.js` (data + pure functions, no DOM) and `app.js` (DOM + events), two plain script tags, `logic.js` first |
| Code style | One plain-English comment above every function |
| Git | No Claude co-author lines in commit messages (uni project) |
| Dropped | Demo pair, self-checks, localStorage, share link, typed AC number + tolerance, "Brain Drain" phone question, "No AC" option from the mockup, `overflow-x` on the table |

### The 10 questions

| # | Short label (table) | Options |
|---|---|---|
| 1 | Lights out time | Before 11 pm / 11 pm-1 am / After 1 am |
| 2 | AC temperature | 18-21°C / 22-24°C / 25-28°C |
| 3 | Cleanliness | Clean every day / Once a week / When it gets messy |
| 4 | Guests | Often / Sometimes, with notice / Rarely or never |
| 5 | Quiet voice from | 10 pm / 11 pm / 12 am / No quiet time needed |
| 6 | Studying in the room | Yes, need silence / Yes, noise is fine / No, I study elsewhere |
| 7 | Bathroom time | Under 10 min / 10-20 min / Over 20 min |
| 8 | Sharing stuff | Use anything / Ask first / Don't share |
| 9 | Food in the room | Veg only / Veg and non-veg (asked as "What food is okay in the room?") |
| 10 | How social | Talk a lot / Talk sometimes / Keep to myself |

## Files

| File | Holds |
|---|---|
| `project work/index.html` | Header, the four screens, footer |
| `project work/style.css` | Prachi's design, the phone layout, the `.hidden` rule |
| `project work/logic.js` | `questions`, `isMatch`, `buildRows`, `calculateScore`, `getBand`; no DOM |
| `project work/app.js` | Elements and state, `showScreen`, Start, saving answers, Submit check, handover, `showResults`, Swap, reload check |
| `project work/images/` | Team photos (1 of 4 so far: `prachi.jpeg`) |

All code lives in the `project work/` subfolder, which is also Vercel's root directory, so only these files are public. Planning files (`CLAUDE.md`, `PLAN.md`, the design spec, the mockup and the project guide) stay in the main folder and are not on the live site.

**Who may change the `.md` files:** only Rishab and Dhyan may change any `.md` file in this project (`CLAUDE.md`, `PLAN.md`, `Roommate Match design spec.md`, and any other). Prachi and Disha may read them but not change them; changes they want go through Rishab or Dhyan.

## Phase H: `index.html` [Module 1] ✅ done

Every id and class is listed in "Agreed hooks" in `CLAUDE.md`.

| Part | Status | What it does | Concepts |
|---|---|---|---|
| H1 | ✅ | Page skeleton: doctype, head, meta, title, font and stylesheet links, two script tags at the end of body (`logic.js` first) | [Module 1 – structure of HTML documents] |
| H2 | ✅ | Header (site name, nav links "Start" and "About the team") and footer ("Made by … for CS1309 Web Technology, RV University") | [Module 1 – semantic markup: header, nav, footer; links] |
| H3 | ✅ | Intro section: site name, tagline, Start button; About the team with 4 cards (photo, name, role) | [Module 1 – section, headings, images, div] |
| H4 | ✅ | Form, part 1: form element, roommate badge and heading, questions 1–5 | [Module 1 – forms: fieldset, legend, radio, name, value, label] |
| H5 | ✅ | Form, part 2: questions 6–10, the error message element, Submit button | [Module 1 – forms, button types] |
| H6 | ✅ | Pass-the-device section with Continue button | [Module 1 – semantic markup] |
| H7 | ✅ | Results section: heading, score circle, table with header row and empty body, Swap roommate button | [Module 1 – tables] |
| H8 | ✅ | The `.hidden` rule in `style.css` | [Module 2 – selectors, location of styles] |

## Phase C: `style.css` [Modules 2–3] ✅ done

| Part | Status | What it does | Concepts |
|---|---|---|---|
| C1 | ✅ | Base: page colours, fonts, text sizes | [Module 2 – text, font, background] [Module 3 – units] |
| C2 | ✅ | Header, nav and footer: sage bar, link states | [Module 2 – CSS for links] [Module 3 – layouts] |
| C3 | ✅ | Intro: big title, tagline, buttons (rounded, shadow, hover) | [Module 2 – box model, border] |
| C4 | ✅ | Team cards and round photos | [Module 2 – box model, styling images, responsive images] |
| C5 | ✅ | Form: question cards, radio rows, Submit, error message | [Module 2 – forms styling] |
| C6 | ✅ | Pass-the-device card, centred | [Module 2 – box model] [Module 3 – layouts] |
| C7 | ✅ | Score circle and the three band classes | [Module 2 – border-radius, the cascade] [Module 3 – specificity] |
| C8 | ✅ | Results table: header, borders, match and clash row tints | [Module 2 – styling tables] |
| C9 | ✅ | Phone layout (one media query at 600px) | [Module 3 – layouts, units] |

**Site-check fixes (after C9):**

| Problem | Fix |
|---|---|
| Question titles cut through the top of each card | `fieldset legend { float: left; width: 100%; }` + `clear: both` on the answer rows |
| Missing photos collapsed to a line of alt text | `.team-card img`: `display: block`, `margin: 0 auto`, sage background placeholder |
| Footer floated half-way up short screens | `main { min-height: 75vh; }` |
| Pass card's top margin pushed the footer off a phone screen (margin collapsing) | `display: flow-root` on `main` |

## Phase L: `logic.js` [Module 3] ✅ done

| Part | Status | What it does | Concepts |
|---|---|---|---|
| L1 | ✅ | `questions`: array of 10 objects (`id`, short-label `text`) | [Module 3 – const, arrays, objects] |
| L2 | ✅ | `isMatch(answer1, answer2)`: are two answers the same? | [Module 3 – function declaration, parameters, return, `===` vs `==`, `typeof`] |
| L3 | ✅ | `buildRows(answers1, answers2)`: one row object per question | [Module 3 – `map`, arrow functions, object destructuring, bracket notation] |
| L4 | ✅ | `calculateScore(rows)`: rows → % | [Module 3 – `filter`, `length`, arithmetic operators] |
| L5 | ✅ | `getBand(score)`: % → `score-high` / `score-mid` / `score-low` | [Module 3 – `if` / `else if` / `else`, relational operators] |
| L6 | ✅ | Console test with three known pairs: identical → 100, 4 different → 60, 7 different → 30 (typed in the console, not saved in a file) | [Module 3 – console, objects, spread] |

## Phase A: `app.js` [Module 3] ✅ done

| Part | Status | What it does | Concepts |
|---|---|---|---|
| A1 | ✅ | Select the elements; create the state (`currentRoommate`, `answers1`, `answers2`) | [Module 3 – `getElementById`, `querySelectorAll`, `let` vs `const`] |
| A2 | ✅ | `showScreen(id)`: hide all screens, show one, scroll to the top; `currentAnswers()` | [Module 3 – `forEach`, `classList`, ternary] ⚠️ `window.scrollTo` |
| A3 | ✅ | Start button opens the form | [Module 3 – `addEventListener`, click, function expression] |
| A4 | ✅ | One `change` listener on the form saves each pick into the current roommate's answers | [Module 3 – change event, event object, event delegation, bracket notation] ⚠️ `event.target.name` |
| A5 | ✅ | Submit: `preventDefault`, count answers, show "N left" message or go on (pass screen or results) | [Module 3 – submit, `preventDefault`, `Object.keys`, template literals, `textContent`, form validation] |
| A6 | ✅ | Continue: roommate 2, badge, empty form | [Module 3 – reassigning `let`, `textContent`] ⚠️ `form.reset()` (approved) |
| A7 | ✅ | `showResults`: score, band class on the circle, show or hide Swap | [Module 3 – function calls, template literals, `classList`] ⚠️ `classList.remove` with three names |
| A8 | ✅ | Results table: remove old rows, build one row per question with its row class and ✓/✗ | [Module 3 – `createElement`, `appendChild`, `remove`, ternary, `textContent`] |
| A9 | ✅ | Swap roommate: clear both answer sets, back to Roommate 1 | [Module 3 – reassigning `let`, click event] |
| Load | ✅ | On page load: `form.reset()` (the reload check: some browsers keep radios ticked after a reload while the JS starts empty), then show the intro | ⚠️ `form.reset()` (approved) |

Avoided by design: `.checked` / `:checked`, `Math.round`, `Math.abs`, `console.assert`, ES modules.

## SEE pending work (not built now)

React (Module 4), Bootstrap and Figma (Module 5), room suggestions (ideal lights-out time and temperature), group mode, answer code. Ideas moved here from planning: closeness or tolerance scoring with typed inputs, localStorage, share link.

## Verification

Tested in the browser at 1280px and 375px, then again on the live Vercel site:

| Check | Result |
|---|---|
| Header and footer show on all four screens; both nav links reload to the intro | ✅ |
| Only the intro shows on page load | ✅ |
| Submit with questions unanswered shows "Please answer every question (N left)." and stays on the form | ✅ |
| Roommate 2 gets an empty form with the badge changed | ✅ |
| 100% → green, no Swap button; 60% → mustard with Swap; 30% → red with Swap | ✅ |
| The table has 10 rows with both answers, the right ✓/✗ and the right row tint | ✅ |
| Swap roommate returns to an empty Roommate 1 form, both answer sets cleared | ✅ |
| No screen scrolls sideways on a phone | ✅ |
| Planning files (`CLAUDE.md`, `PLAN.md`, PDF, docx) are not reachable on the live site | ✅ |
| Console errors | Only the 3 missing team photos (404) |
| Reload check (tick answers, reload, Submit) | Handled by `form.reset()` on load; not yet tested by hand |
