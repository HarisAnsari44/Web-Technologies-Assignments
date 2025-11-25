
// --- Questions ---
const questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            { text: "Hyper Text Markup Language", correct: true },
            { text: "High Tech Modern Language", correct: false },
            { text: "Home Tool Management Language", correct: false },
            { text: "Hyperlink and Text Markup Language", correct: false }
        ]
    },
    {
        question: "Which HTML tag is used for an ordered list?",
        answers: [
            { text: "<ul>", correct: false },
            { text: "<li>", correct: false },
            { text: "<ol>", correct: true },
            { text: "<dl>", correct: false }
        ]
    },
    {
        question: "Which CSS property controls text color?",
        answers: [
            { text: "background-color", correct: false },
            { text: "font-color", correct: false },
            { text: "text-style", correct: false },
            { text: "color", correct: true }
        ]
    },
    {
        question: "True or False: A class selector starts with #.",
        answers: [
            { text: "True", correct: false },
            { text: "False", correct: true }
        ]
    },
    {
        question: "Which JS method writes to the document?",
        answers: [
            { text: "console.log()", correct: false },
            { text: "document.write()", correct: true },
            { text: "alert()", correct: false },
            { text: "innerHTML()", correct: false }
        ]
    }
];

// --- Elements ---
const welcome = document.getElementById("welcome");
const quiz = document.getElementById("quiz");
const result = document.getElementById("result");
const start = document.getElementById("start");
const question = document.getElementById("question");
const answers = document.getElementById("answers");
const feedback = document.getElementById("feedback");
const next = document.getElementById("next");
const scoreText = document.getElementById("score");
const total = document.getElementById("total");
const finalScore = document.getElementById("finalScore");
const finalTotal = document.getElementById("finalTotal");
const finalMsg = document.getElementById("finalMsg");
const restart = document.getElementById("restart");

// --- State ---
let index = 0, score = 0;

// --- Functions ---
function show(screen) {
    [welcome, quiz, result].forEach(s => s.classList.remove("active"));
    screen.classList.add("active");
}

function loadQuestion() {
    if (index >= questions.length) return showResult();
    feedback.textContent = "";
    next.classList.add("hidden");

    const q = questions[index];
    question.textContent = q.question;
    answers.innerHTML = "";
    total.textContent = questions.length;

    q.answers.forEach(a => {
        const btn = document.createElement("button");
        btn.textContent = a.text;
        btn.className = "answer-btn";
        btn.onclick = () => selectAnswer(btn, a.correct);
        answers.appendChild(btn);
    });
}

function selectAnswer(btn, correct) {
    [...answers.children].forEach(b => b.disabled = true);

    if (correct) {
        score++;
        btn.classList.add("correct");
        feedback.textContent = "Correct!";
    } else {
        btn.classList.add("wrong");
        feedback.textContent = "Wrong!";
    }

    scoreText.textContent = score;
    next.classList.remove("hidden");
}

function showResult() {
    show(result);
    finalScore.textContent = score;
    finalTotal.textContent = questions.length;

    const p = (score / questions.length) * 100;
    finalMsg.textContent = p >= 80 ? "Excellent!" :
                           p >= 50 ? "Good Job!" :
                                    "Try Again!";
}

function reset() {
    index = 0;
    score = 0;
    scoreText.textContent = 0;
    show(welcome);
}

// --- Events ---
start.onclick = () => { show(quiz); loadQuestion(); };
next.onclick = () => { index++; loadQuestion(); };
restart.onclick = reset;

// --- Init ---
show(welcome);
