import { datesLevel1, datesLevel2, datesLevel3 } from "./json.js";
import { Level1, Level2, Level3 } from "./build_nonogram.js";

const nonograms = document.querySelector(".nonograms");
const images = document.querySelectorAll(".pictures__container");
const pictures = document.querySelectorAll(".pictures__img");
const containerDiv = document.querySelector(".pictures");
const cellsField = document.querySelectorAll(".nonogram__field");
const cellsField2 = document.querySelectorAll(".field-level2");
const cellsField3 = document.querySelectorAll(".field-level3");
const cellField = document.querySelectorAll(".field__1");
const resetButton = document.querySelector(".nonogram__button-reset");
const nonogramMinute = document.querySelector(".nonogram__minutes");
const nonogramSecond = document.querySelector(".nonogram__seconds");
const nonogramSound = document.querySelector(".nonogram__sound-container");
const nonogramSoundOff = document.querySelector(".nonogram__sound-off");
const buttonSave = document.querySelector(".nonogram__button-save");
const buttonContinue = document.querySelector(".nonogram__button-continue");
const textModal = document.querySelector(".modal__text");
const resultModal = document.querySelector(".modal__result");
const backgroundModal = document.querySelector(".modal__background");
const modalWindow = document.querySelector(".modal");
const buttonWindow = document.querySelector(".modal__button");
const buttonSolution = document.querySelector(".nonogram__button-solution");
const buttonLevel1 = document.querySelector(".header__level1");
const buttonLevel2 = document.querySelector(".header__level2");
const buttonLevel3 = document.querySelector(".header__level3");
const nonogramLevel1 = document.querySelectorAll(".nonogram__level1");
const nonogramLevel2 = document.querySelectorAll(".nonogram__level2");
const nonogramLevel3 = document.querySelectorAll(".nonogram__level3");
const buttonRandom = document.querySelector(".header__random");
const timeGame = document.querySelectorAll(".nonogram__success-time");
const levelGame = document.querySelectorAll(".nonogram__success-level");
const pictureGame = document.querySelectorAll(".nonogram__success-picture");
const buttonShowResults = document.querySelector(".nonogram__button-result");
const nonogramResults = document.querySelector(".nonogram__container-results");
const buttonChangeTheme = document.querySelector(".header__theme");
const wrapper = document.querySelector(".wrapper");
const sound = document.querySelector(".nonogram__sound");
const nonogramTopContainer = document.querySelectorAll(".nonogram__top-dates");
const nonogramTop = document.querySelectorAll(".nonogram__top");
const nonogramEmpty = document.querySelectorAll(".nonogram__dates-empty");
const nonogramDatesTop = document.querySelectorAll(".nonogram__dates-full");
const nonogramCellTop = document.querySelectorAll(".cell-top");
const nonogramDatesLeft = document.querySelectorAll(".nonogram__dates-left");
const nonogramCellLeft = document.querySelectorAll(".cell-left");
const nonogramDatesField = document.querySelectorAll(".nonogram__field-dates");
const nonogramLine = document.querySelectorAll(".line");
const nonogram = document.querySelectorAll(".nonogram");
const nonogramLeftContainer = document.querySelectorAll(
  ".nonogram__left-container"
);
const nonogramLeft = document.querySelectorAll(".nonogram__left");

//nonograms
const nonogramContainer1 = document.querySelector(".nonograms__container1");
//console.log(cellField);
let autoChangeTime;
const time = [];
const audio = new Audio();
const audioWinner = new Audio();
const arrayLocal = new Array(125);
const arrayLocal2 = new Array(1000);
const arrayLocal3 = new Array(1125);
let pictureIndex;
let pictureIndex2;
let pictureIndex3;
const rightAnswer2 = [];
const rightAnswer3 = [];
const allResults = [];
let minute = 0;
let second = 0;

function paintCellField() {
  cellsField.forEach((cellField, index) => {
    cellField.addEventListener("click", (e) => {
      e.preventDefault;
      e.target.classList.toggle("active");
      if (time.length === 0 || time.includes("reset")) {
        time.splice(0, 1, "start");
        autoChangeTime = setInterval(changeTime, 1000);
        //console.log(time);
      }
      showAnswer();
      showAnswer2();
      showAnswer3();
      saveDataPlay();
      saveDataPlay2();
      saveDataPlay3();
      addSound();
    });
  });
}

//add right click
function clickRightMouse() {
  cellsField.forEach((cellField, index) => {
    cellField.addEventListener("mousedown", (e) => {
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
        saveDataPlay2();
        saveDataPlay3();
      }
    });
  });
}

