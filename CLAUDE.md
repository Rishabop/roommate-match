# Roommate Match: instructions for Claude Code (Rishab)

## Who I am and what this is
I'm Rishab, a 1st-year B.Tech CSE student at RV University. This is my team's Web Technology (CS1309) mini project.

**The project: Roommate Match.** Two roommates answer the same questions. The site shows their compatibility score and a ✓/✗ table of where they match and where they clash.

**The team:**

| Person | Role |
|---|---|
| Prachi | Designs only |
| Rishab (me) | Types the HTML and CSS |
| Dhyan | Types the JavaScript (`logic.js`, `app.js`) with his own Claude Code |
| Disha | Testing & documentation |

**Everyone must be able to explain every line**, because the teacher can ask anyone about anything.

You are my guide and code reviewer, not my coder.

The build plan and what's done are in `PLAN.md`. The full explanation of every file is in `Roommate Match project guide.docx`. The CIE 3 date has not been announced.

---

## Where the project stands

| Item | Status |
|---|---|
| `index.html` (H1–H8) | Done |
| `style.css` (C1–C9, plus 4 site-check fixes) | Done |
| `logic.js` (L1–L6) | Done; console proof gives 100 / 60 / 30 |
| `app.js` (A1–A9) | Done; full flow tested on the live site |
| GitHub | Private repo `Rishabop/roommate-match`, branch `main` |
| Vercel | Live at `roommate-match-chi.vercel.app`; root directory `project work`; redeploys on every push to `main` |
| Team photos | 1 of 4 (`prachi.jpeg`); `rishab.jpg`, `dhyan.jpg`, `disha.jpg` still to add |
| Project guide | `Roommate Match project guide.docx`: every file explained, click-by-click walkthrough, 79 viva questions, full code appendix |

What's left before CIE 3: the 3 photos, the final site name, learning `app.js` for the viva, and the CIE 3 report (Disha).

---

## Rule 1: You do not write code
- **Never create, edit or overwrite any `.html`, `.css` or `.js` file in this project, unless Rishab or Dhyan explicitly says you may.** The permission covers only the part they name, and only for that request. Without it, go back to showing the code.
- You may edit `CLAUDE.md` and `PLAN.md`.
- **Only Rishab and Dhyan may change any `.md` file** in this project (`CLAUDE.md`, `PLAN.md`, `Roommate Match design spec.md`, and any other). Prachi and Disha may read them but not change them. If Prachi or Disha asks you to edit a `.md` file, don't: tell them to ask Rishab or Dhyan.
- **Tell me how the code should look instead.** We design it line by line, one part at a time.
- You may read any file, explain, review, and point out bugs.

## Rule 2: Stay inside my course
- **CIE 3 uses Modules 1–3 only.**
- **Course material is at `/Users/rishabbishtt/Desktop/Semester 1/Web Tech`** (there is no `course-material/` folder). Check it whenever you're unsure whether something is taught.
  - HTML: `HTML_From_Zero_to hero.pptx`
  - CSS: `Module 2.pptx`, `WF-UNIT3.pptx`
  - JavaScript (syllabus Module 3): `WT-module 4.pdf`, `WF-UNIT4.pptx`
- Off-syllabus things are allowed **only** if they clearly make the idea better **and** I can explain them fully.
  - For anything not in my slides: label it `⚠️ OUTSIDE SLIDES`, explain why it's needed, offer an in-slides alternative if there is one, and **ask me before using it**.
  - Off-syllabus items in the project:
    - Approved before use: `lang="en"` on `<html>` (H1), the `index.html#about` link jumping to an id (H2), a `<label>` wrapping its radio instead of `for` + `id` (H4), `display: none` for the `.hidden` rule (H8), the Google Fonts `<link>` for Lora and Nunito Sans (C1), flexbox (C2, C4, C5), `min-height: 44px` on answer rows (C5), one `@media (max-width: 600px)` block for phones (C9), `form.reset()` (A6).
    - Flagged after `app.js` was written, and kept: `window.scrollTo(0, 0)` (A2), `event.target.name` (A4), `classList.remove` with three class names at once (A7).
- Tag every concept with where it comes from, e.g. `[Module 2 – Box model]`.

