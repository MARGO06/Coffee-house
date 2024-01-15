import {
  modalText,
  modalResult,
  modalAnswer,
  randomNumber,
  part2,
  partFirst,
  partSecond,
  partThird,
  partFourth,
  partFifth,
  partSixth,
  chooseQuestion,
  randomNumbers,
} from "./build_page.js";
import { dates } from "./json.js";

const backgroundModal = document.querySelector(".modal__background");
const modalWindow = document.querySelector(".modal");
const numbers = document.getElementsByClassName("number");
const modalButton = document.querySelector(".modal__button");
const quizNewAnswer = document.getElementsByClassName("quiz__one-letter");
const keys = document.querySelectorAll(".key");
const illustrationBody = document.getElementsByClassName("illustration__body");
const questionModal = document.querySelector(".quiz__question");

let newLetter;
let newFirst = 0;
let newSecond = 6;
let newIndex;
const kkk = [];
let newAnswer;

function viewModal() {
  if (numbers[0].innerHTML !== "6") {
    modalText.innerHTML = "Game over! Congratulation! You won! 🎉🎉🎉";
  }
  if (numbers[0].innerHTML === "6") {
    modalText.innerHTML = "Game over! You lose! You can try again)";
  }
  const result = [
    `${numbers[0].innerHTML}`,
    `${numbers[1].innerHTML}`,
    `${numbers[2].innerHTML}`,
  ].join("");
  modalResult.innerHTML = `Your result : ${result}`;
  modalAnswer.innerHTML = `Correct answer : ${dates[randomNumber].answer}`;
}
//console.log(result);

function showModalWindow() {
  backgroundModal.classList.add("active");
  modalWindow.classList.add("active");
  viewModal();
  console.log("jjj");
}

function playAgain() {
  modalButton.addEventListener("click", (e) => {
    backgroundModal.classList.remove("active");
    modalWindow.classList.remove("active");
    deleteIllustrationBody();
    deleteCount();
    randomNumbers(0, 10);
    updateKeyboards();
    deleteAnswer();
    createIllustrationBody();
    chooseQuestion();
    getNewAnswer();
    putNewButton();
  });
}

function updateKeyboards() {
  keys.forEach((key) => {
    key.removeAttribute("disabled", "false");
  });
}

function deleteCount() {
  for (let i = 0; i < numbers.length; i++) {
    numbers[0].innerHTML = "0";
    numbers[2].innerHTML = "6";
  }
}

function deleteAnswer() {
  for (let i = quizNewAnswer.length - 1; i >= 0; i--) {
    quizNewAnswer[i].remove();
  }
}

function deleteIllustrationBody() {
  for (let i = illustrationBody.length - 1; i >= 0; i--) {
    illustrationBody[i].remove();
  }
}

function createIllustrationBody() {
  const insidePart4 = document.createElement("div");
  insidePart4.className = "part illustration__body";
  part2.append(insidePart4);

  const partFirst = document.createElement("div");
  partFirst.className = "part illustration__body1";
  insidePart4.append(partFirst);

  const partSecond = document.createElement("div");
  partSecond.className = "part illustration__body2";
  insidePart4.append(partSecond);

  const partThird = document.createElement("div");
  partThird.className = "part illustration__body3";
  insidePart4.append(partThird);

  const partFourth = document.createElement("div");
  partFourth.className = "part illustration__body4";
  insidePart4.append(partFourth);

  const partFifth = document.createElement("div");
  partFifth.className = "part illustration__body5";
  insidePart4.append(partFifth);

  const partSixth = document.createElement("div");
  partSixth.className = "part illustration__body6";
  insidePart4.append(partSixth);
}

function getNewAnswer() {
  for (let i = 0; i < dates.length; i++) {
    if (dates[i].question === questionModal.innerHTML) {
      newAnswer = dates[i].answer.split("");
      console.log(Array.isArray(newAnswer));
    }
  }
}

function countNewChange() {
  if (
    !newAnswer.includes(newLetter) &&
    newFirst <= 5 &&
    newFirst >= 0 &&
    newSecond < 7 &&
    newSecond >= 1
  ) {
    newFirst++;
    newSecond--;
  }
  numbers[0].innerHTML = `${newFirst}`;
  numbers[2].innerHTML = `${newSecond}`;
  console.log(numbers[0].innerHTML);
  showNewParts();
}

function putNewButton() {
  document.addEventListener("keydown", (e) => {
    for (let i = 0; i < keys.length; i++) {
      if (keys[i].getAttribute("class").includes(e.code)) {
        keys[i].classList.add("active");
        newLetter = e.code.slice(-1);
      }
    }
    showNewLetter();
    countNewChange();
    console.log(e);
  });
}

function showNewLetter() {
  for (let j = 0; j < newAnswer.length; j++) {
    if (newLetter === newAnswer[j]) {
      console.log(newAnswer);
      newIndex = j;
      for (let k = 0; k < quizNewAnswer.length; k++) {
        if (k === newIndex) {
          quizNewAnswer[k].innerHTML = `${newAnswer[j]}`;
          quizNewAnswer[k].classList.add("active");
          kkk.push(newAnswer[j]);
          if (kkk.length === newAnswer.length) {
            console.log(kkk);
            setTimeout(() => {
              showModalWindow();
            }, 1000);
          }
        }
      }
    }
  }
}

function showNewParts() {
  if (numbers[0].innerHTML === "1") {
    partFirst.style.visibility = "visible";
    console.log("ggg");
  }
  if (numbers[0].innerHTML === "2") {
    partSecond.style.visibility = "visible";
  }
  if (numbers[0].innerHTML === "3") {
    partThird.style.visibility = "visible";
  }
  if (numbers[0].innerHTML === "4") {
    partFourth.style.visibility = "visible";
  }
  if (numbers[0].innerHTML === "5") {
    partFifth.style.visibility = "visible";
  }
  if (numbers[0].innerHTML === "6") {
    partSixth.style.visibility = "visible";
    setTimeout(() => {
      showModalWindow();
    }, 2000);
  }
}

export { showModalWindow, playAgain };
