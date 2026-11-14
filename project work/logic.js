// The 10 questions, in the same order as the form.
// id = the radio "name" in index.html, text = the short label in the results table.
const questions = [
    { id: "sleep",    text: "Lights out time" },
    { id: "ac",       text: "AC temperature" },
    { id: "clean",    text: "Cleanliness" },
    { id: "guests",   text: "Guests" },
    { id: "quiet",    text: "Quiet voice from" },
    { id: "study",    text: "Studying in the room" },
    { id: "bathroom", text: "Bathroom time" },
    { id: "sharing",  text: "Sharing stuff" },
    { id: "food",     text: "Food in the room" },
    { id: "social",   text: "How social" }
];
// Takes two answers (strings). Returns true if they are exactly the same, false if not.
function isMatch(answer1, answer2) {
    return answer1 === answer2;
}
// Takes both roommates' answers (objects like { sleep: "Before 11 pm", ... }).
// Returns an array of 10 rows: { question, answer1, answer2, match }.
function buildRows(answers1, answers2) {
    return questions.map((q) => {
        const { id, text } = q;
        return {
            question: text,
            answer1: answers1[id],
            answer2: answers2[id],
            match: isMatch(answers1[id], answers2[id])
        };
    });
}
// Takes the rows from buildRows. Returns the score as a percentage (0 to 100).
function calculateScore(rows) {
    const matches = rows.filter((row) => row.match).length;
    return matches / rows.length * 100;
}
// Takes a score (0 to 100). Returns the CSS class for the circle's colour band.
function getBand(score) {
    if (score >= 71) {
        return "score-high";
    } else if (score >= 50) {
        return "score-mid";
    } else {
        return "score-low";
    }
}