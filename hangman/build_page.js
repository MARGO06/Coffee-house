import { dates } from "./json.js";
dates;

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
part2.className = "part illustration__part2";
illustration.append(part2);

const insidePart1 = document.createElement("div");
insidePart1.className = "part illustration__part2.1";
part2.append(insidePart1);

const insidePart2 = document.createElement("div");
insidePart2.className = "part illustration__part2.2";
part2.append(insidePart2);

const insidePart3 = document.createElement("div");
insidePart3.className = "part illustration__part2.3";
part2.append(insidePart3);

const part3 = document.createElement("div");
part3.className = "part illustration__part3";
illustration.append(part3);

const callGame = document.createElement("p");
callGame.className = "illustration__text";
callGame.innerHTML = "HANGMAN GAME";
illustration.append(callGame);

//create quiz
const quiz = document.createElement("div");
quiz.className = "quiz";
wrapper.append(quiz);

const answer = document.createElement("p");
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
scoreText.innerHTML = "Incorrect guesses";
score.append(scoreText);

const scoreNumbers = document.createElement("p");
scoreNumbers.className = "quiz_numbers";
scoreNumbers.innerHTML = "0/6";
score.append(scoreNumbers);

// create keyboard

const keyboard = document.createElement("div");
keyboard.className = "quiz__keyboard";
quiz.append(keyboard);

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
    const element = document.createElement("div");
    element.className = `key ${key}`;
    element.innerHTML = `${value}`;
    keyboard.append(element);
  }
}
addLetters();

// add answer and question
let randomNumber;
let emptyAnswer;

function randomNumbers(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  randomNumber = Math.floor(rand);
  console.log(randomNumber);
}
randomNumbers(0, 10);

function chooseQuestion() {
  for (let i = 0; i < dates.length; i++) {
    if (i === randomNumber) {
      question.innerHTML = `${dates[i].question}`;
      console.log(dates[i].question);
      let character = dates[i].answer.length;
      emptyAnswer = new Array(character).fill("_").join(" ");
      answer.innerHTML = `${emptyAnswer}`;
      console.log(character);
      console.log(emptyAnswer);
    }
  }
}

chooseQuestion();
console.log(dates);
export { wrapper };