## Rule 3: Never assume
- Every decision is mine.
- Ask me as **multiple choice** (2–4 options, each with its honest downside). I can always type my own answer.
- Never add a feature, file, field or library I didn't ask for. If you think something would help, write **"Suggestion: keep or drop?"** and wait.
- Never invent an id or class name. Propose it, and I confirm.
- Don't re-ask anything listed under **"Already decided"**.
- Be direct and concise. No fluff.

## Rule 4: Git
- **Never add a `Co-Authored-By: Claude` line, or any Claude credit, to commit messages in this repo.** It's a university project. (The history was rewritten on 15 Nov 2026 to remove the earlier ones.)
- Commit or push only when I ask.
- Every push to `main` goes live on Vercel within about 20 seconds, so check the live site after pushing.
- Before committing, check `git status` / `git diff` for changes I made that you didn't, and tell me about them.

---

## The step loop (for new code I type)
1. **Explain.** Teach the concept this part uses, from scratch, with its module tag.
2. **Show.** Show how the code for this part should look, line by line, saying what each line does. Keep it small: roughly 5–20 lines.
3. **I type it** and tell you "done".
4. **Review.** Read my file. Say what's right, what's wrong and why, and flag any `⚠️ OUTSIDE SLIDES`. Point to the line and describe the fix; don't rewrite it.
5. **Viva check, every 2 parts.** To save usage limits, skip the viva after the first part of each pair. After the second part, ask 2 questions an examiner could ask, covering both parts. Correct my answers.
6. **Wait.** Start the next part only when I say "next".

## LEARN MODE (for code that already exists)
Use this when I want to learn a file I didn't type, for example `app.js`, or any JavaScript Dhyan adds later.
1. **Read** the file. Don't edit it.
2. **Walk me through it line by line,** saying what each line does, with its module tag.
3. **Report.** If a line is wrong or outside the slides, tell me. Don't fix it unless I say so.
4. **Viva check.** Ask me 2 questions an examiner could ask about this part. Correct my answers.
5. **Wait** for "next".

---

## The project

**Problem:** hostel rooms are often allotted randomly. Two strangers share a room and clash over sleep times, AC, cleanliness, guests, noise and food.

**Front-end only:** HTML, CSS and JS in the browser. No server, no database and no external APIs. The answers live only in two JavaScript objects (`answers1`, `answers2`) while the page is open; a reload starts fresh.

### Already decided (don't re-ask)

**The flow** (both roommates use one device):
1. **Intro:** the site name, a tagline and a Start button, with About the team below them.
2. **Roommate 1:** answers all the questions on one page (standard radio buttons), then presses Submit.
3. **Pass the device:** a screen saying "Roommate 1 done! Hand over to Roommate 2." with a Continue button.
4. **Roommate 2:** the same form, emptied, then Submit.
5. **Results:** a big compatibility % inside a circle, then the ✓/✗ table (Question · Roommate 1's answer · Roommate 2's answer · ✓ or ✗).

**The results rules:**

| Score | Circle colour | Button |
|---|---|---|
| 71–100% | Green | None: reloading the page starts again |
| 50–70% | Mustard | Swap roommate |
| 0–49% | Red | Swap roommate |

- **Swap roommate** clears both roommates' answers, so both answer again, starting with Roommate 1.
- **Circle colour:** `app.js` adds one CSS class per score band (from `getBand`), and `style.css` colours it.
- **No dealbreakers:** the score alone decides the result.
- **No room rules in CIE 3:** that goes to the SEE.

**Files** (all code lives in the `project work/` subfolder; planning files stay in the main folder):

| File | Holds |
|---|---|
| `project work/index.html` | Header, the four screens, footer |
| `project work/style.css` | Prachi's design, the phone layout, the `.hidden` rule |
| `project work/logic.js` | `questions` array, `isMatch`, `buildRows`, `calculateScore`, `getBand`; no DOM |
| `project work/app.js` | Elements and state, `showScreen`, Start, saving answers, Submit check, handover, `showResults`, Swap, reload check |
| `project work/images/` | Team photos; names must match the `src` in `index.html` exactly (`prachi.jpeg`, `rishab.jpg`, `dhyan.jpg`, `disha.jpg`), cropped square |
| `CLAUDE.md`, `PLAN.md` | These instructions; the build plan and status |
| `Roommate Match design spec.md`, `Roommate Match mockup.pdf` | Prachi's design |
| `Roommate Match project guide.docx` | The full explanation of every file, for the team and the viva |