function clickRightMouseLine() {
  nonogramLine.forEach((line, index) => {
    line.addEventListener("mousedown", (e) => {
      e.preventDefault();
      if (e.button === 2) {
        nonogramDatesField.forEach((cell, index) => {
          if (cell.classList.contains("change")) {
            cell.classList.remove("change");
          }
        });
      }
    });
  });
}
clickRightMouseLine();

function deleteContextMenu() {
  cellsField.forEach((cellField, index) => {
    cellField.addEventListener("contextmenu", (e) => {
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
  clearField2();
  clearField3();
  nonogramMinute.textContent = "00";
  nonogramSecond.textContent = "00";
}

function clearField2() {
  cellsField2.forEach((item) => {
    if (
      item.classList.contains("active") ||
      item.classList.contains("change")
    ) {
      item.classList.remove("active");
      item.classList.remove("change");
    }
  });
}

function clearField3() {
  cellsField3.forEach((item) => {
    if (
      item.classList.contains("active") ||
      item.classList.contains("change")
    ) {
      item.classList.remove("active");
      item.classList.remove("change");
    }
  });
}

//add reset game
function resetGame() {
  resetButton.addEventListener("click", (e) => {
    e.preventDefault();
    clearField();
    time.splice(0, 1, "reset");
    minute = 0;
    second = 0;
    //console.log(time);
  });
}

//add timer

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

function addSoundWinner() {
  audioWinner.src = "./asserts/sounds/zvuk-pobedy-323.mp3";
  audioWinner.play();
}

function clickNonogramSound() {
  nonogramSound.addEventListener("click", (e) => {
    nonogramSound.classList.toggle("inactive");
    audio.muted = true;
    audioWinner.muted = true;
    if (!nonogramSound.classList.contains("inactive")) {
      audio.muted = false;
      audioWinner.muted = false;
    }
  });
}

function saveDataPlay() {
  for (let i = 0; i < nonogramLevel1.length; i++) {
    if (nonogramLevel1[i].classList.contains("active")) {
      for (let j = 0; j < cellField.length; j++) {
        for (let k = 0; k < arrayLocal.length; k++) {
          if (cellField[j].classList.contains("active") && j === k) {
            arrayLocal.splice(k, 1, `${j}:active`);
            //console.log(arrayLocal);
          } else if (cellField[j].classList.contains("change") && j === k) {
            arrayLocal.splice(k, 1, `${j}:change`);
          } else if (
            (!cellField[j].classList.contains("change") ||
              !cellField[j].classList.contains("active")) &&
            j === k
          ) {
            arrayLocal.splice(k, 1, "");
          }
        }
      }
    }
    //console.log(cellField[nonogramLevel1], i);
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

function saveDataPlay2() {
  for (let i = 0; i < nonogramLevel2.length; i++) {
    if (nonogramLevel2[i].classList.contains("active")) {
      for (let i = 0; i < cellsField2.length; i++) {
        for (let j = 0; j < arrayLocal2.length; j++) {
          if (cellsField2[i].classList.contains("active") && j === i) {
            arrayLocal2.splice(j, 1, `${i}:active`);
          } else if (cellsField2[i].classList.contains("change") && j === i) {
            arrayLocal2.splice(j, 1, `${i}:change`);
          } else if (
            (!cellsField2[i].classList.contains("change") ||
              !cellsField2[i].classList.contains("active")) &&
            j === i
          ) {
            arrayLocal2.splice(j, 1, "");
          }
        }
      }
    }
    // console.log(arrayLocal2);
  }
}

function savePlay2() {
  buttonSave.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.setItem("last game2", `${arrayLocal2}`);
    clearField();
    localStorage.setItem("time2", `${minute} ${second}`);
  });
}

function saveDataPlay3() {
  for (let i = 0; i < nonogramLevel3.length; i++) {
    if (nonogramLevel3[i].classList.contains("active")) {
      for (let i = 0; i < cellsField3.length; i++) {
        for (let j = 0; j < arrayLocal3.length; j++) {
          if (cellsField3[i].classList.contains("active") && j === i) {
            arrayLocal3.splice(j, 1, `${i}:active`);
          } else if (cellsField3[i].classList.contains("change") && j === i) {
            arrayLocal3.splice(j, 1, `${i}:change`);
          } else if (
            (!cellsField3[i].classList.contains("change") ||
              !cellsField3[i].classList.contains("active")) &&
            j === i
          ) {
            arrayLocal3.splice(j, 1, "");
          }
        }
      }
    }
  }
  //console.log(arrayLocal3);
}

function savePlay3() {
  buttonSave.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.setItem("last game3", `${arrayLocal3}`);
    clearField();
    localStorage.setItem("time3", `${minute} ${second}`);
  });
}

//get data

function getDataPlay() {
  if (buttonLevel1.classList.contains("active")) {
    let dataArray;
    for (let i = 0; i < localStorage.length; i++) {
      let localData = localStorage.getItem("last game").split(",");
      dataArray = localData.filter((item) => item !== "");
      // console.log(localData);
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

  if (buttonLevel2.classList.contains("active")) {
    let dataArray2;
    for (let i = 0; i < localStorage.length; i++) {
      let localData = localStorage.getItem("last game2").split(",");
      // console.log(localData);
      dataArray2 = localData.filter((item) => item !== "");
      // console.log(dataArray2);
    }
    console.log(localStorage.getItem("last game2"));
    //console.log(dataArray2);
    for (let j = 0; j < dataArray2.length; j++) {
      const data = dataArray2[j].split(":");
      for (let k = 0; k < cellsField2.length; k++) {
        if (k == data[0] && data[1] === "active") {
          cellsField2[k].classList.add("active");
        }
        if (k == data[0] && data[1] === "change") {
          cellsField2[k].classList.add("change");
        }
      }
    }
    //console.log("fgt");
  }
  if (buttonLevel3.classList.contains("active")) {
    let dataArray3;
    for (let i = 0; i < localStorage.length; i++) {
      let localData = localStorage.getItem("last game3").split(",");
      //console.log(localData);
      dataArray3 = localData.filter((item) => item !== "");
      //console.log(dataArray3);
    }
    console.log(localStorage.getItem("last game3"));
    // console.log(dataArray3);
    for (let j = 0; j < dataArray3.length; j++) {
      const data = dataArray3[j].split(":");
      for (let k = 0; k < cellsField3.length; k++) {
        if (k == data[0] && data[1] === "active") {
          cellsField3[k].classList.add("active");
        }
        if (k == data[0] && data[1] === "change") {
          cellsField3[k].classList.add("change");
        }
      }
    }
    //console.log("fgt");
  }
}

function getTime() {
  for (let i = 0; i < localStorage.length; i++) {
    let localData = localStorage.getItem("time").split(" ");
    //console.log(localData);
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
    localStorage.clear();
    autoChangeTime = setInterval(changeTime, 1000);
    // console.log("fr");
  });
}

class Answer {
  constructor(cells, data) {
    this.cell = cells;
    //console.log(this.cell);
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
          //console.log(this.answer);
        }
      }
    }
    if (!this.answer.includes(1)) {
      showCongratulations();
    }
  }
}
const rightAnswer = [];

