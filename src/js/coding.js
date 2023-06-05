const container = document.querySelector(".container");
const questionBox = document.querySelector(".question");
const optionsBox = document.querySelector(".options");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");
const scoreCard = document.querySelector(".scoreCard");
const alert = document.querySelector(".alert");
const startBtn = document.querySelector(".startBtn");


//Make an array of objects that store question, options and answer
const codingQuiz = [
  {
    id: 21,
    question: "Q 1. What is the correct syntax for an if statement in Python?",
    options: [
      "if (condition):",
      "if condition",
      "if: condition",
      "if condition:",
    ],
    answer: "if condition:",
    category: "coding",
  },
  {
    id: 22,
    question: "Q 2. Which of the following is not a data type in JavaScript?",
    options: ["String", "Number", "Boolean", "ArrayList"],
    answer: "ArrayList",
    category: "coding",
  },
  {
    id: 23,
    question:
      "Q 3. Which of the following is used to declare a variable in Java?",
    options: ["var", "let", "const", "int"],
    answer: "int",
    category: "coding",
  },
  {
    id: 24,
    question: "Q 4. What is the correct syntax for a for loop in C#?",
    options: [
      "for i = 0 to 10",
      "for (i = 0; i <= 10; i++)",
      "for (int i = 0; i <= 10)",
      "for i in range(0, 10)",
    ],
    answer: "for (i = 0; i <= 10; i++)",
    category: "coding",
  },
  {
    id: 25,
    question: "Q 5. Which of the following is not a looping structure in PHP?",
    options: ["while", "for", "do-while", "foreach"],
    answer: "foreach",
    category: "coding",
  },
  {
    id: 26,
    question: "Q 6. Which of the following is not a valid operator in C++?",
    options: ["+", "-", "*", "$"],
    answer: "$",
    category: "coding",
  },
  {
    id: 27,
    question:
      "Q 7. In which programming language is 'print' used for displaying output?",
    options: ["Python", "JavaScript", "Java", "C++"],
    answer: "Python",
    category: "coding",
  },
  {
    id: 28,
    question: "Q 8. What is the correct syntax for a function in Ruby?",
    options: ["function name()", "def name", "function name", "def name()"],
    answer: "def name()",
    category: "coding",
  },
  {
    id: 29,
    question: "Q 9. Which of the following is not a type of variable in Swift?",
    options: ["Int", "String", "Double", "Object"],
    answer: "Object",
    category: "coding",
  },
  {
    id: 30,
    question: "Q 10. In which programming language is '#' used for commenting?",
    options: ["Python", "JavaScript", "Java", "C++"],
    answer: "C++",
    category: "coding",
  },
];



//Making Variables
let currentQuestionIndex = 0;
let score = 0
let quizOver = false;

//Arrow function to show prev question
const showPrevQuestion = () => {
  const questionDetails = codingQuiz[currentQuestionIndex];
  questionBox.textContent = questionDetails.question;
  optionsBox.textContent = questionDetails.options;

  for (let i = 10; i < questionDetails.options.length; i--) {
    const currentOption = questionDetails.options[i];
    const optionDiv = document.createElement("div");
    optionDiv.textContent = currentOption;
    optionsBox.appendChild(optionDiv);
  }
};

showPrevQuestion();
prevBtn.addEventListener("click", () => {
  if (currentQuestionIndex < codingQuiz.length) {
    currentQuestionIndex--;
    showPrevQuestion();
  }
});



//Arrow function to show next question
const showNextQuestion = () => {
  const questionDetails = codingQuiz[currentQuestionIndex];
  questionBox.textContent = questionDetails.question;

  optionsBox.textContent = ""; //option clear
  for (let i = 0; i <= questionDetails.options.length; i++) {
    const currentOption = questionDetails.options[i];
    const optionDiv = document.createElement("div");
    optionDiv.textContent = currentOption;
    optionDiv.classList.add('option');
    optionsBox.appendChild(optionDiv);

    optionDiv.addEventListener('click', () => {
      if (optionDiv.classList.contains('selected')) {
        optionDiv.classList.remove('selected');
      } else {
        optionDiv.classList.add('selected');
      }
    });
  }
};


//function to check answers
const checkAnswer = () => {
    const selectedOption = document.querySelector('.option.selected');
    if (selectedOption.textContent === codingQuiz[currentQuestionIndex].answer) {
        //alert("Correct Answer!");
        displayAlert("Correct Answer!");
        score++
    }
    else {
        //alert("Wrong Answer!")
        displayAlert(`Wrong Answer! ${codingQuiz[currentQuestionIndex].answer} is the Correct Answer.`);
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < codingQuiz.length) {
        showNextQuestion();
        }
      else {
        showScore();
        quizOver = true;
        }
}


//function to show score
const showScore = () => {
    questionBox.textContent = "";
    optionsBox.textContent = "";
    scoreCard.textContent = `You Scored ${score} out of ${codingQuiz.length}!`;
    displayAlert("You have completed the Quiz!");
    nextBtn.textContent = "Play Again"
    prevBtn.textContent = "Home";
}

//funtion to show alert
const displayAlert=(msg)=>{
    alert.style.display = "block";
    alert.textContent = msg;
    setTimeout(() => {
        alert.style.display = "none";
    }, 2000);
}


//adding event listener to start button
startBtn.addEventListener('click', () => {
    startBtn. style.display = "none";
    container.style.display = "block";
    showNextQuestion();
})

// showNextQuestion();
nextBtn.addEventListener('click', () => {
    const selectedOption = document.querySelector('.option.selected');
    if (!selectedOption && nextBtn.textContent==="Next") {
        //alert("Select your answer");
        displayAlert("Select your answer")
        return;
    }
    if (quizOver) {
        nextBtn.textContent = "Next"
        prevBtn.textContent = "Prev";
        scoreCard.textContent = "";
        currentQuestionIndex = 0;
        showNextQuestion();
        quizOver = false;
        score = 0;
    }
    else {
        checkAnswer()
    }
});
