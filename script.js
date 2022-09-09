const quizData = [
    {
        question: "What is often seen as the smallest unit of memory?",
        a: "Megabyte",
        b: "TeraByte",
        c: "GigaByte",
        d: "Kilobyte",
        correct: "d",
    },
    {
        question: "What year was the very first model of the iPhone released?",
        a: "2007",
        b: "2009",
        c: "1998",
        d: "2000",
        correct: "a",
    },
    {
        question: "What does “HTTP” stand for?",
        a: "Hypertext Markup Language",
        b: "HyperText Transferred Protocol",
        c: "HyperText Transfer Protocol",
        d: "Hello To The People",
        correct: "c",
    },
    {
        question: "What’s the shortcut for the “copy” function on most computers?",
        a: "Ctrl X",
        b: "Ctrl C",
        c: "Ctrl V",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "Google Chrome, Safari, Firefox, and Explorer are different types of what?",
        a: "Programming Languages",
        b: "Text Editors",
        c: "Web Browsers",
        d: "none of the above",
        correct: "c",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})