# Roommate Match: build plan (CIE 3)

## Context

Roommate Match is the team's CS1309 mini project: two roommates answer the same 10 questions on one device, and the site shows a compatibility % and a ✓/✗ table. Nothing is built yet.

**Roles (final):**

| Person | Does | Phases |
|---|---|---|
| Prachi | Designs only | (design spec + mockup) |
| Rishab | Types the HTML and CSS | H, then C |
| Dhyan | Types the JavaScript with his own Claude Code | L, then A |

Everyone must be able to explain every line, because the teacher can ask anyone about anything. So Rishab also learns Dhyan's JavaScript through LEARN MODE.

**Claude's limits:** never create or edit any `.html`, `.css` or `.js` file. Never edit Dhyan's files. Claude may edit `CLAUDE.md` and the plan.

**Two ways of working:**

- **Step loop (Phases H and C, Rishab types):** Explain → Show (5–20 lines) → Rishab types → Review → 2 viva questions → wait for "next".
- **LEARN MODE (Phases L and A, Dhyan types):** when Dhyan's part is in the shared folder, Claude walks Rishab through the file line by line with module tags, then asks 2 viva questions and corrects the answers. If a line is wrong or outside the slides, Claude tells Rishab so he can pass it on. Claude does not fix it.

**Timing:** Rishab does H1–H8, then C. Dhyan can do L1–L6 at the same time, because `logic.js` doesn't touch the page. Dhyan starts Phase A once the HTML is done and the hooks are agreed.

**References:**

- Course material: `/Users/rishabbishtt/Desktop/Semester 1/Web Tech` (there is no `course-material/` folder).
- The look: `Roommate Match design spec.md` and `Roommate Match mockup.pdf` in the project folder. They are for the look only and do not override anything decided here or in `CLAUDE.md`.

## Decisions

| Topic | Decision |
|---|---|
| Pages | One `index.html`; JS shows one section at a time |
| Header and footer | On every screen, outside the four sections |
| Nav links | Plain links that reload the page: "Start" → `index.html`, "About the team" → `index.html#about`. No JavaScript |
| Show/hide | `classList` + one CSS class |
| Form | Hand-written in HTML; all 10 questions are radio buttons in `fieldset` + `legend` cards; each radio's `value` is the answer text |
| Questions data | `questions` array of objects with `id` and `text`; `text` is the short label shown in the results table |
| Scoring | matches ÷ 10 × 100; same answer = ✓ (always a whole number) |
| Reading answers | One `change` listener on the form stores `event.target` name and value in an object |
| Validation | Submit blocked; one message near Submit |
| Clearing the form | `form.reset()` (⚠️ OUTSIDE SLIDES, approved) |
| JS files | `logic.js` (data + pure functions, no DOM) and `app.js` (DOM + events), two plain script tags |
| Code style | One plain-English comment above every function |
| Dropped | Demo pair, self-checks, localStorage, share link, typed AC number + tolerance, "Brain Drain" phone question, "No AC" option from the mockup |

### The 10 questions

| # | Short label (table) | Options |
|---|---|---|
| 1 | Lights out time | Before 11 pm / 11 pm–1 am / After 1 am |
| 2 | AC temperature | 18–21 / 22–24 / 25–28 |
| 3 | Cleanliness | Clean every day / Once a week / When it gets messy |
| 4 | Guests | Often / Sometimes, with notice / Rarely or never |
| 5 | Quiet voice from | 10 pm / 11 pm / 12 am / No quiet time needed |
| 6 | Studying in the room | Yes, need silence / Yes, noise is fine / No, I study elsewhere |
| 7 | Bathroom time | Under 10 min / 10–20 min / Over 20 min |
| 8 | Sharing stuff | Use anything / Ask first / Don't share |
| 9 | Food in the room | Veg only / Veg and non-veg (wording and a possible "No food in the room" option are decided at H5) |
| 10 | How social | Talk a lot / Talk sometimes / Keep to myself |

The full-sentence wording of each question is confirmed at H4 and H5.

## Files

