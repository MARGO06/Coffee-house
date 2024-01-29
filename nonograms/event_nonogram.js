import { datesLevel1, datesLevel2, datesLevel3 } from "./json.js";
import { TopDates, LeftDates, FieldDates } from "./build_nonogram.js";

const nonograms = document.querySelector(".nonograms");
const images = document.querySelectorAll(".div-click");
const containerDiv = document.querySelector(".div-container");
const cellsField = document.querySelector(".nonogram__field");
const cellField = document.querySelectorAll(".nonogram__field-dates");
const resetButton = document.querySelector(".nonogram__button-reset");
const nonogramMinute = document.querySelector(".nonogram__minutes");
const nonogramSecond = document.querySelector(".nonogram__seconds");
const nonogramSound = document.querySelector(".nonogram__sound-container");
const buttonSave = document.querySelector(".nonogram__button-save");
const buttonContinue = document.querySelector(".nonogram__button-continue");
const textModal = document.querySelector(".modal__text");
const resultModal = document.querySelector(".modal__result");
const backgroundModal = document.querySelector(".modal__background");
const modalWindow = document.querySelector(".modal");
const buttonWindow = document.querySelector(".modal__button");
const buttonSolution = document.querySelector(".nonogram__button-solution");
let autoChangeTime;
const time = [];
const audio = new Audio();
const arrayLocal = new Array(25);

function paintCellField() {
  cellsField.addEventListener("click", (e) => {
    e.preventDefault;
    e.target.classList.toggle("active");
    if (time.length === 0) {
      time.push("start");
      autoChangeTime = setInterval(changeTime, 1000);
    }
    showAnswer();
    saveDataPlay();
    addSound();
  });
}

//add right click
function clickRightMouse() {
  cellsField.addEventListener("mousedown", (e) => {
    e.preventDefault;
    if (e.button === 2) {
      e.target.classList.toggle("change");
      if (time.length === 0) {
        time.push("start");
        autoChangeTime = setInterval(changeTime, 1000);
      }
      deleteContextMenu();
      addSound();
      saveDataPlay();
    }
  });
}

function deleteContextMenu() {
  cellField.forEach((item) => {
    item.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    });
  });
}

//clear field

function clearField() {
  cellField.forEach((item) => {
    if (
      item.classList.contains("active") ||
      item.classList.contains("change")
    ) {
      item.classList.remove("active");
      item.classList.remove("change");
    }
  });
  clearInterval(autoChangeTime);
  nonogramMinute.textContent = "00";
  nonogramSecond.textContent = "00";
}

//add reset game
function resetGame() {
  resetButton.addEventListener("click", (e) => {
    e.preventDefault();
    clearField();
  });
}
//add timer
let minute = 0;
let second = 0;

function changeTime() {
  second++;
  nonogramSecond.textContent = "0" + second;
  if (second > 9) {
    nonogramSecond.textContent = second;
  }
  if (second > 59) {
    second = 0;
    nonogramSecond.textContent = "0" + second;
    minute++;
    nonogramMinute.textContent = "0" + minute;
  }
  if (minute > 9) {
    nonogramMinute.textContent = minute;
  }
}

//sound click

function addSound() {
  audio.src = "./asserts/sounds/zvuk11.mp3";
  audio.play();
}

function clickNonogramSound() {
  nonogramSound.addEventListener("click", (e) => {
    nonogramSound.classList.toggle("inactive");
    audio.muted = true;
    if (!nonogramSound.classList.contains("inactive")) {
      audio.muted = false;
    }
  });
}

function saveDataPlay() {
  for (let i = 0; i < cellField.length; i++) {
    for (let j = 0; j < arrayLocal.length; j++) {
      if (cellField[i].classList.contains("active") && j === i) {
        arrayLocal.splice(j, 1, `${i}:active`);
      } else if (cellField[i].classList.contains("change") && j === i) {
        arrayLocal.splice(j, 1, `${i}:change`);
      } else if (
        (!cellField[i].classList.contains("change") ||
          !cellField[i].classList.contains("active")) &&
        j === i
      ) {
        arrayLocal.splice(j, 1, "");
      }
    }
  }
}

function savePlay() {
  buttonSave.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.setItem("last game", `${arrayLocal}`);
    clearField();
    localStorage.setItem("time", `${minute} ${second}`);
  });
}

//get data

