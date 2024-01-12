import { wrapper, randomNumber } from "./build_page.js";
import { dates } from "./json.js";
wrapper;
randomNumber;
dates;

const keys = document.querySelectorAll(".key");
const quizAnswer = document.querySelectorAll(".quiz__one-letter");
const quizCount = document.querySelector(".quiz_numbers");
const numbers = document.querySelectorAll(".number");

let answerLetters = dates[randomNumber].answer.split("");
let letter;
let index;
let first = 0;
let second = 6;

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
    countChange();
  });
}

function upButton() {
  document.addEventListener("keyup", (e) => {
    for (let i = 0; i < keys.length; i++) {
      if (keys[i].getAttribute("class").includes(e.code)) {
        keys[i].classList.remove("active");
        keys[i].setAttribute("disabled", "");
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
      countChange();
    });
  });
}

function upMouse() {
  keys.forEach((key) => {
    key.addEventListener("mouseup", (e) => {
      key.classList.remove("active");
      key.setAttribute("disabled", "");
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
        }
      }
    }
  }
}

function countChange() {
  if (
    !answerLetters.includes(letter) &&
    first <= 5 &&
    first >= 0 &&
    second < 7 &&
    second >= 1
  ) {
    first++;
    second--;
  }
  numbers[0].innerHTML = `${first}`;
  numbers[2].innerHTML = `${second}`;
}

//quizCount.forEach((item) => console.log(item));
console.log(second);
console.log(first);
console.log(numbers);
console.log(answerLetters);
export { putButton, upButton, putMouse, upMouse };
