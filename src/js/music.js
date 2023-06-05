const container = document.querySelector(".container");
const questionBox = document.querySelector(".question");
const optionsBox = document.querySelector(".options");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");
const scoreCard = document.querySelector(".scoreCard");
const alert = document.querySelector(".alert");
const startBtn = document.querySelector(".startBtn");

//Make an array of objects that store question, options and answer
const musicQuiz = [
  {
    question: "Q 1. Which of the following is not a type of music notation?",
    options: [
      "Standard notation",
      "Tab notation",
      "Morse code notation",
      "Graphics notation",
    ],
    answer: "Morse code notation",
  },
  {
    id: 2,
    question: "Q 2. What is the most common time signature in classical music?",
    options: ["3/4", "4/4", "5/4", "6/8"],
    answer: "4/4",
    category: "music",
  },
  {
    id: 3,
    question:
      "Q 3. Which of the following is not a type of instrument in a symphony orchestra?",
    options: ["Violin", "Piano", "Harp", "Theremin"],
    answer: "Theremin",
    category: "music",
  },
  {
    id: 4,
    question: "Q 4. What is the most common key in pop music?",
    options: ["C Major", "G Major", "D Major", "A Major"],
    answer: "C Major",
    category: "music",
  },
  {
    id: 5,
    question: "Q 5. Which of the following is not a type of chord?",
    options: ["Major", "Minor", "Diminished", "Flat"],
    answer: "Flat",
    category: "music",
  },
  {
    id: 6,
    question: "Q 6. Which of the following is not a type of music genre?",
    options: ["Jazz", "Blues", "Rock", "Applesauce"],
    answer: "Applesauce",
    category: "music",
  },
  {
    id: 7,
    question: "Q 7. Which of the following is not a type of music theory?",
    options: ["Harmony", "Counterpoint", "Form", "Cooking"],
    answer: "Cooking",
    category: "music",
  },
  {
    id: 8,
    question: "Q 8. What is the most common tempo marking in classical music?",
    options: ["Allegro", "Andante", "Adagio", "Moderato"],
    answer: "Allegro",
    category: "music",
  },
  {
    id: 9,
    question: "Q 9. Which of the following is not a type of musical form?",
    options: ["Sonata", "Symphony", "Concerto", "Spaghetti"],
    answer: "Spaghetti",
    category: "music",
  },
  {
    id: 10,
    question:
      "Q 10. Which of the following is not a type of music notation software?",
    options: ["Sibelius", "Finale", "MuseScore", "Microsoft Word"],
    answer: "Microsoft Word",
    category: "music",
  },
];

//Making Variables
let currentQuestionIndex = 0;
let score = 0
let quizOver = false;

//Arrow function to show prev question
const showPrevQuestion = () => {
  const questionDetails = musicQuiz[currentQuestionIndex];
    questionBox.textContent = questionDetails.question;
    optionsBox.textContent = questionDetails.options;

  for (let i = 10; i < questionDetails.options.length; i--) {
    const currentOption = questionDetails.options[i];
    const optionDiv = document.createElement("div");
      optionDiv.textContent = currentOption;
      optionDiv.classList.add("option");
    optionsBox.appendChild(optionDiv);
  }
};

showPrevQuestion();
prevBtn.addEventListener("click", () => {
  if (currentQuestionIndex < musicQuiz.length) {
    currentQuestionIndex--;
    showPrevQuestion();
  }
});



//Arrow function to show next question
const showNextQuestion = () => {
  const questionDetails = musicQuiz[currentQuestionIndex];
  questionBox.textContent = questionDetails.question;

  optionsBox.textContent = ""; //option clear
  for (let i = 0; i <= questionDetails.options.length; i++) {
    const currentOption = questionDetails.options[i];
    const optionDiv = document.createElement("div");
    optionDiv.textContent = currentOption;
    optionDiv.classList.add("option");
    optionsBox.appendChild(optionDiv);

    optionDiv.addEventListener("click", () => {
      if (optionDiv.classList.contains("selected")) {
        optionDiv.classList.remove("selected");
      } else {
        optionDiv.classList.add("selected");
      }
    });
  }
};


//function to check answers
const checkAnswer = () => {
    const selectedOption = document.querySelector('.option.selected');
    if (selectedOption.textContent === musicQuiz[currentQuestionIndex].answer) {
       // alert("Correct Answer!");
        displayAlert("Correct Answer");
        score++; 
    }
    else {
        //alert("Wrong Answer!")
        displayAlert(`Wrong Answer! ${musicQuiz[currentQuestionIndex].answer} is the Correct Answer.`);
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < musicQuiz.length) {
        showNextQuestion();
      } else {
        showScore()
        quizOver = true;
        } 
}

//function to show score
const showScore = () => {
    questionBox.textContent = "";
    optionsBox.textContent = "";
    scoreCard.textContent = `You Scored ${score} out of ${musicQuiz.length}!`;
    displayAlert("You have completed the Quiz!");
    nextBtn.textContent = "Play Again"
    prevBtn.textContent = "Home";
}

//funtion to show alert
const displayAlert = (msg) => {
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

//showNextQuestion();
nextBtn.addEventListener("click", () => {
    const selectedOption = document.querySelector('.option.selected');
    if (!selectedOption && nextBtn.textContent==="Next") {
        //alert("Select your answer");
        displayAlert("Select your answer")
        return;
    }
    if (quizOver){
        nextBtn.textContent = "Next";
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