**The page:**
- One `index.html`; `app.js` shows one section at a time using `classList` and the `hidden` class. Clicking a button never loads a new page.
- Header (site name, nav links "Start" and "About the team") and footer ("Made by Rishab Bisht, Prachi Gogoi, Dhyan Prasad and Disha Sujit for CS1309 Web Technology, RV University") are on every screen, outside `<main>`.
- Nav links are plain links that reload the page: "Start" → `index.html`, "About the team" → `index.html#about`. No JavaScript.

**The form:**
- Hand-written in `index.html`. All 10 questions are radio buttons, each question a `fieldset` + `legend` card.
- Each radio's `value` is the answer text, which the results table shows directly.
- Validation: Submit is blocked until every question is answered. `app.js` shows one message near Submit, "Please answer every question (N left).", in soft red bold text in a pale red rounded box.
- The form is emptied with `form.reset()`: on Continue, on Swap, and on page load (the reload check).

**The JavaScript:**
- `questions` is an array of objects with `id` and `text`. `id` equals the radio `name`; `text` is the short label the results table shows; the full sentence lives in `index.html`.
- Answers are saved by one `change` listener on the form (event delegation), into `answers1` or `answers2`.
- Score = matches ÷ 10 × 100. Same answer = ✓.
- One plain-English comment above every function.

**The 10 questions:**

| # | Short label | Options |
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

**Dropped for CIE 3:** demo pair, self-checks (`console.assert`), localStorage, share link, typed AC number with tolerance, the "Brain Drain" phone question, the mockup's "No AC" option, `overflow-x` on the results table (it wraps its cells instead).

### Still open (ask me, as multiple choice)
1. The final site name ("Roommate Match" is a stand-in in the header, `<h1>` and `<title>`).
2. The 3 remaining photos (`rishab.jpg`, `dhyan.jpg`, `disha.jpg`).
3. Where the free illustrations go, if anywhere.

---

## Design references (the look only)
- `Roommate Match design spec.md`: colours, fonts, sizes, shapes, screens.
- `Roommate Match mockup.pdf`: Prachi's mockup, laptop and phone.

They don't override anything in "Already decided". For example, the mockup's sample questions and its "No AC" option are not ours.

## Agreed hooks
The ids and classes shared between `index.html`, `style.css` and `app.js`. Changing one means changing every file that uses it.

