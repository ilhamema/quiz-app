
const questions = [
    {
        topic: "immigration",
        question: "What is the capital of Canada?",
        Answers: ["Toronto", "Ottawa", "Vancouver", "Montreal"],                     
        correctAnswer: "Ottawa",
    },

    {
        topic: "politics",
        question: "Who is the current Prime Minister of Canada?",
        Answers: ["Joe Biden", "Stephen Colbert", "Jane Goodall", "George Osborne" ,"Justin Trudeau"],
        correctAnswer: "Justin Trudeau",
    },
    {
        topic: "history",
        question: "Who was the first Canadian to win a Nobel Prize?",
        Answers: ["Albert Einstein", "Max Planck", "Charles Darwin", "Alexander Graham Bell"],
        correctAnswer: "Albert Einstein",
    },
    {
        topic: "science",
        question: "Which planet in our solar system is closest to the Sun?",
        Answers: ["Mercury", "Venus", "Earth", "Mars", "Jupiter"],
        correctAnswer: "Earth",
    },
];

const questionElement = document.getElementById("question");
const Buttons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;   

function startQuiz() {
      currentQuestionIndex = 0;
      score = 0;
    nextButton.innerHTML ="Next";
    showQuestion();
}
// function to show a question

function showQuestion() {
    buttons.innerHTML ="";
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML = `${currentQuestionIndex + 1}.${currentQuestion.questions}`;
// Use map () to create answer buttons 
    currentQuestion.Answers.map(Answer =>{
        const Buttons = document.createElement("button");
        button.innerHTML = answer;
        button.classList.add("btn");
        button.addEventListener("click" , () => checkAnswer(answer , currentQuestion.correctAnswer));
        answerButton.appenChild(button);
    });
}
// Function to check answer 
function checkAnswer(selectedAnswer , correctAnswer) {
    if(selectedAnswer === correctAnswer) {
        score++ ; 
    }
    currentQuestionIndex++;

    if(currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

// function to show final score using reduce()
function showScore() {
    questionElement.innerHTML= "";


    const totalCorrect = questions.reduce((acc,q)=>acc + (q.correctAnswer === q.selectedAnswer ? 1 : 0), 0);
    questionElement.innerHTML += `<br> you answered ${totalCorrect} questions correctly.`;

}
// Function to filter question by topic 
function filterQuestions (topic) {
    return questions.filter(q => q.topic === topic);
}
startQuiz();