function getDataPlay() {
  let dataArray;
  for (let i = 0; i < localStorage.length; i++) {
    let localData = localStorage.getItem("last game").split(",");
    dataArray = localData.filter((item) => item !== "");
  }
  for (let j = 0; j < dataArray.length; j++) {
    const data = dataArray[j].split(":");
    for (let k = 0; k < cellField.length; k++) {
      if (k == data[0] && data[1] === "active") {
        cellField[k].classList.add("active");
      }
      if (k == data[0] && data[1] === "change") {
        cellField[k].classList.add("change");
      }
    }
  }
}

function getTime() {
  for (let i = 0; i < localStorage.length; i++) {
    let localData = localStorage.getItem("time").split(" ");
    console.log(localData);
    second = localData[1];
    minute = localData[0];
    if (localData[0].length === 2 || localData[1].length === 2) {
      nonogramMinute.textContent = minute;
      nonogramSecond.textContent = second;
    }
    if (localData[0].length === 1) {
      nonogramMinute.textContent = "0" + minute;
    }
    if (localData[1].length === 1) {
      nonogramSecond.textContent = "0" + second;
    }
  }
}

function continueGame() {
  buttonContinue.addEventListener("click", (e) => {
    e.preventDefault();
    getDataPlay();
    getTime();
    console.log("fr");
  });
}

class Answer {
  constructor(cells, data) {
    this.cell = cells;
    this.answer = data;
    for (let j = 0; j < data.length; j++) {
      this.answer[j] = data[j];
    }
  }

  addAnswer() {
    for (let i = 0; i < this.cell.length; i++) {
      for (let j = 0; j < this.answer.length; j++) {
        if (this.cell[i].classList.contains("active") && this.answer[j] === 1) {
          this.answer.splice(i, 1, 2);
        }
      }
    }
    if (!this.answer.includes(1)) {
      showCongratulations();
    }
  }
}

function showAnswer() {
  for (let i = 0; i < datesLevel1.length; i++) {
    const correctAnswer = datesLevel1[i].answer.flat();
    const answer1 = new Answer(cellField, correctAnswer);
    answer1.addAnswer();
  }
}

function viewModalWindow() {
  textModal.textContent = "Congratulation 🎉🎉🎉";
  if (String(minute).length === 1) {
    resultModal.textContent = `Great! You have solved the nonogram in 0${minute} : ${second} seconds!`;
  }
  if (String(second).length === 1) {
    resultModal.textContent = `Great! You have solved the nonogram in ${minute} : 0${second} seconds!`;
  }
  if (String(minute).length === 1 && String(second).length === 1) {
    resultModal.textContent = `Great! You have solved the nonogram in 0${minute} : 0${second} seconds!`;
  }
  if (String(minute).length === 2 && String(second).length === 2) {
    resultModal.textContent = `Great! You have solved the nonogram in ${minute} : ${second} seconds!`;
  }
}

function showCongratulations() {
  viewModalWindow();
  backgroundModal.classList.add("active");
  modalWindow.classList.add("active");
}

function closeCongratulations() {
  buttonWindow.addEventListener("click", (e) => {
    e.preventDefault();
    clearField();
    backgroundModal.classList.remove("active");
    modalWindow.classList.remove("active");
  });
}
closeCongratulations();

function showRightAnswer() {
  buttonSolution.addEventListener("click", (e) => {
    e.preventDefault();
    let answer;
    for (let i = 0; i < datesLevel1.length; i++) {
      answer = datesLevel1[i].answer.flat();
    }
    for (let k = 0; k < answer.length; k++) {
      for (let j = 0; j < cellField.length; j++) {
        if (k === j && answer[k] === 1) {
          cellField[j].classList.add("active");
          console.log(answer);
        }
      }
    }
  });
}

function choseNonogram() {
  images.forEach((imag, index) => {
    imag.addEventListener("click", (e) => {
      e.preventDefault();
      for (let i = 0; i < datesLevel1.length; i++) {
        if (index === i) {
          const nonogramTop = new TopDates(datesLevel1[i].top);
          nonogramTop.fillTopPart();
          const nonogramLeft = new LeftDates(datesLevel1[i].left);
          nonogramLeft.fillLeftPart();
          nonograms.classList.add("active");
          containerDiv.classList.add("hidden");
        }
      }
    });
  });
}

export {
  paintCellField,
  clickRightMouse,
  resetGame,
  clickNonogramSound,
  savePlay,
  continueGame,
  closeCongratulations,
  showRightAnswer,
  choseNonogram,
};
