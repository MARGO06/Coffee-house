import { datesLevel1, datesLevel2, datesLevel3 } from "./json.js";

const wrapper = document.createElement("div");
wrapper.className = "wrapper";
document.body.append(wrapper);

//add header
const header = document.createElement("header");
header.className = "header";
wrapper.append(header);

const nameGames = document.createElement("p");
nameGames.className = "header__name-game";
nameGames.textContent = "Nonogram games";
header.append(nameGames);

const containerButton = document.createElement("div");
containerButton.className = "header__container";
header.append(containerButton);

const level1 = document.createElement("button");
level1.className = "btn header__level1 active";
level1.textContent = "Level 1";
containerButton.append(level1);

const level2 = document.createElement("button");
level2.className = "btn header__level2";
level2.textContent = "Level 2";
containerButton.append(level2);

const level3 = document.createElement("button");
level3.className = "btn header__level3";
level3.textContent = "Level 3";
containerButton.append(level3);

const random = document.createElement("button");
random.className = "btn header__random";
random.textContent = "Random game";
containerButton.append(random);

//images

const containerDiv = document.createElement("main");
containerDiv.className = "pictures";
wrapper.append(containerDiv);

function addPictures() {
  for (let i = 0; i < datesLevel1.length; i++) {
    const imageDiv = document.createElement("div");
    imageDiv.className = "pictures__container";
    containerDiv.append(imageDiv);
    const namePicture = document.createElement("p");
    namePicture.className = "pictures__name";
    namePicture.textContent = `${datesLevel1[i].name}`;
    imageDiv.append(namePicture);
    const imagePicture = document.createElement("img");
    imagePicture.className = "pictures__img";
    imagePicture.src = `${datesLevel1[i].img}`;
    imagePicture.alt = "nonogram";
    imageDiv.append(imagePicture);
  }
}
addPictures();

const nonograms = document.createElement("div");
nonograms.className = "nonograms";
wrapper.append(nonograms);

//create first nonogramm;
const nonogram = document.createElement("div");
nonogram.className = "nonogram";
nonograms.append(nonogram);

const topDates = document.createElement("div");
topDates.className = "nonogram__top-dates";
nonogram.append(topDates);

const topDatesEmpty = document.createElement("div");
topDatesEmpty.className = "nonogram__dates-empty";
topDates.append(topDatesEmpty);

const topDatesFull = document.createElement("div");
topDatesFull.className = "nonogram__dates-full";
topDates.append(topDatesFull);

function addColumns() {
  if (datesLevel1) {
    topDatesFull.style.gridTemplateColumns = "repeat(5, 1fr)";
  }
  if (datesLevel2) {
    topDatesFull.style.gridTemplateColumns = "repeat(10, 1fr)";
  }
  if (datesLevel3) {
    topDatesFull.style.gridTemplateColumns = "repeat(15, 1fr)";
  }
}
addColumns();

const bottomDates = document.createElement("div");
bottomDates.className = "nonogram__bottom-dates";
nonogram.append(bottomDates);

const buttonDatesLeft = document.createElement("div");
buttonDatesLeft.className = "nonogram__dates-left";
bottomDates.append(buttonDatesLeft);

function addRows() {
  if (datesLevel1) {
    buttonDatesLeft.style.gridTemplateRows = "repeat(5, 1fr)";
  }
  if (datesLevel2) {
    buttonDatesLeft.style.gridTemplateRows = "repeat(10, 1fr)";
  }
  if (datesLevel3.top) {
    topDatesFull.style.gridTemplateColumns = "repeat(15, 1fr)";
  }
}
addRows();

const field = document.createElement("div");
field.className = "nonogram__field";
bottomDates.append(field);

function addFieldColomns() {
  if (datesLevel1) {
    field.style.gridTemplateColumns = "repeat(5, 1fr)";
  }
  if (datesLevel2) {
    field.style.gridTemplateColumns = "repeat(10, 1fr)";
  }
  if (datesLevel3) {
    field.style.gridTemplateColumns = "repeat(15, 1fr)";
    field.style.gridTemplateRows = "repeat(15, 1fr)";
  }
}
addFieldColomns();

const buttonContain = document.createElement("div");
buttonContain.className = "nonogram__button-contain";
nonograms.append(buttonContain);

const buttonReset = document.createElement("button");
buttonReset.className = "nonogram__button-reset";
buttonReset.textContent = "Reset game";
buttonContain.append(buttonReset);

const nonogramTime = document.createElement("div");
nonogramTime.className = "nonogram__time";
nonogram.before(nonogramTime);

const nonogramMinute = document.createElement("span");
nonogramMinute.className = "nonogram__minutes";
nonogramMinute.textContent = "00";
nonogramTime.append(nonogramMinute);

const nonogramColon = document.createElement("span");
nonogramColon.className = "nonogram__colon";
nonogramColon.textContent = ":";
nonogramTime.append(nonogramColon);

const nonogramSeconds = document.createElement("span");
nonogramSeconds.className = "nonogram__seconds";
nonogramSeconds.textContent = "00";
nonogramTime.append(nonogramSeconds);

//add sound
const nonogramSoundContainer = document.createElement("div");
nonogramSoundContainer.className = "nonogram__sound-container";
header.append(nonogramSoundContainer);

