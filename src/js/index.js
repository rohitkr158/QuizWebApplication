// Get the button and quiz topics elements
const quizButton = document.getElementById("quizButton");
const quizTopics = document.getElementById("quizTopics");
const topicButton = document.getElementById("topicButton");

// Add event listener to the button
quizButton.addEventListener("click", function () {
  // Toggle the visibility of the quiz topics
  quizTopics.classList.toggle("hidden");
});

// Add event listeners to the quiz topics
const topics = quizTopics.getElementsByTagName("li");
for (let i = 0; i < topics.length; i++) {
  topics[i].addEventListener("click", function () {
    // Handle the quiz topic selection
    console.log("Selected topic:", topics[i].innerText);
    // Add your logic to handle the selected topic
  });
}