function showAnswer() {
  const allAnswers = new Array(125);
  const correctAns = [];
  for (let i = 0; i < datesLevel1.length; i++) {
    if (pictureIndex === i && pictureIndex === 0) {
      correctAns.push(datesLevel1[i].answer.flat());
      //console.log(correctAns);
    }
    if (pictureIndex === i && pictureIndex === 1) {
      const emptyArray = new Array(25).fill("0");
      correctAns.push(emptyArray.concat(datesLevel1[i].answer.flat()));
      //console.log(correctAns);
    }
    if (pictureIndex === i && pictureIndex === 2) {
      const emptyArray = new Array(50).fill("0");
      correctAns.push(emptyArray.concat(datesLevel1[i].answer.flat()));
      //console.log(correctAns);
    }
    if (pictureIndex === i && pictureIndex === 3) {
      const emptyArray = new Array(75).fill("0");
      correctAns.push(emptyArray.concat(datesLevel1[i].answer.flat()));
      //console.log(correctAns);
    }
    if (pictureIndex === i && pictureIndex === 4) {
      const emptyArray = new Array(100).fill("0");
      correctAns.push(emptyArray.concat(datesLevel1[i].answer.flat()));
      //console.log(correctAns);
    }
  }
  const correctAnswer = correctAns.flat(2);
  for (let j = 0; j < allAnswers.length; j++) {
    for (let k = 0; k < correctAnswer.length; k++) {
      if (k === j) {
        allAnswers.splice(j, 1, correctAnswer[k]);
      }
    }
  }
  const answer1 = new Answer(cellField, allAnswers);
  answer1.addAnswer();
  //console.log(allAnswers);
  //console.log(correctAnswer);
}

