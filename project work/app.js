// app.js: connects the logic in logic.js to the page.
// It shows one screen at a time, saves each roommate's answers,
// checks the form, and builds the results.

// ---------- A1: elements from index.html (ids agreed in CLAUDE.md) ----------
const screens = document.querySelectorAll(".screen");
const startBtn = document.getElementById("start-btn");
const quizForm = document.getElementById("quiz-form");
const roommateLabel = document.getElementById("roommate-label");
const formError = document.getElementById("form-error");
const continueBtn = document.getElementById("continue-btn");
const scoreCircle = document.getElementById("score-circle");
const resultsBody = document.getElementById("results-body");
const swapBtn = document.getElementById("swap-btn");

// State: what the app remembers while it runs
let currentRoommate = 1;
let answers1 = {};
let answers2 = {};


// ---------- A2: show one screen, hide the rest ----------
// Takes the id of a screen. Hides all 4 screens, then shows that one and jumps to the top.
function showScreen(screenId) {
    screens.forEach((screen) => {
        screen.classList.add("hidden");
    });
    document.getElementById(screenId).classList.remove("hidden");
    window.scrollTo(0, 0);
}

// Returns the answers object of whoever is answering right now.
function currentAnswers() {
    return currentRoommate === 1 ? answers1 : answers2;
}


// ---------- A3: Start button opens the form ----------
startBtn.addEventListener("click", function () {
    showScreen("form-screen");
});


// ---------- A4: save each pick as soon as a radio is clicked ----------
// One listener on the whole form (event delegation): event.target is the radio that changed.
quizForm.addEventListener("change", function (event) {
    const answers = currentAnswers();
    answers[event.target.name] = event.target.value;
});


// ---------- A5: Submit, check that all 10 questions are answered ----------
quizForm.addEventListener("submit", function (event) {
    event.preventDefault(); // stop the browser reloading the page

    const answered = Object.keys(currentAnswers()).length;
    const missing = questions.length - answered;

    if (missing > 0) {
        formError.textContent = `Please answer every question (${missing} left).`;
        formError.classList.remove("hidden");
        return;
    }
    formError.classList.add("hidden");

    if (currentRoommate === 1) {
        showScreen("pass-screen");
    } else {
        showResults();
    }
});


// ---------- A6: hand over to Roommate 2 ----------
continueBtn.addEventListener("click", function () {
    currentRoommate = 2;
    roommateLabel.textContent = "Roommate 2";
    quizForm.reset(); // empty every radio for Roommate 2
    showScreen("form-screen");
});


// ---------- A7 + A8: results screen ----------
// Scores both roommates, colours the circle, and builds the table rows.
function showResults() {
    const rows = buildRows(answers1, answers2);
    const score = calculateScore(rows);
    const band = getBand(score);

    // A7: the circle
    scoreCircle.textContent = `${score}%`;
    scoreCircle.classList.remove("score-high", "score-mid", "score-low");
    scoreCircle.classList.add(band);

    // Swap roommate only shows for 70% and below
    if (band === "score-high") {
        swapBtn.classList.add("hidden");
    } else {
        swapBtn.classList.remove("hidden");
    }

    // A8: the table, first remove any old rows
    resultsBody.querySelectorAll("tr").forEach((oldRow) => {
        oldRow.remove();
    });

    rows.forEach((row) => {
        const tr = document.createElement("tr");
        tr.classList.add(row.match ? "match-row" : "clash-row");

        const cells = [row.question, row.answer1, row.answer2, row.match ? "✓" : "✗"];
        cells.forEach((cellText) => {
            const td = document.createElement("td");
            td.textContent = cellText;
            tr.appendChild(td);
        });

        resultsBody.appendChild(tr);
    });

    showScreen("results-screen");
}


// ---------- A9: Swap roommate, both answer again ----------
swapBtn.addEventListener("click", function () {
    answers1 = {};
    answers2 = {};
    currentRoommate = 1;
    roommateLabel.textContent = "Roommate 1";
    quizForm.reset();
    formError.classList.add("hidden");
    showScreen("form-screen");
});


// ---------- When the page loads ----------
// Reload check: some browsers keep radios ticked after a reload, but answers1 starts empty,
// so the page and the JS would disagree. Emptying the form here keeps them in step.
quizForm.reset();
showScreen("intro");
