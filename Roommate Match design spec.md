# Roommate Match design spec

Nov 14, 2026 · @Rishab

Prachi's front-end design for the CIE 3 build: a cozy sage-and-beige site where two roommates answer the same questions and see a big compatibility score plus a ✓/✗ table. See it in the [mockup](https://claude.ai/artifact/8HYK3qtUwj4p8H4JJH4B1u).

## Look & feel

Cozy and warm, designed for phone and laptop equally. Prachi chose the colour families, and Claude picked the exact shades, so change any of them here.

| Use | Colour | Hex |
| --- | --- | --- |
| Page background | Beige | #F3EDE1 |
| Cards, form boxes, table | Warm white | #FBF8F2 |
| Header, footer, table header | Light sage | #E3EBDF |
| Accent: buttons, links, ✓, green score | Deep forest green | #2F5D46 |
| Clash: ✗ and red score | Soft red | #B4473D |
| Middle score (50–70%) | Mustard | #D1A03A |
| Match row tint | Pale sage | #EDF3EA |
| Clash row tint | Pale red | #F7E3DF |
| Main text | Warm charcoal | #2A2A25 |
| Secondary text | Warm grey | #5B5A52 |
| Borders | Sand | #DCD3C3 |

- **Fonts:** Lora for headings (weights 600–700) and Nunito Sans for body text (400–700), both loaded from Google Fonts with a `<link>` (covered in Module 2).
- **Sizes:** intro title 64px, page titles 44px, question titles 20px, body 17px.
- **Shapes:** soft rounded corners (buttons 14px, cards 18px) with a gentle shadow (`0 6px 18px rgba(42, 42, 37, 0.08)`).
- **Answer choices:** standard radio buttons, each with a label and at least 44px tall so they're easy to tap.
- **Images:** free illustrations (e.g. unDraw) and real team photos.

## Screens and flow

Everything happens on one page. Every screen has the same header (site name, plus links to Start and About the team) and the same footer.

1. **Intro:** the site name, the tagline and a Start button. Below them, About the team: 4 cards, each with a real photo, a name and a role.
2. **Questions, Roommate 1:** all the questions on one page. Each question is a rounded card (`fieldset` + `legend`) with standard radio buttons, and a Submit button sits at the bottom.
3. **Pass the device:** "Roommate 1 done! Hand over to Roommate 2." with a Continue button.
4. **Questions, Roommate 2:** the same form, emptied, then Submit.
5. **Results:** the big score circle first, then the ✓/✗ table (Question · Roommate 1 · Roommate 2 · Match).

Footer text: "Made by \[names\] for CS1309 Web Technology, RV University".

## Results screen

The score shows first, as a big number inside a circle. The circle's colour depends on the score:

| Score | Circle colour | Number colour | Button below the table |
| --- | --- | --- | --- |
| 71–100% | Deep forest green #2F5D46 | White | None; reload the page to start again |
| 50–70% | Mustard #D1A03A | Dark charcoal | Swap roommate |
| 0–49% | Soft red #B4473D | White | Swap roommate |

- **Swap roommate:** clears both roommates' answers, so both answer again.
- **✓/✗ table:** match rows have a pale sage background and a green ✓; clash rows have a pale red background and a red ✗. The colour and the symbol together mean colour-blind users can still read it.
- **No dealbreakers:** the score alone decides the colour.
- **No room rules in CIE 3:** the results show only the score and the table.

## Decisions that change Rishab's logic

Rishab's Claude Code prompt lists the Council's ideas as proposals. Prachi's choices below settle some of them, so Rishab should go through these with his Claude Code.

| Prachi's decision | What Rishab's JavaScript needs to do |
| --- | --- |
| All questions on one page | Check the whole form when Submit is pressed |
| Pass-the-device screen between roommates | Hide the form, show the handoff screen, then on Continue show the empty form for Roommate 2 |
| Results show only the score and the ✓/✗ table | Drop room rules and midpoint rules (proposal 5) from CIE 3 |
| No dealbreakers | Drop proposal 4 |
| Big score first | Replaces proposal 6, which put a verdict sentence first |
| Score bands 71–100 / 50–70 / 0–49 | Add one CSS class per band to the circle (class names still to agree) |
| Swap roommate at 70% and below | Clear both roommates' answers and go back to Roommate 1 |
| No button at 71% and above | Nothing; reloading the page restarts |

Still to agree together: the exact ids and class names in Prachi's HTML that Rishab's JavaScript will use.

## Outside the slides

CIE 3 uses Modules 1–3 only. The mockup's layout needs four things the module slides don't teach, so the team should approve them or pick the in-slides alternative.

| What | Why it's needed | Where it's taught | In-slides alternative |
| --- | --- | --- | --- |
| Flexbox | Lines up cards, buttons and the header | Lab 4, not the slides | Float + position (harder to make work on phones) |
| Media queries | One design for phone and laptop | Lab 4, not the slides | Separate fixed widths (breaks on one of them) |
| `overflow-x: auto` on the table box | Lets the table scroll sideways on a phone | Not taught | Shrink the text and padding on phones |
| `min-height` on buttons and labels | Easy to tap (44px) | Not taught | A fixed `height` |

Already in the slides: the Google Fonts `<link>`, `border-radius`, `box-shadow`, `:hover` and `:focus`, table styling, `fieldset` and `legend`, and radio inputs.

## Saved for the SEE

- Suggest an ideal lights-out time and room temperature for the pair (Prachi's note).
- Convert the site to React and Bootstrap (from Rishab's plan).

## Open questions

- [ ] Site name (the team decides)
- [ ] Tagline under the site name (the team writes it)
- [ ] Where the free illustrations go
- [ ] Names, roles and photos for members 3 and 4, plus photos of all four
- [ ] The final list of questions and answer options (Rishab's plan)
- [ ] How a "please answer every question" error message looks
- [ ] The ids and class names Prachi's HTML and Rishab's JavaScript share