function showAnswer2() {
  const allAnswers = new Array(1000);
  const correctAns = [];
  for (let i = 0; i < datesLevel1.length; i++) {
    if (pictureIndex === i && pictureIndex === 0) {
      correctAns.push(datesLevel2[i].answer.flat());
      //console.log(correctAns);
    }
    if (pictureIndex === i && pictureIndex === 1) {
      const emptyArray = new Array(100).fill("0");
      correctAns.push(emptyArray.concat(datesLevel2[i].answer.flat()));
      //console.log(correctAns);
    }
    if (pictureIndex === i && pictureIndex === 2) {
      const emptyArray = new Array(200).fill("0");
      correctAns.push(emptyArray.concat(datesLevel2[i].answer.flat()));
      //console.log(correctAns);
    }
    if (pictureIndex === i && pictureIndex === 3) {
      const emptyArray = new Array(300).fill("0");
      correctAns.push(emptyArray.concat(datesLevel2[i].answer.flat()));
      //console.log(correctAns);
    }
    if (pictureIndex === i && pictureIndex === 4) {
      const emptyArray = new Array(400).fill("0");
      correctAns.push(emptyArray.concat(datesLevel2[i].answer.flat()));
      //console.log(correctAns);
    }
  }
  const correctAnswer = correctAns.flat(2);
  for (let j = 0; j < allAnswers.length; j++) {
    for (let k = 0; k < correctAnswer.length; k++) {
      if (k === j) {
        allAnswers.splice(j, 1, correctAnswer[k]);
      }
    }
  }
  const answer1 = new Answer(cellsField2, allAnswers);
  answer1.addAnswer();
  //console.log(allAnswers);
  //console.log(correctAnswer);
}

function showAnswer3() {
  const allAnswers = new Array(1125);
  const correctAns = [];
  for (let i = 0; i < datesLevel1.length; i++) {
    if (pictureIndex === i && pictureIndex === 0) {
      correctAns.push(datesLevel3[i].answer.flat());
      //console.log(correctAns);
    }
    if (pictureIndex === i && pictureIndex === 1) {
      const emptyArray = new Array(225).fill("0");
      correctAns.push(emptyArray.concat(datesLevel3[i].answer.flat()));
      //console.log(correctAns);
    }
    if (pictureIndex === i && pictureIndex === 2) {
      const emptyArray = new Array(450).fill("0");
      correctAns.push(emptyArray.concat(datesLevel3[i].answer.flat()));
      //console.log(correctAns);
    }
    if (pictureIndex === i && pictureIndex === 3) {
      const emptyArray = new Array(675).fill("0");
      correctAns.push(emptyArray.concat(datesLevel3[i].answer.flat()));
      //console.log(correctAns);
    }
    if (pictureIndex === i && pictureIndex === 4) {
      const emptyArray = new Array(900).fill("0");
      correctAns.push(emptyArray.concat(datesLevel3[i].answer.flat()));
      // console.log(correctAns);
    }
  }
  const correctAnswer = correctAns.flat(2);
  for (let j = 0; j < allAnswers.length; j++) {
    for (let k = 0; k < correctAnswer.length; k++) {
      if (k === j) {
        allAnswers.splice(j, 1, correctAnswer[k]);
      }
    }
  }
  const answer1 = new Answer(cellsField3, allAnswers);
  answer1.addAnswer();
  //console.log(allAnswers);
  //console.log(correctAnswer);
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
  addSoundWinner();
  saveResults();
  backgroundModal.classList.add("active");
  modalWindow.classList.add("active");
}

function closeCongratulations() {
  buttonWindow.addEventListener("click", (e) => {
    e.preventDefault();
    clearField();
    audioWinner.muted = true;
    backgroundModal.classList.remove("active");
    modalWindow.classList.remove("active");
  });
}
closeCongratulations();

//const rightAnswer = [];
function allRightAnswer() {
  for (let i = 0; i < datesLevel1.length; i++) {
    rightAnswer.push(datesLevel1[i].answer.flat());
  }
}
allRightAnswer();

function allRightAnswer2() {
  for (let i = 0; i < datesLevel2.length; i++) {
    rightAnswer2.push(datesLevel2[i].answer.flat());
  }
}
allRightAnswer2();

function allRightAnswer3() {
  for (let i = 0; i < datesLevel3.length; i++) {
    rightAnswer3.push(datesLevel3[i].answer.flat());
  }
}
allRightAnswer3();

