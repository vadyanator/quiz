const quizData = [
    {
        question: 'How old is Odessa?',
        a: '298',
        b: '345',
        c: '456',
        d: '226',
        correct: 'd'
    },
    {
        question: 'What is the most used programming language in 2021?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'Java Script',
        correct: 'a'
    },
    {
        question: 'Who is the president of US?',
        a: 'Florin Pop',
        b: 'Donald Trump',
        c: 'Ivan Saldano',
        d: 'Joe Biden',
        correct: 'd'
    },
    {
        question: 'What does HTML stand for?',
        a: 'Hypertext Markup Language',
        b: 'Cascading Style Sheet',
        c: 'Jason Object Notation',
        d: 'Helicopters Terminals Motorboats Lamborginis',
        correct: 'a'
    },
    {
        question: 'What year was JavaScript launched?',
        a: '1996',
        b: '1995',
        c: '1994',
        d: 'none of the above',
        correct: 'd'
    }
];

const questionElem = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const answers = document.querySelectorAll('.answer');
const container = document.querySelector('.quiz-container')
let currentQuestion = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    answers.forEach( (answer) => {
        answer.checked = false;
    })

    const currentQuizData = quizData[currentQuestion];
    questionElem.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

    currentQuestion++;
}

function getSelected() {
    for (let answer of answers) {
        if (answer.checked) {
            return answer.id;
        }
    }
}

submitBtn.addEventListener('click', () => {

    if (currentQuestion < quizData.length) {
        let selectedId = getSelected();
        if (selectedId) {
            if (selectedId === quizData[currentQuestion - 1].correct) {
                score++;
            }
            loadQuiz();          
        }  
    } else if (currentQuestion === quizData.length) {
        let selectedId = getSelected();
        if (selectedId) {
            if (selectedId === quizData[currentQuestion - 1].correct) {
                score++;
            }
            container.innerHTML = `<h2>You answered correctly ${score}/${quizData.length} questions</h2>
            <button onClick='location.reload()'>Try again!</button>`;        
        }
    }  
})



