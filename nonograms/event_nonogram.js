const cellsField = document.querySelector(".nonogram__field");
const cellField = document.querySelectorAll(".nonogram__field-dates");
const resetButton = document.querySelector(".nonogram__button-reset");
const nonogramMinute = document.querySelector(".nonogram__minutes");
const nonogramSecond = document.querySelector(".nonogram__seconds");
const nonogramSound = document.querySelector(".nonogram__sound-container");
const buttonSave = document.querySelector(".nonogram__button-save");
let autoChangeTime;
const time = [];
const audio = new Audio();
const arrayLocal = [];

function paintCellField() {
  cellsField.addEventListener("click", (e) => {
    e.preventDefault;
    e.target.classList.toggle("active");
    if (time.length === 0) {
      time.push("start");
      autoChangeTime = setInterval(changeTime, 1000);
    }
    saveLastPlay();
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
      saveLastPlay();
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

//add reset game
function resetGame() {
  resetButton.addEventListener("click", (e) => {
    e.preventDefault();
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

function saveLastPlay() {
  for (let i = 0; i < cellField.length; i++) {
    if (cellField[i].classList.contains("active")) {
      arrayLocal.push(`${i} : active`);
    }
    if (cellField[i].classList.contains("change")) {
      arrayLocal.push(`${i} : change`);
    }
    if (!cellField[i].classList.contains("active")) {
      arrayLocal.splice(i, 1);
    }
    if (!cellField[i].classList.contains("change")) {
      arrayLocal.splice(i, 1);
    }
  }

  /*for (let j = 0; j < arrayLocal.length; j++) {
    let partArray = arrayLocal[j].split(" ");
    localStorage.setItem(`${partArray[0]}`, `${partArray[2]}`);
  }*/
  console.log(arrayLocal);
}

function savePlay() {
  buttonSave.addEventListener("click", (e) => {
    e.preventDefault();
    for (let j = 0; j < arrayLocal.length; j++) {
      let partArray = arrayLocal[j].split(" ");
      localStorage.setItem(`${partArray[0]}`, `${partArray[2]}`);
    }
  });
}
savePlay();
//correct answer
const correctAnswer1 = [
  0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1,
];

export { paintCellField, clickRightMouse, resetGame, clickNonogramSound };