| File | Typed by | Holds |
|---|---|---|
| `index.html` | Rishab | Header, four sections, footer |
| `style.css` | Rishab | Prachi's design |
| `logic.js` | Dhyan | `questions` array and scoring functions; no DOM |
| `app.js` | Dhyan | Screen switching, events, validation, rendering results |

All code lives in the `project work/` subfolder. Planning files (`CLAUDE.md`, `PLAN.md`, the design spec and the mockup) stay in the main folder.

**Who may change the `.md` files:** only Rishab and Dhyan may change any `.md` file in this project (`CLAUDE.md`, `PLAN.md`, `Roommate Match design spec.md`, and any other). Prachi and Disha may read them but not change them; changes they want go through Rishab or Dhyan.

## Phase H: `index.html` (Rishab types) [Module 1]

Every id and class is proposed by Claude, confirmed by Rishab, then written into "Agreed hooks" in `CLAUDE.md`. That list is what Dhyan gets.

| Part | What it does | Concepts |
|---|---|---|
| H1 | Page skeleton: doctype, head, meta, title, stylesheet link, two script tags at the end of body (`logic.js` first) | [Module 1 – structure of HTML documents] |
| H2 | Header (site name, nav links "Start" and "About the team") and footer ("Made by … for CS1309 Web Technology, RV University") | [Module 1 – semantic markup: header, nav, footer; links] |
| H3 | Intro section: site name, tagline, Start button; About the team with 4 cards (photo, name, role) | [Module 1 – section, headings, images, div] |
| H4 | Form, part 1: form element, roommate badge and heading, questions 1–5 | [Module 1 – forms: fieldset, legend, radio, name, value, label] |
| H5 | Form, part 2: questions 6–10, the error message element, Submit button | [Module 1 – forms, button types] |
| H6 | Pass-the-device section with Continue button | [Module 1 – semantic markup] |
| H7 | Results section: heading, score circle, table with header row and empty body, Swap roommate button | [Module 1 – tables] |
| H8 | The single "hidden" rule in `style.css`, so Dhyan's JS can hide screens before Phase C | [Module 2 – selectors, location of styles] |

Asked at the part, as multiple choice:

- H2: is the `index.html#about` link (jump to an id) acceptable? The slides show `href` but only with `#` as a placeholder.
- H3: site name, tagline, names and roles for all four members, photos.
- H5: Question 9 wording ("what's okay in the room" vs "what I eat") and whether to add "No food in the room".
- H5: wording and look of the validation message.

## Phase C: `style.css` (Rishab types) [Modules 2–3]

| Part | What it does | Concepts |
|---|---|---|
| C1 | Base: page colours, fonts, text sizes | [Module 2 – text, font, background] [Module 3 – units] |
| C2 | Header, nav and footer: sage bar, link states | [Module 2 – CSS for links] [Module 3 – layouts] |
| C3 | Intro: big title, tagline, buttons (rounded, shadow, hover) | [Module 2 – box model, border] |
| C4 | Team cards and round photos | [Module 2 – box model, styling images, responsive images] |
| C5 | Form: question cards, radio rows, Submit, error message | [Module 2 – forms styling, `:focus`] |
| C6 | Pass-the-device card, centred | [Module 2 – box model] [Module 3 – layouts] |
| C7 | Score circle and the three band classes | [Module 2 – border-radius, the cascade] [Module 3 – specificity] |
| C8 | Results table: header, borders, match and clash row tints | [Module 2 – styling tables] |
| C9 | Phone layout | [Module 3 – layouts, units] |

⚠️ OUTSIDE SLIDES items the design needs. Each is asked as multiple choice, with its in-slides alternative, at the part shown:

| Item | Part | In-slides alternative |
|---|---|---|
| Google Fonts `<link>` (slides name Google Fonts, no example) | C1 | Georgia and Arial-style fallbacks only |
| Flexbox (taught in Lab 4, not the slides) | C2, C4 | Float + percentage widths |
| `min-height: 44px` on buttons and radio rows | C5 | A fixed `height` |
| `overflow-x: auto` on the table box | C8 | Smaller text and padding on phones |
| Media queries (Lab 4, not the slides) | C9 | Percentage widths and `max-width` only |