const nonogramSound = document.createElement("img");
nonogramSound.className = "nonogram__sound";
nonogramSound.src = "./asserts/img/icons8.png";
nonogramSound.alt = "sound";
nonogramSoundContainer.append(nonogramSound);

const nonogramSoundOff = document.createElement("div");
nonogramSoundOff.className = "nonogram__sound-off";
nonogramSoundContainer.append(nonogramSoundOff);

const buttonSave = document.createElement("button");
buttonSave.className = "nonogram__button-save";
buttonSave.textContent = "Save game";
buttonContain.append(buttonSave);

const buttonContinue = document.createElement("button");
buttonContinue.className = "nonogram__button-continue";
buttonContinue.textContent = "Continue game";
buttonContain.append(buttonContinue);

const buttonSolution = document.createElement("button");
buttonSolution.className = "nonogram__button-solution";
buttonSolution.textContent = "Solution";
buttonContain.append(buttonSolution);

//create modal window

const modal = document.createElement("div");
modal.className = "modal hidden";
wrapper.append(modal);

const modalText = document.createElement("p");
modalText.className = "modal__text";
modalText.textContent = "";
modal.append(modalText);

const modalResult = document.createElement("p");
modalResult.className = "modal__result";
modalResult.textContent = "";
modal.append(modalResult);

const modalButton = document.createElement("button");
modalButton.className = "modal__button";
modalButton.textContent = "OK";
modal.append(modalButton);

const modalBackground = document.createElement("div");
modalBackground.className = "modal__background hidden";
wrapper.append(modalBackground);
//add another page
/*const whole = document.createElement("div");
whole.classList = "div-container";
wrapper.append(whole);

const div1 = document.createElement("div");
div1.classList = "div-click";
div1.textContent = "0";
whole.append(div1);

const div2 = document.createElement("div");
div2.classList = "div-click";
div2.textContent = "1";
whole.append(div2);

const div3 = document.createElement("div");
div3.classList = "div-click";
div3.textContent = "2";
whole.append(div3);

const div4 = document.createElement("div");
div4.classList = "div-click";
div4.textContent = "3";
whole.append(div4);

const div5 = document.createElement("div");
div5.classList = "div-click";
div5.textContent = "4";
whole.append(div5);*/

//create dates

class LeftDates {
  constructor(dates) {
    this.array = dates;
    for (let i = 0; i < dates.length; i++) {
      this.array[i] = dates[i];
    }
  }

  fillLeftPart() {
    for (let i = 0; i < this.array.length; i++) {
      const containerLeftDates = document.createElement("div");
      containerLeftDates.className = "cell-left nonogram__left-container";
      containerLeftDates.style.gridTemplateColumns = `repeat(${this.array[i].length},1fr)`;
      buttonDatesLeft.append(containerLeftDates);
      for (let j = 0; j < this.array[i].length; j++) {
        const leftDate = document.createElement("p");
        leftDate.className = "nonogram__left";
        leftDate.textContent = `${this.array[i][j]}`;
        if (this.array[i][j] !== "") {
          leftDate.style.backgroundColor = "rgb(194, 188, 188)";
        }
        containerLeftDates.append(leftDate);
      }
      console.log(this.array[i]);
    }
  }
}

class TopDates {
  constructor(dates) {
    this.array = dates;
    for (let i = 0; i < dates.length; i++) {
      this.array[i] = dates[i];
    }
  }

  fillTopPart() {
    for (let i = 0; i < this.array.length; i++) {
      const containerTopDates = document.createElement("div");
      containerTopDates.className = "cell-top nonogram__top-container";
      containerTopDates.style.gridTemplateRows = `repeat(${this.array[i].length},1fr)`;
      if (this.array[i].length === 1) {
        topDates.style.height = "92px";
      }
      console.log(this.array[i].length);
      topDatesFull.append(containerTopDates);
      for (let j = 0; j < this.array[i].length; j++) {
        const topDate = document.createElement("p");
        topDate.className = "nonogram__top";
        topDate.textContent = `${this.array[i][j]}`;
        if (this.array[i][j] !== "") {
          topDate.style.backgroundColor = "rgb(194, 188, 188)";
        }
        containerTopDates.append(topDate);
      }
      console.log(this.array[i]);
    }
  }
}

//create field

//const fieldArray = new Array(25).fill(" ");
//const fieldArray2 = new Array(100).fill("");
const fieldArray3 = new Array(225).fill(" ");

class FieldDates {
  constructor(dates) {
    this.array = dates;
    for (let i = 0; i < dates.length; i++) {
      this.array[i] = dates[i];
    }
  }

  fillField() {
    for (let i = 0; i < this.array.length; i++) {
      const fieldDates = document.createElement("div");
      fieldDates.className = "nonogram__field-dates";
      field.append(fieldDates);
      const wrongDates = document.createElement("div");
      wrongDates.className = "line nonogram__incorrect";
      fieldDates.append(wrongDates);
      const wrongDates2 = document.createElement("div");
      wrongDates2.className = "line nonogram__incorrect2";
      fieldDates.append(wrongDates2);
    }
  }
}

//const nonogramField = new FieldDates(fieldArray);
//const datesField = nonogramField.fillField();
//const nonogramField = new FieldDates(fieldArray2);
//const datesField = nonogramField.fillField();
const nonogramField = new FieldDates(fieldArray3);
const datesField = nonogramField.fillField();

export { wrapper, LeftDates, datesField, TopDates, FieldDates };
