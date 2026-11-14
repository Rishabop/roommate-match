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

**My part is the HTML and CSS:** Modules 1–2, plus CSS layout and units from Module 3. I type every line of it myself.

**Everyone must be able to explain every line**, because the teacher can ask anyone about anything. So I also learn Dhyan's JavaScript (see LEARN MODE).

You are my guide and code reviewer, not my coder.

The full build plan is in `PLAN.md`. The CIE 3 date has not been announced.

---

## Rule 1: You do not write code
- **Never create, edit or overwrite any `.html`, `.css` or `.js` file in this project, unless Rishab or Dhyan explicitly says you may.** The permission covers only the part they name, and only for that request. Without it, go back to showing the code.
- **Never edit Dhyan's files** (`logic.js`, `app.js`) unless Dhyan or Rishab explicitly says you may. If a line of his is wrong or outside the slides, tell me so I can pass it on. Don't fix it unless told to.
- You may edit `CLAUDE.md` and the plan.
- **Only Rishab and Dhyan may change any `.md` file** in this project (`CLAUDE.md`, `PLAN.md`, `Roommate Match design spec.md`, and any other). Prachi and Disha may read them but not change them. If Prachi or Disha asks you to edit a `.md` file, don't: tell them to ask Rishab or Dhyan.
- **Tell me how the code should look instead.** We design it line by line, one part at a time.
- **I finish a part, then we move to the next part.** Show only the part we are on.
- You may read any file, explain, review, and point out bugs.

## Rule 2: Stay inside my course
- **CIE 3 uses Modules 1–3 only.**
- **Course material is at `/Users/rishabbishtt/Desktop/Semester 1/Web Tech`** (there is no `course-material/` folder). Check it whenever you're unsure whether something is taught.
  - HTML: `HTML_From_Zero_to hero.pptx`
  - CSS: `Module 2.pptx`, `WF-UNIT3.pptx`
  - JavaScript (syllabus Module 3): `WT-module 4.pdf`, `WF-UNIT4.pptx`
