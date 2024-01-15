import { dates } from "./json.js";

const countNumbers = ["0", "/", "6"];

const wrapper = document.createElement("div");
wrapper.className = "wrapper";
document.body.append(wrapper);

//create illustration
const illustration = document.createElement("div");
illustration.className = "illustration";
wrapper.append(illustration);

const part1 = document.createElement("div");
part1.className = "part illustration__part1";
illustration.append(part1);

const part2 = document.createElement("div");
part2.className = "illustration__part2";
illustration.append(part2);

const insidePart1 = document.createElement("div");
insidePart1.className = "part illustration__part21";
part2.append(insidePart1);

const insidePart2 = document.createElement("div");
insidePart2.className = "part illustration__part22";
part2.append(insidePart2);

const insidePart3 = document.createElement("div");
insidePart3.className = "part illustration__part23";
part2.append(insidePart3);

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

const part3 = document.createElement("div");
part3.className = "part illustration__part3";
illustration.append(part3);

const callGame = document.createElement("h1");
callGame.className = "illustration__text";
callGame.innerHTML = "HANGMAN GAME";
illustration.append(callGame);

//create quiz
const quiz = document.createElement("div");
quiz.className = "quiz";
wrapper.append(quiz);

const answer = document.createElement("div");
answer.className = "quiz__answer";
quiz.append(answer);

const question = document.createElement("p");
question.className = "quiz__question";
quiz.append(question);

const score = document.createElement("div");
score.className = "score";
quiz.append(score);

const scoreText = document.createElement("p");
scoreText.className = "quiz_text";
scoreText.innerHTML = "Incorrect guesses:";
score.append(scoreText);

const scoreNumbers = document.createElement("p");
scoreNumbers.className = "quiz__numbers";
score.append(scoreNumbers);

function createCount() {
  countNumbers.forEach((countNumber, index) => {
    const number = document.createElement("div");
    number.className = `number quiz__numbers${index}`;
    number.innerHTML = `${countNumber}`;
    scoreNumbers.append(number);
  });
}
createCount();

// create keyboard

const keyboard = document.createElement("div");
keyboard.className = "quiz__keyboard";
quiz.append(keyboard);

const row = document.createElement("div");
row.className = "quiz__row";
keyboard.append(row);

const letters = {
  KeyA: "A",
  KeyB: "B",
  KeyC: "C",
  KeyD: "D",
  KeyE: "E",
  KeyF: "F",
  KeyG: "G",
  KeyH: "H",
  KeyI: "I",
  KeyJ: "J",
  KeyK: "K",
  KeyL: "L",
  KeyM: "M",
  KeyN: "N",
  KeyO: "O",
  KeyP: "P",
  KeyQ: "Q",
  KeyR: "R",
  KeyS: "S",
  KeyT: "T",
  KeyU: "U",
  KeyV: "V",
  KeyW: "W",
  KeyX: "X",
  KeyY: "Y",
  KeyZ: "Z",
};

function addLetters() {
  for (const [key, value] of Object.entries(letters)) {
    const element = document.createElement("button");
    element.className = `key ${key}`;
    element.innerHTML = `${value}`;
    row.append(element);
  }
}
addLetters();

// add answer and question
let randomNumber;
let emptyAnswer;

function addAnswer() {
  let newAnswer = emptyAnswer.split("");
  for (let i = 0; i < newAnswer.length; i++) {
    const partAnswer = document.createElement("div");
    partAnswer.className = `quiz__one-letter ${i}`;
    partAnswer.innerHTML = "";
    answer.append(partAnswer);
  }
}

function randomNumbers(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  randomNumber = Math.floor(rand);
  //console.log(randomNumber);
}
randomNumbers(0, 10);

function chooseQuestion() {
  for (let i = 0; i < dates.length; i++) {
    if (i === randomNumber) {
      question.innerHTML = `${dates[i].question}`;
      console.log(dates[i].question);
      console.log(dates[i].answer);
      let character = dates[i].answer.length;
      emptyAnswer = new Array(character).fill("_").join("");
    }
  }
  addAnswer();
}
chooseQuestion();

//create modal window

const modal = document.createElement("div");
modal.classList = "modal hidden";
wrapper.append(modal);

const modalText = document.createElement("p");
modalText.classList = "modal__text";
modalText.innerHTML = "";
modal.append(modalText);

const modalResult = document.createElement("p");
modalResult.classList = "modal__result";
modalResult.innerHTML = "";
modal.append(modalResult);

const modalAnswer = document.createElement("p");
modalAnswer.classList = "modal__answer";
modalAnswer.innerHTML = "";
modal.append(modalAnswer);

const modalButton = document.createElement("button");
modalButton.classList = "modal__button";
modalButton.innerHTML = "Play again";
modal.append(modalButton);

const modalBackground = document.createElement("div");
modalBackground.classList = "modal__background hidden";
wrapper.append(modalBackground);

export {
  wrapper,
  row,
  randomNumber,
  insidePart4,
  partFirst,
  partSecond,
  partThird,
  partFourth,
  partFifth,
  partSixth,
  part2,
  modalText,
  modalResult,
  modalAnswer,
  addAnswer,
  chooseQuestion,
  randomNumbers,
  question,
  answer,
  createCount,
  addLetters,
};