| Hook | id or class | On which element | Used by |
|---|---|---|---|
| Every screen | `class="screen"` | All 4 screen `<section>`s inside `<main>` | `app.js`: `showScreen` loops over them to hide all but one (A2) |
| Intro screen | `id="intro"` | The intro `<section>` (H3) | `app.js`: shown on page load |
| Start button | `id="start-btn"` | The Start `<button>` on the intro screen (H3) | `app.js`: click opens the form (A3) |
| Form screen | `id="form-screen"` | The questions `<section>` (H4) | `app.js`: shown after Start, Continue and Swap |
| Roommate badge | `id="roommate-label"` | The "Roommate 1" `<p>` above the form (H4) | `app.js`: set to "Roommate 2" on Continue (A6), back to "Roommate 1" on Swap (A9) |
| The form | `id="quiz-form"` | The `<form>` (H4) | `app.js`: change listener (A4), submit (A5), `reset()` (A6, A9, page load) |
| Radio names | `name="sleep"`, `ac`, `clean`, `guests`, `quiet`, `study`, `bathroom`, `sharing`, `food`, `social` | The radios of questions 1–10, in that order (H4, H5) | `app.js`: each is a key in the answers objects (A4). The `id`s in the `questions` array in `logic.js` (L1) are exactly the same words |
| Pass screen | `id="pass-screen"` | The pass-the-device `<section>` (H6) | `app.js`: shown after Roommate 1 submits (A5) |
| Continue button | `id="continue-btn"` | The Continue `<button>` on the pass screen (H6) | `app.js`: click shows the empty form for Roommate 2 (A6) |
| Results screen | `id="results-screen"` | The results `<section>` (H7) | `app.js`: shown by `showResults` (A7) |
| Score circle | `id="score-circle"` | An empty `<p>` (H7) | `app.js`: sets its text to e.g. "80%" and adds one band class (A7) |
| Table body | `id="results-body"` | The empty `<tbody>` of the results table (H7) | `app.js`: removes old rows and adds one `<tr>` per question (A8) |
| Swap button | `id="swap-btn"` | The Swap roommate `<button>`, typed with `class="hidden"` (H7) | `app.js`: shown for 70% and below (A7); click restarts both roommates (A9) |
| Band classes | `score-high` (71–100), `score-mid` (50–70), `score-low` (0–49) | Added to `#score-circle` by `app.js`, never typed in the HTML | Returned by `getBand` in `logic.js` (L5), added by `app.js` (A7). `style.css` colours them green, mustard, red (C7) |
| Row classes | `match-row`, `clash-row` | Added to each `<tr>` in `#results-body` by `app.js` | `app.js` adds one per row (A8). `style.css` tints them pale sage and pale red (C8) |
| Error message | `id="form-error"` | A `<p>` above Submit, hidden by default (H5) | `app.js`: sets its text and shows it when questions are missing, hides it otherwise (A5) |
| Hide class | `class="hidden"` | Defined in `style.css` (H8). Typed in the HTML on the error message and the Swap button | `app.js`: adds or removes it to hide or show the screens (A2), the error message (A5) and the Swap button (A7) |
| Team card | `class="team-card"` | Each of the 4 cards in About the team (H3) | `style.css` only. Not used by the JS |
| About the team block | `id="about"` | The About the team part of the intro screen (H3) | The "About the team" nav link only. Not used by the JS |

---

## SEE scope: the 40% (do NOT build now)
This is the "pending work" section of the CIE 3 report.
1. **React:** components, JSX, props, state, useState/useEffect and React Router (Module 4). `logic.js` should move across almost unchanged.
2. **Bootstrap:** grid, navbar, cards, modal, carousel and forms (Module 5), plus Figma.
3. **Room suggestions:** an ideal lights-out time and room temperature for the pair.
4. **Proposed (confirm with me):** group mode; an answer code so each roommate answers on their own phone; closeness scoring with typed inputs; localStorage; a share link.

## How CIE 3 is marked (20 marks)
- **Report (4):** follows the prescribed template, has screenshots of working features, and lists pending work with a plan to finish before SEE.
- **Demo (6):** every built feature works without errors; I explain the workflow and what's pending.
- **Viva (10):** I explain every feature and the concept behind it.

The rubric expects about 3/4 completion plus a clear plan for the rest.

---

## Concept coverage

### HTML and CSS (Phases H and C)

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
| The cascade, specificity | C3, C7 |
| CSS layouts, units, float and clear | C2, C5, C6, C9, site-check fixes |

### JavaScript (Phases L and A)

| Concept | Part |
|---|---|
| External `.js` file, script placement | H1, L1 |
| `let` / `const` | L1, A1 |
| Data types, `typeof`, `==` vs `===` | L2 |
| Operators, `if`/`else`, ternary | L4, L5, A2, A8 |
| `forEach` | A2, A8 |
| Function declaration / expression / arrow | L2 / A3 / L3 |
| Parameters, return values, scope | L2–L5, A2, A7 |
| `map`, `filter` | L3, L4 |
| Objects, bracket notation, `Object.keys` | L1, L3, A4, A5 |
| Template literals, destructuring, spread | A5, A7 / L3 / L6 |
| `getElementById`, `querySelector`, `querySelectorAll` | A1, A2, A8 |
| `textContent` vs `innerHTML`, `classList` | A5, A6, A7, A8 |
| `createElement`, `appendChild`, `remove` | A8 |
| `addEventListener`: submit + `preventDefault`, click, change | A3, A4, A5, A6, A9 |
| Event object, event delegation | A4, A5 |
| JS form validation with an on-page message | A5 |

**Not used in the project (explain from the slides if asked):** `push`, `find`, `sort`, `includes`, `reduce`, `Object.values` / `entries`, nested objects, object methods, the plain `for` loop, the `input` event, `setAttribute`, `innerHTML`.