function showRightAnswer() {
  buttonSolution.addEventListener("click", (e) => {
    e.preventDefault();
    if (buttonLevel1.classList.contains("active")) {
      const allRightAnswers = rightAnswer.flat();
      for (let k = 0; k < allRightAnswers.length; k++) {
        for (let j = 0; j < cellField.length; j++) {
          if (k === j && allRightAnswers[k] === 1) {
            cellField[j].classList.add("active");
          }
          if (k === j && allRightAnswers[k] !== 1) {
            cellField[j].classList.remove("active");
            cellField[j].classList.remove("change");
            //console.log(rightAnswer);
          }
        }
      }
    }

    if (buttonLevel2.classList.contains("active")) {
      const allRightAnswers = rightAnswer2.flat();
      for (let k = 0; k < allRightAnswers.length; k++) {
        for (let j = 0; j < cellsField2.length; j++) {
          if (k === j && allRightAnswers[k] === 1) {
            cellsField2[j].classList.add("active");
            // console.log(allRightAnswers);
          }
          if (k === j && allRightAnswers[k] !== 1) {
            cellsField2[j].classList.remove("active");
            cellsField2[j].classList.remove("change");
            // console.log(rightAnswer2);
          }
        }
      }
    }
    if (buttonLevel3.classList.contains("active")) {
      const allRightAnswers = rightAnswer3.flat();
      for (let k = 0; k < allRightAnswers.length; k++) {
        for (let j = 0; j < cellsField3.length; j++) {
          if (k === j && allRightAnswers[k] === 1) {
            cellsField3[j].classList.add("active");
            // console.log(rightAnswer3);
          }
          if (k === j && allRightAnswers[k] !== 1) {
            cellsField3[j].classList.remove("active");
            cellsField3[j].classList.remove("change");
            //console.log(rightAnswer3);
          }
        }
      }
    }
  });
}

//click button => click picture => show nonogram

function choseNonogram() {
  images.forEach((imag, index) => {
    imag.addEventListener("click", (e) => {
      e.preventDefault();
      pictureIndex = index;
      //console.log("frt");
      for (let i = 0; i < nonogramLevel1.length; i++) {
        if (index === i && buttonLevel1.classList.contains("active")) {
          nonogramLevel1[i].classList.add("active");
          nonograms.classList.add("active");
          containerDiv.classList.add("hidden");
        }
      }
    });
  });
}
choseNonogram();

function choseNonogram2() {
  images.forEach((imag, index) => {
    imag.addEventListener("click", (e) => {
      e.preventDefault();
      pictureIndex2 = index;
      for (let i = 0; i < nonogramLevel2.length; i++) {
        if (index === i && buttonLevel2.classList.contains("active")) {
          nonogramLevel2[i].classList.add("active");
          nonograms.classList.add("active");
          containerDiv.classList.add("hidden");
        }
      }
    });
  });
}
choseNonogram2();

function choseNonogram3() {
  images.forEach((imag, index) => {
    imag.addEventListener("click", (e) => {
      e.preventDefault();
      pictureIndex3 = index;
      for (let i = 0; i < nonogramLevel3.length; i++) {
        if (index === i && buttonLevel3.classList.contains("active")) {
          nonogramLevel3[i].classList.add("active");
          nonograms.classList.add("active");
          containerDiv.classList.add("hidden");
        }
      }
    });
  });
}

//active button

function activeButtonsLevel2() {
  buttonLevel2.addEventListener("click", (e) => {
    e.preventDefault();
    if (
      buttonLevel1.classList.contains("active") ||
      buttonLevel3.classList.contains("active")
    ) {
      buttonLevel2.classList.add("active");
      buttonLevel1.classList.remove("active");
      buttonLevel3.classList.remove("active");
    }
    changePictures();
    //console.log("rrr");
    savePlay2();
    hiddenNonogram();
  });
}
activeButtonsLevel2();

function activeButtonsLevel3() {
  buttonLevel3.addEventListener("click", (e) => {
    e.preventDefault();
    if (
      buttonLevel1.classList.contains("active") ||
      buttonLevel2.classList.contains("active")
    ) {
      buttonLevel3.classList.add("active");
      buttonLevel2.classList.remove("active");
      buttonLevel1.classList.remove("active");
    }
    savePlay3();
    changePictures3();
    hiddenNonogram();
  });
}
activeButtonsLevel3();

function activeButtonsLevel1() {
  buttonLevel1.addEventListener("click", (e) => {
    e.preventDefault();
    if (
      buttonLevel3.classList.contains("active") ||
      buttonLevel2.classList.contains("active")
    ) {
      buttonLevel2.classList.remove("active");
      buttonLevel1.classList.add("active");
      buttonLevel3.classList.remove("active");
    }
    changePictures1();
    hiddenNonogram();
  });
}
activeButtonsLevel1();

//change images for different level;

function changePictures() {
  pictures.forEach((imag, index) => {
    datesLevel2.forEach((_, i) => {
      if (index === i) {
        imag.src = `${datesLevel2[i].img}`;
      }
    });
  });
}