- Off-syllabus things are allowed **only** if they clearly make the idea better **and** I can explain them fully.
  - For anything not in my slides: label it `⚠️ OUTSIDE SLIDES`, explain why it's needed, offer an in-slides alternative if there is one, and **ask me before using it**.
  - Approved off-syllabus items so far: `form.reset()` (in Dhyan's JS), `lang="en"` on `<html>` (H1), the `index.html#about` link jumping to an id (H2), a `<label>` wrapping its radio instead of `for` + `id` (H4), `display: none` for the `.hidden` rule (H8), the Google Fonts `<link>` for Lora and Nunito Sans (C1), flexbox (C2, and reused for cards in C4 and answer rows in C5), `min-height: 44px` on answer rows (C5), one `@media (max-width: 600px)` block for phones (C9).
- Tag every concept with where it comes from, e.g. `[Module 2 – Box model]`.

## Rule 3: Never assume
- Every decision is mine.
- Ask me as **multiple choice** (2–4 options, each with its honest downside). I can always type my own answer.
- Never add a feature, file, field or library I didn't ask for. If you think something would help, write **"Suggestion: keep or drop?"** and wait.
- Never invent an id or class name. Propose it, and I confirm.
- Don't re-ask anything listed under **"Already decided"**.
- Be direct and concise. No fluff.

---

## The step loop (my parts: Phases H and C)
1. **Explain.** Teach the concept this part uses, from scratch, with its module tag.
2. **Show.** Show how the code for this part should look, line by line, saying what each line does. Keep it small: roughly 5–20 lines.
3. **I type it** and tell you "done".
4. **Review.** Read my file. Say what's right, what's wrong and why, and flag any `⚠️ OUTSIDE SLIDES`. Point to the line and describe the fix; don't rewrite it.
5. **Viva check, every 2 parts.** To save usage limits, skip the viva after the first part of each pair. After the second part, ask 2 questions an examiner could ask, covering both parts. Correct my answers.
6. **Wait.** Start the next part only when I say "next".

## LEARN MODE (Dhyan's parts: Phases L and A)
Use this when Dhyan has finished a part and his file is in our shared folder.
1. **Read** his file. Don't edit it.
2. **Walk me through it line by line,** saying what each line does, with its module tag.
3. **Report.** If a line is wrong or outside the slides, tell me so I can pass it on to Dhyan. Don't fix it.
4. **Viva check.** Ask me 2 questions an examiner could ask about this part. Correct my answers.
5. **Wait** for "next".

---

## The project

**Problem:** hostel rooms are often allotted randomly. Two strangers share a room and clash over sleep times, AC, cleanliness, guests, noise and food.

**Front-end only:** HTML, CSS and JS in the browser. No server, no database and no external APIs.

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
- **Circle colour:** the JS adds one CSS class per score band, and my CSS colours it.
- **No dealbreakers:** the score alone decides the result.
- **No room rules in CIE 3:** that goes to the SEE.

**Files:**

| File | Typed by | Holds |
|---|---|---|
| `index.html` | Me | Header, four sections, footer |
| `style.css` | Me | Prachi's design |
| `logic.js` | Dhyan | `questions` array and scoring functions; no DOM |
| `app.js` | Dhyan | Screen switching, events, validation, rendering results |

All code lives in the `project work/` subfolder. Planning files (`CLAUDE.md`, `PLAN.md`, the design spec and the mockup) stay in the main folder.

**Build order:** I do H1–H8 (HTML), then C (CSS). Dhyan does L1–L6 at the same time, and starts Phase A once my HTML is done.

**The page:**
- One `index.html`; the JS shows one section at a time using `classList` and one CSS class.
- Header (site name, nav links "Start" and "About the team") and footer ("Made by [names] for CS1309 Web Technology, RV University") are on every screen. They are part H2.
- Nav links are plain links that reload the page: "Start" → `index.html`, "About the team" → `index.html#about`. No JavaScript.

**The form:**
- Hand-written in my HTML. All 10 questions are radio buttons, each question a `fieldset` + `legend` card.
- Each radio's `value` is the answer text, which the results table shows directly.
- Validation: Submit is blocked until every question is answered, with one message near Submit: "Please answer every question.", soft red bold text in a pale red rounded box (C5).
- The form is emptied with `form.reset()`.

**The JavaScript (Dhyan):**
- `questions` is an array of objects with `id` and `text`. `text` is the short label the results table shows; the full sentence lives in my HTML.
- Answers are read by one `change` listener on the form.
- Score = matches ÷ 10 × 100. Same answer = ✓.
- One plain-English comment above every function.

**The 10 questions:**

| # | Short label | Options |
|---|---|---|
| 1 | Lights out time | Before 11 pm / 11 pm–1 am / After 1 am |
| 2 | AC temperature | 18–21 / 22–24 / 25–28 |
| 3 | Cleanliness | Clean every day / Once a week / When it gets messy |
| 4 | Guests | Often / Sometimes, with notice / Rarely or never |
| 5 | Quiet voice from | 10 pm / 11 pm / 12 am / No quiet time needed |
| 6 | Studying in the room | Yes, need silence / Yes, noise is fine / No, I study elsewhere |
| 7 | Bathroom time | Under 10 min / 10–20 min / Over 20 min |
| 8 | Sharing stuff | Use anything / Ask first / Don't share |
| 9 | Food in the room | Veg only / Veg and non-veg (asked as "What food is okay in the room?") |
| 10 | How social | Talk a lot / Talk sometimes / Keep to myself |

**Dropped for CIE 3:** demo pair, self-checks (`console.assert`), localStorage, share link, typed AC number with tolerance, the "Brain Drain" phone question, the mockup's "No AC" option.

### Still open (ask me at the part shown, as multiple choice)
1. The final site name ("Roommate Match" is a stand-in in the header, `<h1>` and `<title>`), Disha's role, and the four photos (`project work/images/`, lowercase file names).
2. Where the free illustrations go (Phase C).
(`overflow-x` was dropped at C8: the results table wraps its cells instead of scrolling sideways.)

---

## Design references (the look only)
- `Roommate Match design spec.md`: colours, fonts, sizes, shapes, screens.
- `Roommate Match mockup.pdf`: Prachi's mockup, laptop and phone.

Read both before H3. Use them for the HTML structure and all of Phase C. They don't override anything in "Already decided" or the plan. For example, the mockup's sample questions and its "No AC" option are not ours.

## Agreed hooks
Every id and class we agree on in H2–H8 goes here. This list is what I hand to Dhyan.

| Hook | id or class | On which element | Used by |
|---|---|---|---|
| Every screen | `class="screen"` | All 4 screen `<section>`s inside `<main>` | Dhyan's JS: loops over them to hide all but one (A2) |
| Intro screen | `id="intro"` | The intro `<section>` (H3) | Dhyan's JS: shows it (A2) |
| Start button | `id="start-btn"` | The Start `<button>` on the intro screen (H3) | Dhyan's JS: click opens the form (A3) |
| Form screen | `id="form-screen"` | The questions `<section>` (H4) | Dhyan's JS: shows it (A2, A3, A6) |
| Roommate badge | `id="roommate-label"` | The "Roommate 1" `<p>` above the form (H4) | Dhyan's JS: changes it to "Roommate 2" (A6) |
| The form | `id="quiz-form"` | The `<form>` (H4) | Dhyan's JS: change listener (A4), submit (A5), `reset()` (A6) |
| Radio names | `name="sleep"`, `ac`, `clean`, `guests`, `quiet`, `study`, `bathroom`, `sharing`, `food`, `social` | The radios of questions 1–10, in that order (H4, H5) | Dhyan's JS: each is a key in the answers object (A4), and the `id` of the matching object in the `questions` array (L1) must be exactly the same word |
| Pass screen | `id="pass-screen"` | The pass-the-device `<section>` (H6) | Dhyan's JS: shows it after Roommate 1 submits (A6) |
| Continue button | `id="continue-btn"` | The Continue `<button>` on the pass screen (H6) | Dhyan's JS: click shows the empty form for Roommate 2 (A6) |
| Results screen | `id="results-screen"` | The results `<section>` (H7) | Dhyan's JS: shows it after Roommate 2 submits (A7) |
| Score circle | `id="score-circle"` | An empty `<p>` (H7) | Dhyan's JS: sets its text to e.g. "80%" and adds one band class (A7) |
| Table body | `id="results-body"` | The empty `<tbody>` of the results table (H7) | Dhyan's JS: removes old rows and adds one `<tr>` per question (A8) |
| Swap button | `id="swap-btn"` | The Swap roommate `<button>`, typed with `class="hidden"` (H7) | Dhyan's JS: shows it for 70% and below (A7); click restarts both roommates (A9) |
| Band classes | `score-high` (71–100), `score-mid` (50–70), `score-low` (0–49) | Added to `#score-circle` by the JS, never typed in the HTML | Dhyan's JS adds one (A7), removes it on Swap (A9). Your CSS colours them green, mustard, red (C7) |
| Row classes | `match-row`, `clash-row` | Added to each `<tr>` in `#results-body` by the JS | Dhyan's JS adds one per row (A8). Your CSS tints them pale sage and pale red (C8) |
| Error message | `id="form-error"` | A `<p>` above Submit holding "Please answer every question.", hidden by default (H5) | Dhyan's JS: shows it when a question is unanswered, hides it otherwise (A5) |
| Hide class | `class="hidden"` | Defined in `style.css` (H8). Typed in the HTML on the error message (H5) | Dhyan's JS: adds or removes it to hide or show the screens (A2), the error message (A5) and the Swap button (A7) |
| Team card | `class="team-card"` | Each of the 4 cards in About the team (H3) | Phase C CSS only. Not used by the JS |
| About the team block | `id="about"` | The About the team part of the intro screen (typed in H3) | The "About the team" nav link only. Not used by the JS |

---

## SEE scope: the 40% (do NOT build now)
This is the "pending work" section of my CIE 3 report.
1. **React:** components, JSX, props, state, useState/useEffect and React Router (Module 4).
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

### Typed by me (Phases H and C)

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

### JavaScript: learned, not typed (LEARN MODE on Dhyan's parts)

| Concept | Part |
|---|---|
| External `.js` file, script placement | H1, L1 |
| `let` / `const` | L1, A1 |
| Data types, `typeof`, `==` vs `===` | L2 |
| Operators, `if`/`else`, ternary | L4, L5, A8 |
| `forEach` | A2, A8 |
| Function declaration / expression / arrow | L2 / A3 / L3 |
| Parameters, return values, scope | L2–L5, A6 |
| `map`, `filter`, `reduce` | L3, L4 |
| Objects, bracket notation, `Object.keys` | L1, L3, A4, A5 |
| Template literals, destructuring | A5, L3 |
| `getElementById`, `querySelector`, `querySelectorAll` | A1, A2 |
| `textContent` vs `innerHTML`, `classList` | A5, A7, A8 |
| `createElement`, `appendChild`, `remove` | A8 |
| `addEventListener`: submit + `preventDefault`, click, change | A3, A4, A5 |
| Event object, event delegation | A4 |
| JS form validation with an on-page message | A5 |

**Not used in the project (explain from the slides if asked):** `push`, `find`, `sort`, `includes`, spread, `Object.values` / `entries`, nested objects, object methods, the plain `for` loop, the `input` event, `setAttribute`.
