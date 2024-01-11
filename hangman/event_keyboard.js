import { wrapper, randomNumber } from "./build_page.js";
import { dates } from "./json.js";
wrapper;
randomNumber;
dates;

const keys = document.querySelectorAll(".key");
const quizAnswer = document.querySelectorAll(".quiz__one-letter");
const quizCount = document.querySelector(".quiz_numbers");

let answerLetters = dates[randomNumber].answer.split("");
let letter;
let index;

// physical keyboard
function putButton() {
  document.addEventListener("keydown", (e) => {
    for (let i = 0; i < keys.length; i++) {
      if (keys[i].getAttribute("class").includes(e.code)) {
        keys[i].classList.add("active");
        letter = e.code.slice(-1);
      }
      showLetter();
    }
  });
}

function upButton() {
  document.addEventListener("keyup", (e) => {
    for (let i = 0; i < keys.length; i++) {
      if (keys[i].getAttribute("class").includes(e.code)) {
        keys[i].classList.remove("active");
        keys[i].classList.add("inactive");
      }
    }
    console.log(e.code);
  });
}

// virtual keyboard
function putMouse() {
  keys.forEach((key) => {
    key.addEventListener("mousedown", (e) => {
      key.classList.add("active");
      letter = key.innerHTML;
      showLetter();
    });
  });
}

function upMouse() {
  keys.forEach((key) => {
    key.addEventListener("mouseup", (e) => {
      key.classList.remove("active");
      key.classList.add("inactive");
      console.log(e);
    });
  });
}

function showLetter() {
  for (let j = 0; j < answerLetters.length; j++) {
    if (letter === answerLetters[j]) {
      index = j;
      for (let k = 0; k < quizAnswer.length; k++) {
        if (k === index) {
          quizAnswer[k].innerHTML = `${answerLetters[j]}`;
          quizAnswer[k].classList.add("active");
          console.log(k);
        }
      }
    }
  }
}

//quizCount.forEach((item) => console.log(item));
console.log(quizCount);
console.log(answerLetters);
export { putButton, upButton, putMouse, upMouse };