function changePictures1() {
  pictures.forEach((imag, index) => {
    datesLevel1.forEach((_, i) => {
      if (index === i) {
        imag.src = `${datesLevel1[i].img}`;
      }
    });
  });
}

function changePictures3() {
  pictures.forEach((imag, index) => {
    datesLevel3.forEach((_, i) => {
      if (index === i) {
        imag.src = `${datesLevel3[i].img}`;
      }
    });
  });
}

//create random game
let randomNumberSecond;

function randomNum(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function getRandomImg() {
  let randomNumberFirst = randomNum(0, 2);
  randomNumberSecond = randomNum(0, 4);
  const levels = [datesLevel1, datesLevel2, datesLevel3];
  let randomLevel;
  levels.forEach((level, index) => {
    if (randomNumberFirst === index) {
      randomLevel = level;
    }
  });
  if (randomNumberFirst === 0) {
    buttonLevel1.classList.add("active");
    buttonLevel2.classList.remove("active");
    buttonLevel3.classList.remove("active");
  }
  if (randomNumberFirst === 1) {
    buttonLevel2.classList.add("active");
    buttonLevel1.classList.remove("active");
    buttonLevel3.classList.remove("active");
  }
  if (randomNumberFirst === 2) {
    buttonLevel3.classList.add("active");
    buttonLevel1.classList.remove("active");
    buttonLevel2.classList.remove("active");
  }
  activeNonogram1();
  activeNonogram2();
  activeNonogram3();
  showRightAnswer();
}

function hiddenNonogram() {
  nonograms.classList.remove("active");
  containerDiv.classList.remove("hidden");
  nonogramLevel1.forEach((item, index) => {
    item.classList.remove("active");
  });
  nonogramLevel2.forEach((item, index) => {
    item.classList.remove("active");
  });
  nonogramLevel3.forEach((item, index) => {
    item.classList.remove("active");
  });
  nonogramResults.classList.remove("active");
}

function activeNonogram1() {
  if (buttonLevel1.classList.contains("active")) {
    nonogramLevel1.forEach((nonogram, index) => {
      if (randomNumberSecond === index) {
        nonogram.classList.add("active");
        pictureIndex = randomNumberSecond;
      } else {
        nonogram.classList.remove("active");
      }
    });
    nonogramLevel2.forEach((nonogram, index) => {
      nonogram.classList.remove("active");
    });
    nonogramLevel3.forEach((nonogram, index) => {
      nonogram.classList.remove("active");
    });
    nonograms.classList.add("active");
    containerDiv.classList.add("hidden");
  }
}

function activeNonogram2() {
  if (buttonLevel2.classList.contains("active")) {
    nonogramLevel2.forEach((nonogram, index) => {
      if (randomNumberSecond === index) {
        nonogram.classList.add("active");
        pictureIndex = randomNumberSecond;
      } else {
        nonogram.classList.remove("active");
      }
    });
    nonogramLevel1.forEach((nonogram, index) => {
      nonogram.classList.remove("active");
    });
    nonogramLevel3.forEach((nonogram, index) => {
      nonogram.classList.remove("active");
    });
    nonograms.classList.add("active");
    containerDiv.classList.add("hidden");
  }
}

function activeNonogram3() {
  if (buttonLevel3.classList.contains("active")) {
    nonogramLevel3.forEach((nonogram, index) => {
      if (randomNumberSecond === index) {
        nonogram.classList.add("active");
        pictureIndex = randomNumberSecond;
      } else {
        nonogram.classList.remove("active");
      }
    });
    nonogramLevel2.forEach((nonogram, index) => {
      nonogram.classList.remove("active");
    });
    nonogramLevel1.forEach((nonogram, index) => {
      nonogram.classList.remove("active");
    });
    nonograms.classList.add("active");
    containerDiv.classList.add("hidden");
  }
}

function randomGame() {}
buttonRandom.addEventListener("click", (e) => {
  getRandomImg();
});
randomGame();

//show results

const resultsPictures = [];
const resultsTimes = [];
const resultsLevel = [];

function keepPictures() {
  if (!localStorage.getItem("pictures")) {
    savePicture();
    localStorage.setItem("pictures", `${resultsPictures}`);
  } else if (localStorage.getItem("pictures")) {
    const pictures = localStorage.getItem("pictures");
    const arrayPictures = pictures.split(",");
    const resultLength = arrayPictures.length;
    if (resultLength <= 4) {
      resultsPictures.push(pictures);
      savePicture();
      localStorage.setItem("pictures", `${resultsPictures}`);
    } else if (resultLength > 4) {
      arrayPictures.shift();
      const stringPictures = arrayPictures.join(",");
      resultsPictures.push(stringPictures);
      savePicture();
      localStorage.setItem("pictures", `${resultsPictures}`);
    }
  }
}

function keepTime() {
  if (!localStorage.getItem("time")) {
    saveTime();
    localStorage.setItem("time", `${resultsTimes}`);
  } else if (localStorage.getItem("time")) {
    const time = localStorage.getItem("time");
    const arrayTimes = time.split(",");
    const resultLength = arrayTimes.length;
    if (resultLength <= 4) {
      resultsTimes.push(time);
      saveTime();
      localStorage.setItem("time", `${resultsTimes}`);
    } else if (resultLength > 4) {
      arrayTimes.shift();
      const stringTimes = arrayTimes.join(",");
      resultsTimes.push(stringTimes);
      saveTime();
      localStorage.setItem("time", `${resultsTimes}`);
    }
  }
}

function keepLevel() {
  if (!localStorage.getItem("level")) {
    saveLevel();
    localStorage.setItem("level", `${resultsLevel}`);
  } else if (localStorage.getItem("level")) {
    const level = localStorage.getItem("level");
    const arrayLevel = level.split(",");
    const resultLength = arrayLevel.length;
    if (resultLength <= 4) {
      resultsLevel.push(level);
      saveLevel();
      localStorage.setItem("level", `${resultsLevel}`);
    } else if (resultLength > 4) {
      arrayLevel.shift();
      const stringLevel = arrayLevel.join(",");
      resultsLevel.push(stringLevel);
      saveLevel();
      localStorage.setItem("level", `${resultsLevel}`);
    }
  }
}

function saveResults() {
  keepPictures();
  keepTime();
  keepLevel();
}

function saveTime() {
  if (String(minute).length === 1 && String(second).length === 1) {
    resultsTimes.push(`0${minute}0${second}`);
  }
  if (String(minute).length === 1 && String(second).length === 2) {
    //console.log(minute);
    resultsTimes.push(`0${minute}${second}`);
  }
  if (String(second).length === 1 && String(minute).length === 2) {
    //console.log(second);
    resultsTimes.push(`${minute}0${second}`);
  }

  if (String(minute).length === 2 && String(second).length === 2) {
    resultsTimes.push(`${minute}${second}`);
  }
}

function saveLevel() {
  if (buttonLevel1.classList.contains("active")) {
    resultsLevel.push("1");
  }
  if (buttonLevel2.classList.contains("active")) {
    resultsLevel.push("2");
  }
  if (buttonLevel3.classList.contains("active")) {
    resultsLevel.push("3");
  }
}

function savePicture() {
  if (pictureIndex === 0) {
    resultsPictures.push("Picture 1");
  }
  if (pictureIndex === 1) {
    resultsPictures.push("Picture 2");
  }
  if (pictureIndex === 2) {
    resultsPictures.push("Picture 3");
  }
  if (pictureIndex === 3) {
    resultsPictures.push("Picture 4");
  }
  if (pictureIndex === 4) {
    resultsPictures.push("Picture 5");
  }
}

function getAllResults() {
  const resultsPlayerPicture = [];
  resultsPlayerPicture.push(localStorage.getItem("pictures"));
  let arrayResultPicture;
  if (resultsPlayerPicture[0] !== null) {
    arrayResultPicture = resultsPlayerPicture[0].split(",");
  }

  const resultsPlayerTime = [];
  let arrayResultTime;
  let arraySort;
  resultsPlayerTime.push(localStorage.getItem("time"));
  if (resultsPlayerTime[0] !== null) {
    arrayResultTime = resultsPlayerTime[0].split(",");
  }

  const resultsPlayerLevel = [];
  let arrayResultLevel;
  resultsPlayerLevel.push(localStorage.getItem("level"));
  if (resultsPlayerLevel[0] !== null) {
    arrayResultLevel = resultsPlayerLevel[0].split(",");
  }

  if (
    arrayResultPicture !== undefined &&
    arrayResultTime !== undefined &&
    arrayResultLevel !== undefined
  ) {
    arrayResultPicture.forEach((picture, index) => {
      arrayResultTime.forEach((time, i) => {
        arrayResultLevel.forEach((level, j) => {
          if (i === index && j === index) {
            allResults.push([time, level, picture]);
          }
        });
      });
    });
  }

  if (arrayResultTime !== undefined) {
    arraySort = arrayResultTime.sort((a, b) => a - b);
    for (let i = 0; i < allResults.length; i++) {
      arraySort.forEach((item, index) => {
        if (allResults[i][0] === item && i !== index) {
          let temp = allResults[i];
          allResults[i] = allResults[index];
          allResults[index] = temp;
        }
      });
    }
  }
  //console.log(allResults);
}
getAllResults();

function getLevel() {
  levelGame.forEach((level, index) => {
    allResults.forEach((_, i) => {
      if (i === index) {
        level.textContent = `${allResults[i][1]}`;
      }
    });
  });
}
getLevel();

function getPicture() {
  pictureGame.forEach((picture, index) => {
    allResults.forEach((_, i) => {
      if (i === index) {
        picture.textContent = `${allResults[i][2]}`;
      }
    });
  });
}
getPicture();

function getResultTime() {
  timeGame.forEach((time, index) => {
    allResults.forEach((_, i) => {
      if (i === index) {
        let arrayTime = allResults[i][0].split("");
        const minute = arrayTime[0].concat(arrayTime[1]);
        const second = arrayTime[2].concat(arrayTime[3]);
        //console.log(arrayTime);
        //console.log(minute);
        time.textContent = `${minute}:${second}`;
      }
    });
  });
}
getResultTime();

function showResults() {
  buttonShowResults.addEventListener("click", (e) => {
    nonogramResults.classList.add("active");
  });
}
showResults();

//change themes
function changeTheme() {
  buttonChangeTheme.addEventListener("click", (e) => {
    buttonChangeTheme.classList.toggle("change");
    modalWindow.classList.toggle("change");
    buttonWindow.classList.toggle("change");
    backgroundModal.classList.toggle("change");
    wrapper.classList.toggle("change");
    resetButton.classList.toggle("change");
    buttonSave.classList.toggle("change");
    buttonContinue.classList.toggle("change");
    buttonSolution.classList.toggle("change");
    buttonLevel1.classList.toggle("change");
    buttonLevel2.classList.toggle("change");
    buttonLevel3.classList.toggle("change");
    buttonRandom.classList.toggle("change");
    buttonShowResults.classList.toggle("change");
    sound.src = "./asserts/img/icons50.png";
    nonogramSoundOff.classList.toggle("change");
    nonogramTopContainer.forEach((container, index) => {
      container.classList.toggle("change");
    });
    nonogramEmpty.forEach((item, index) => {
      item.classList.toggle("change");
    });
    nonogramDatesTop.forEach((dates, index) => {
      dates.classList.toggle("change");
    });
    nonogramCellTop.forEach((cell, index) => {
      cell.classList.toggle("change");
    });
    nonogramDatesLeft.forEach((cell, index) => {
      cell.classList.toggle("change");
    });
    nonogramCellLeft.forEach((cell, index) => {
      cell.classList.toggle("change");
    });
    cellsField.forEach((cell, index) => {
      cell.classList.toggle("change");
    });
    nonogramDatesField.forEach((cell, index) => {
      cell.classList.toggle("current");
    });
    nonogramLine.forEach((line, index) => {
      line.classList.toggle("current");
    });
    nonogram.forEach((item, index) => {
      item.classList.toggle("change");
    });
    nonogramLeftContainer.forEach((item, index) => {
      item.classList.toggle("white");
    });

    cellsField3.forEach((item, index) => {
      item.classList.toggle("white");
    });
    nonogramDatesField.forEach((cell, index) => {
      cell.classList.toggle("active2");
    });
    nonogramLeft.forEach((cell, index) => {
      cell.classList.toggle("change");
      if (cell.getAttribute("style")) {
        cell.style.backgroundColor = "rgb(120, 16, 16)";
      }
    });
    nonogramTop.forEach((cell, index) => {
      cell.classList.toggle("change");
      if (cell.getAttribute("style")) {
        cell.style.backgroundColor = "rgb(120, 16, 16)";
      }
    });

    if (!buttonChangeTheme.classList.contains("change")) {
      sound.src = "./asserts/img/icons8.png";
      nonogramLeft.forEach((cell, index) => {
        cell.classList.remove("change");
        if (cell.getAttribute("style")) {
          cell.style.backgroundColor = "rgb(194, 188, 188)";
        }
      });
      nonogramTop.forEach((cell, index) => {
        cell.classList.remove("change");
        if (cell.getAttribute("style")) {
          cell.style.backgroundColor = "rgb(194, 188, 188)";
        }
      });
    }
    //wrapper.classList.toggle("active");
  });
}
changeTheme();

export {
  paintCellField,
  clickRightMouse,
  resetGame,
  clickNonogramSound,
  savePlay,
  continueGame,
  closeCongratulations,
  showRightAnswer,
  choseNonogram3,
};
