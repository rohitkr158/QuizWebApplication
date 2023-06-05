const container = document.querySelector(".container");
const questionBox = document.querySelector(".question");
const optionsBox = document.querySelector(".options");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");
const scoreCard = document.querySelector(".scoreCard");
const alert = document.querySelector(".alert");
const startBtn = document.querySelector(".startBtn");

//Make an array of objects that store question, options and answer
const modernArtQuiz = [
  {
    id: 11,
    question: "Q 1. Which artist is known for coining the term 'Surrealism'?",
    options: [
      "Pablo Picasso",
      "Salvador Dali",
      "Vincent van Gogh",
      "Henri Matisse",
    ],
    answer: "Salvador Dali",
  },
  {
    id: 12,
    question:
      "Q 2. Which movement is associated with the use of abstract forms and shapes in art?",
    options: ["Impressionism", "Expressionism", "Futurism", "Cubism"],
    answer: "Cubism",
    category: "modern-art",
  },
  {
    id: 13,
    question:
      "Q 3. Which artist is known for painting the work 'The Persistence of Memory'?",
    options: [
      "Pablo Picasso",
      "Salvador Dali",
      "Vincent van Gogh",
      "Henri Matisse",
    ],
    answer: "Salvador Dali",
    category: "modern-art",
  },
  {
    id: 14,
    question: "Q 4. Which artist is known for creating the painting 'The Scream'?",
    options: [
      "Vincent van Gogh",
      "Salvador Dali",
      "Edvard Munch",
      "Claude Monet",
    ],
    answer: "Edvard Munch",
    category: "modern-art",
  },
  {
    id: 15,
    question:
      "Q 5. What movement was associated with the use of bold, bright colors and thick brushstrokes?",
    options: ["Impressionism", "Expressionism", "Fauvism", "Cubism"],
    answer: "Fauvism",
    category: "modern-art",
  },
  {
    id: 16,
    question:
      "Q 6. What movement was associated with the use of bright colors, simplified forms, and a focus on movement and speed",
    options: [
      "Impressionism",
      "Futurism",
      "Surrealism",
      "Abstract Expressionism",
    ],
    answer: "Futurism",
    category: "modern-art",
  },
  {
    id: 17,
    question: "Q 7. Which artist is known for creating the painting 'Water Lilies'?",
    options: ["Claude Monet", "Paul Cezanne", "Paul Gauguin", "Paul Klee"],
    answer: "Claude Monet",
    category: "modern-art",
  },
  {
    id: 18,
    question:
      "Q 8. Which artist is known for creating the painting 'Les Demoiselles d'Avignon'?",
    options: [
      "Henri Matisse",
      "Vincent van Gogh",
      "Salvador Dali",
      "Pablo Picasso",
    ],
    answer: "Pablo Picasso",
    category: "modern-art",
  },
  {
    id: 19,
    question: "Q 9. Which artist is known for creating the painting 'Guernica'?",
    options: [
      "Claude Mone",
      "Paul Cezanne",
      "Pablo Picasso",
      "Vincent van Gogh",
    ],
    answer: "Pablo Picasso",
    category: "modern-art",
  },
  {
    id: 20,
    question: "Q 10. Which artist is known for creating the sculpture 'The Thinker'?",
    options: ["Auguste Rodin", "Alexander Calder", "Jean Arp", "Henry Moore"],
    answer: "Auguste Rodin",
    category: "modern-art",
  },
];

//Making Variables
let currentQuestionIndex = 0;
let score = 0
let quizOver = false;


//Arrow function to show prev question
const showPrevQuestion = () => {
  const questionDetails = modernArtQuiz[currentQuestionIndex];
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
  if (currentQuestionIndex < modernArtQuiz.length) {
    currentQuestionIndex--;
    showPrevQuestion();
  }
});


//Arrow function to show next question
const showNextQuestion = () => {
  const questionDetails = modernArtQuiz[currentQuestionIndex];
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
    if (selectedOption.textContent === modernArtQuiz[currentQuestionIndex].answer) {
        //alert("Correct Answer!");
        displayAlert("Correct Answer!");
        score++
    }
    else {
       // alert("Wrong Answer!")
       displayAlert(`Wrong Answer! ${modernArtQuiz[currentQuestionIndex].answer} is the Correct Answer.`);
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < modernArtQuiz.length) {
        showNextQuestion();
    } else {
        showScore();
        quizOver = true;
    }
}

//function to show score
const showScore = () => {
    questionBox.textContent = "";
    optionsBox.textContent = ""; 
    scoreCard.textContent = `You Scored ${score} out of ${modernArtQuiz.length}!`;
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
nextBtn.addEventListener("click", () => {
    const selectedOption = document.querySelector('.option.selected');
    if (!selectedOption && nextBtn.textContent==="Next") {
        //alert("Select your answer");
        displayAlert("Select your answer")
        return;
    }
    if (quizOver){
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