## Phase L: `logic.js` (Dhyan types, Rishab learns) [Module 3]

Each of Dhyan's parts is followed by a LEARN MODE part for Rishab.

| Part | Who | What it does | Concepts |
|---|---|---|---|
| L1 | Dhyan | `questions`: array of 10 objects (`id`, short-label `text`) | [Module 3 – const, arrays, objects] |
| L1·LM | Rishab | LEARN MODE on L1: line-by-line walkthrough, 2 viva questions | same |
| L2 | Dhyan | A function that says whether two answers match | [Module 3 – function declaration, parameters, return, `===` vs `==`, `typeof`] |
| L2·LM | Rishab | LEARN MODE on L2 | same |
| L3 | Dhyan | A function that takes both answer objects and returns one row object per question | [Module 3 – `map`, arrow functions, object destructuring, bracket notation] |
| L3·LM | Rishab | LEARN MODE on L3 | same |
| L4 | Dhyan | A function that turns the rows into a % | [Module 3 – `filter` or `reduce`, `length`, arithmetic operators] |
| L4·LM | Rishab | LEARN MODE on L4 | same |
| L5 | Dhyan | A function that turns the % into a band (71–100, 50–70, 0–49) | [Module 3 – `if` / `else if` / `else`, relational and logical operators] |
| L5·LM | Rishab | LEARN MODE on L5 | same |
| L6 | Dhyan | Console test: type two answer objects in the browser console and call the functions. Identical answers → 100, six matches → 60, three matches → 30 | [Module 3 – console, objects] |
| L6·LM | Rishab | LEARN MODE on L6: Rishab runs the same console test himself | same |

## Phase A: `app.js` (Dhyan types, Rishab learns) [Module 3]

Starts after H8. Uses only the ids and classes in "Agreed hooks" in `CLAUDE.md`.

| Part | Who | What it does | Concepts |
|---|---|---|---|
| A1 | Dhyan | Select the elements; create the state (current roommate, two answer objects) | [Module 3 – `getElementById`, `querySelector`, `let` vs `const`] |
| A1·LM | Rishab | LEARN MODE on A1 | same |
| A2 | Dhyan | A function that shows one screen and hides the rest | [Module 3 – `querySelectorAll`, `forEach`, `classList`] |
| A2·LM | Rishab | LEARN MODE on A2 | same |
| A3 | Dhyan | Start button opens the form | [Module 3 – `addEventListener`, click, function expression] |
| A3·LM | Rishab | LEARN MODE on A3 | same |
| A4 | Dhyan | One `change` listener on the form saves each pick into the current roommate's answers. **Reload check (must test and fix):** some browsers keep radio buttons ticked after a reload, and the `change` listener never hears about those, so the page shows answers the JS doesn't have. Test: tick answers, reload, press Submit. Candidate fixes to choose between: call the approved `form.reset()` when the page loads, or `autocomplete="off"` on the form in Rishab's HTML (⚠️ OUTSIDE SLIDES, needs approval) | [Module 3 – change event, event object (`target`), event delegation] |
| A4·LM | Rishab | LEARN MODE on A4, including why the reload check is needed | same |
| A5 | Dhyan | Submit: stop the page reload, check all 10 are answered, show the message if not | [Module 3 – submit, `preventDefault`, `Object.keys`, template literals, `textContent`, form validation] |
| A5·LM | Rishab | LEARN MODE on A5 | same |
| A6 | Dhyan | Handover: Roommate 1 → pass screen → Continue → emptied form with the badge changed to Roommate 2 | [Module 3 – scope, `if`/`else`, `textContent`] ⚠️ OUTSIDE SLIDES: `form.reset()` (approved) |
| A6·LM | Rishab | LEARN MODE on A6 | same |
| A7 | Dhyan | Results circle: call the logic functions, show the %, add the band class, show or hide Swap | [Module 3 – function calls, `classList`, `textContent`] |
| A7·LM | Rishab | LEARN MODE on A7 | same |
| A8 | Dhyan | Results table: remove old rows, build one row per question, add the match or clash class to each row | [Module 3 – `createElement`, `appendChild`, `remove`, ternary for ✓/✗, `textContent` vs `innerHTML`] |
| A8·LM | Rishab | LEARN MODE on A8 | same |
| A9 | Dhyan | Swap roommate: clear both answer sets, remove the band class, return to Roommate 1 | [Module 3 – reassigning `let`, click event] |
| A9·LM | Rishab | LEARN MODE on A9 | same |

