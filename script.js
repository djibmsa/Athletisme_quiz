const displayHeader = document.getElementById("header");
const displayMain = document.getElementById("main");
const displayBoutonFooter = document.getElementById("btn-div-end");
const startBouton = document.getElementById("sButton");
const nextBouton = document.getElementById("nButton");
const questionId = document.getElementById("question");
const footerDisplay = document.querySelector("footer");
// const answers0 = document.getElementById("b1");
// const answers1 = document.getElementById("b2");
// const answers2 = document.getElementById("b3");
// const answers3 = document.getElementById("b4");
// const titre1 = document.getElementById("titre");
// const poney = document.getElementById("logo");

function UnDisplayMainArea() {
  displayMain.style.display = "none";
}
function displayMainArea() {
  displayMain.style.display = "block";
}
function undisplayHeaderArea() {
  displayHeader.style.display = "none";
}
function displayHeaderArea() {
  displayHeader.style.display = "block";
}
function UndisplayNextButtonFooter() {
  nextBouton.style.display = "none";
}
function displayNextButtonFooter() {
  nextBouton.style.display = "block";
}
function disabledNextButtonFooter() {
  nextBouton.disabled = true;
}

function unDisabledNextButtonFooter() {
  nextBouton.disabled = false;
}

function unDisplayStartButtonHeader() {
  startBouton.style.display = "none";
}
function displayFooter() {
  footerDisplay.style.display = "block";
}
function unDisplayFooter() {
  footerDisplay.style.display = "none";
}

let count = 0;
let questionIndex = 0;

UnDisplayMainArea();
UndisplayNextButtonFooter();
unDisplayFooter();
// footerDisplay.style.display = "none";

// displayMain.style.display = "none";
// nextBouton.style.display = "none";

// document.getElementById("myBtn").disabled = true;

startBouton.addEventListener("click", () => {
  undisplayHeaderArea();
  // displayHeader.style.display = "none";
  displayMainArea();
  // displayMain.style.display = "block";
  displayNextButtonFooter();
  // nextBouton.style.display = "block";
  displayFooter();
  createQuestion(Questions[0].question);
  createResponse(Questions[0].answers);

  disabledNextButtonFooter();
  // nextBouton.disabled = true;
});

nextBouton.addEventListener("click", () => {
  undisplayHeaderArea();
  // displayHeader.style.display = "none";
  displayMainArea();
  // displayMain.style.display = "block";
  displayNextButtonFooter();
  // nextBouton.style.display = "block";
  unDisplayStartButtonHeader();
  // startBouton.style.display = "none";
  questionIndex++;
  createQuestion(Questions[questionIndex].question);
  createResponse(Questions[questionIndex].answers);

  disabledNextButtonFooter();
  // nextBouton.disabled = true;
});

let questionDisplay = document.createElement("p");
let divDisplayUnicorn = document.createElement("img");

function createQuestion(question) {
  questionId.innerText = "";
  questionDisplay.innerText = question;
  divDisplayUnicorn.src = "./assets/marathonienne.jpg";
  divDisplayUnicorn.id = "pictureMarathonienneQuestion";
  
  questionId.appendChild(divDisplayUnicorn);
  questionId.appendChild(questionDisplay);
}
let divResponse = document.querySelector(".grid-container");

function createResponse(answers) {
  divResponse.innerHTML = "";

  for (let answer of answers) {
    let buttonResponse = document.createElement("button");
    // buttonResponse.classList.add("button-class");
    buttonResponse.innerText = answer;
    divResponse.appendChild(buttonResponse);

    buttonResponse.addEventListener("click", () => {
      let isCorrect = answer === Questions[questionIndex].correct;
      if (isCorrect) {
        unDisabledNextButtonFooter();
        buttonResponse.style.backgroundColor = "#1ecdad";
        buttonResponse.style.border = "none";
        count++;
        console.log(count);
      } else {
        buttonResponse.style.backgroundColor = "#e96f66";
        buttonResponse.style.border = "none";

        unDisabledNextButtonFooter();
      }
      let responseButtons = document.querySelectorAll(".grid-container button");
      responseButtons.forEach((btn) => {
        btn.disabled = true;
      });
    });
  }

  let resultDisplay = document.createElement("p");
  resultDisplay.classList.add("resultStyle");
  nextBouton.addEventListener("click", endQuiz);

  const pathShape = confetti.shapeFromPath({ path: "M0 10 L5 0 L10 10z" }); // Forme SVG

  const textShape = confetti.shapeFromText({ text: "🦄", scalar: 4 });

  function endQuiz() {
    if (questionIndex >= Questions.length) {
      for (let index = 0; index <= Math.floor(Math.random() * 10); index++) {
        confetti({
          particleCount: 150, // Nombre de confetti à lancer
          spread: 360, // Angle maximal de dispersion des confettis
          startVelocity: 30, // Vitesse initiale des confettis
          origin: {
            x: Math.random() - 0.2, // Position initiale aléatoire des confettis sur l'axe horizontal
            y: Math.random(), // Position initiale légèrement plus élevée sur l'axe vertical
          },
          colors: ["#1ecdad", "#e9afa3", "#1882d3", "#e96f66"], // Couleurs des confettis
          shapes: [pathShape, textShape], // Formes des confettis
          scalar: 2, // Taille des confettis
        });
        // const element = array[index];
      }

      // Texte personnalisé

      confetti({
        shapes: [pathShape, textShape],
        scalar: 2,
      });

      nextBouton.innerText = "Try Again";
      let percentage = (count / Questions.length) * 100;
      resultDisplay.textContent = `Good Job : ${percentage}%`;
      divResponse.style.display = "none";
      // resultDisplay.style.fontSize = "5rem";
      // resultDisplay.style.textDecoration = "underline";
      questionId.innerText = "";
      questionId.appendChild(resultDisplay);
      // questionDisplay.textContent = `Good Answers:${count}`;
      resetQuiz();
      return;
    }
  }
}

function resetQuiz() {
  nextBouton.addEventListener("click", () => {
    nextBouton.textContent = "Next";
    divResponse.style.display = "grid";
  });
  count = 0;
  questionIndex = 0;
  resultDisplay.textContent = "";

  // nextBouton.innerText = "";
  // nextBouton.value = "Next";
}
// answers0.innerText = answers[0];
// answers1.innerText = answers[1];
// answers2.innerText = answers[2];
// answers3.innerText = answers[3];

// let goodAnswer = document.getElementById("b3");
// goodAnswer.addEventListener("click", function () {
//   goodAnswer.style.backgroundColor = "#1ecdad";
// });
// let wrongAnswer = document.getElementById("b1");
// wrongAnswer.addEventListener("click", function () {
// goodAnswer.style.backgroundColor = "#1ecdad";
// });

// let wrongAnswer2 = document.getElementById("b2");
// wrongAnswer2.addEventListener("click", function () {
//   wrongAnswer2.style.backgroundColor = "#e96f66";
// });
// let wrongAnswer3 = document.getElementById("b4");
// wrongAnswer3.addEventListener("click", function () {
//   wrongAnswer3.style.backgroundColor = "#e96f66";
// });
