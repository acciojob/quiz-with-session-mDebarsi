//your JS code here.
const userAnswers = []; // Initialize an array to store user answers
const questionsElement = document.getElementById("questions");
// Add event listener to the submit button
const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", handleSubmit);

// Handle submit function
function handleSubmit() {
  // Calculate the score
  const score = calculateScore();

  // Display the score on the page
  const scoreElement = document.getElementById("score");
  scoreElement.textContent = `Your score is ${score} out of 5.`;

  // Store the score in local storage
  localStorage.setItem("score", score.toString());
}

// Calculate the score based on user answers
function calculateScore() {
  let score = 0;
  for (let i = 0; i < questions.length; i++) {
    if (userAnswers[i] === questions[i].answer) {
      score++;
    }
  }
  return score;
}

// Add event listeners to radio buttons to update userAnswers array
questionsElement.addEventListener("change", handleRadioChange);

function handleRadioChange(event) {
  const { name, value } = event.target;
  const questionIndex = parseInt(name.split("-")[1]);
  userAnswers[questionIndex] = value;

  // Save user answers in session storage
  sessionStorage.setItem("progress", JSON.stringify(userAnswers));
}

// Do not change code below this line
// This code will just display the questions to the screen
const questions = [
  {
    question: "What is the capital of France?",
    choices: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    question: "What is the highest mountain in the world?",
    choices: ["Everest", "Kilimanjaro", "Denali", "Matterhorn"],
    answer: "Everest",
  },
  {
    question: "What is the largest country by area?",
    choices: ["Russia", "China", "Canada", "United States"],
    answer: "Russia",
  },
  {
    question: "Which is the largest planet in our solar system?",
    choices: ["Earth", "Jupiter", "Mars"],
    answer: "Jupiter",
  },
  {
    question: "What is the capital of Canada?",
    choices: ["Toronto", "Montreal", "Vancouver", "Ottawa"],
    answer: "Ottawa",
  },
];

// Display the quiz questions and choices
function renderQuestions() {
  for (let i = 0; i < questions.length; i++) {
    const question = questions[i];
    const questionElement = document.createElement("div");
    const questionText = document.createTextNode(question.question);
    questionElement.appendChild(questionText);
    for (let j = 0; j < question.choices.length; j++) {
      const choice = question.choices[j];
      const choiceElement = document.createElement("input");
      choiceElement.setAttribute("type", "radio");
      choiceElement.setAttribute("name", `question-${i}`);
      choiceElement.setAttribute("value", choice);
      if (userAnswers[i] === choice) {
        choiceElement.setAttribute("checked", true);
      }
      const choiceText = document.createTextNode(choice);
      questionElement.appendChild(choiceElement);
      questionElement.appendChild(choiceText);
    }
    questionsElement.appendChild(questionElement);
  }
}
renderQuestions();
