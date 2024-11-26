const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "Berlin", "Madrid", "Rome"],
        answer: "Paris"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    {
        question: "What is the largest planet in the Solar System?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Jupiter"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    const questionEl = document.getElementById("question");
    const answersEl = document.getElementById("answers");
    questionEl.textContent = questions[currentQuestionIndex].question;
    answersEl.innerHTML = "";

    questions[currentQuestionIndex].options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        answersEl.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    if (selectedOption === questions[currentQuestionIndex].answer) {
        score++;
    }
    document.getElementById("next-btn").disabled = false;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
        document.getElementById("next-btn").disabled = true;
    } else {
        document.getElementById("question").textContent = "Quiz Over!";
        document.getElementById("answers").textContent = "";
        document.getElementById("score").textContent = `Your Score: ${score}/${questions.length}`;
        document.getElementById("next-btn").style.display = "none";
    }
}

displayQuestion();