Borderline for Dhyan to confirm at A4: reading `event.target.name`. The slides show `target` and `.value`, but not `.name`.

Avoided by design: `.checked` / `:checked`, `Math.round`, `Math.abs`, `console.assert`, ES modules.

## Concept coverage map (Rishab)

**Typed by Rishab**

| Concept | Part |
|---|---|
| Structure of HTML documents, meta tags | H1 |
| Semantic markup: header, nav, main, section, footer | H2, H3, H6 |
| Links | H2 |
| Headings, paragraphs, images, div and span | H3 |
| Forms: label, radio, name, value, fieldset, legend, buttons | H4, H5 |
| Tables | H7 |
| CSS syntax, location of styles (external), selectors | H8, C1 |
| Text styling, fonts, background | C1 |
| Border properties, box model | C3, C4, C5 |
| CSS for links (`:hover`, `:focus`) | C2 |
| Styling tables | C8 |
| Forms styling | C5 |
| Styling images, responsive images | C4 |
| The cascade, specificity | C7 |
| CSS layouts, units | C2, C6, C9 |

**JavaScript: learned, not typed (through LEARN MODE)**

| Concept | Part |
|---|---|
| External `.js` file, script placement | H1 (typed), L1·LM |
| `let` / `const` | L1·LM, A1·LM |
| Data types, `typeof`, `==` vs `===` | L2·LM |
| Operators, `if`/`else`, ternary | L4·LM, L5·LM, A8·LM |
| `forEach` | A2·LM, A8·LM |
| Function declaration / expression / arrow | L2·LM / A3·LM / L3·LM |
| Parameters, return values, scope | L2–L5·LM, A6·LM |
| `map`, `filter`, `reduce` | L3·LM, L4·LM |
| Objects, bracket notation, `Object.keys` | L1·LM, L3·LM, A4·LM, A5·LM |
| Template literals, destructuring | A5·LM, L3·LM |
| `getElementById`, `querySelector`, `querySelectorAll` | A1·LM, A2·LM |
| `textContent` vs `innerHTML`, `classList` | A5·LM, A7·LM, A8·LM |
| `createElement`, `appendChild`, `remove` | A8·LM |
| `addEventListener`: submit + `preventDefault`, click, change | A3·LM, A4·LM, A5·LM |
| Event object, event delegation | A4·LM |
| JS form validation with an on-page message | A5·LM |

**Does not fit naturally (not forced in):** `push`, `find`, `sort`, `includes`, spread, `Object.values` / `entries`, nested objects, object methods, the plain `for` loop, the `input` event, `setAttribute`. HTML lists and CSS float/position may also go unused, depending on the Phase C choices.

## SEE pending work (not built now)

React (Module 4), Bootstrap and Figma (Module 5), room suggestions (ideal lights-out time and temperature), group mode, answer code. Ideas moved here from planning: closeness or tolerance scoring with typed inputs, localStorage, share link.

## Verification

- After each H and C part: Rishab says "done", Claude reads the file, reviews it and asks 2 viva questions.
- After each of Dhyan's parts: the LEARN MODE part. Claude reads Dhyan's file, reports anything wrong or outside the slides to Rishab, and edits nothing.
- End to end, opening `index.html` in the browser:
  - Header and footer show on all four screens; both nav links reload to the intro.
  - Submit with a question unanswered shows the message and stays on the form.
  - Tick answers, reload, press Submit: the page and the JS agree (the reload check).
  - Roommate 2 gets an empty form with the badge changed.
  - 100% shows green with no button; 60% shows mustard with Swap; 30% shows red with Swap.
  - The table has 10 rows with both answers, the right ✓/✗ and the right row tint.
  - Swap roommate returns to an empty Roommate 1 form.
  - The page matches Prachi's mockup on laptop and phone widths.
  - No errors in the browser console.
