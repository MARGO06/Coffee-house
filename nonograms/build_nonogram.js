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
let imageDiv;

function addPictures() {
  for (let i = 0; i < datesLevel1.length; i++) {
    imageDiv = document.createElement("div");
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
//nonogram containers
const nonograms = document.createElement("div");
nonograms.className = "nonograms";
wrapper.append(nonograms);

const nonograms1 = document.createElement("div");
nonograms1.className = "nonograms__container1";
nonograms.append(nonograms1);

const nonograms2 = document.createElement("div");
nonograms2.className = "nonograms__container2";
nonograms.append(nonograms2);

const nonograms3 = document.createElement("div");
nonograms3.className = "nonograms__container3";
nonograms.append(nonograms3);

//create button reset
const buttonContain = document.createElement("div");
buttonContain.className = "nonogram__button-contain";
nonograms.append(buttonContain);

const buttonReset = document.createElement("button");
buttonReset.className = "nonogram__button-reset";
buttonReset.textContent = "Reset game";
buttonContain.append(buttonReset);

//create time
const nonogramTime = document.createElement("div");
nonogramTime.className = "nonogram__time";
nonograms1.before(nonogramTime);

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

// create save, continue, solution buttons
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

//create level1
class Level1 {
  constructor(dates, left, field) {
    this.array = dates;
    for (let i = 0; i < dates.length; i++) {
      this.array[i] = dates[i];
    }
    this.array2 = left;
    for (let i = 0; i < left.length; i++) {
      this.array2[i] = left[i];
    }
    this.array3 = field;
    for (let i = 0; i < field.length; i++) {
      this.array3[i] = field[i];
    }
  }

  fillLevel1() {
    const nonogram = document.createElement("div");
    nonogram.className = "nonogram nonogram__level1";
    nonograms1.append(nonogram);

    const topDates = document.createElement("div");
    topDates.className = "nonogram__top-dates";
    nonogram.append(topDates);

    const topDatesEmpty = document.createElement("div");
    topDatesEmpty.className = "nonogram__dates-empty";
    topDates.append(topDatesEmpty);

    const topDatesFull = document.createElement("div");
    topDatesFull.className = "nonogram__dates-full";
    topDates.append(topDatesFull);

    const bottomDates = document.createElement("div");
    bottomDates.className = "nonogram__bottom-dates";
    nonogram.append(bottomDates);

    const buttonDatesLeft = document.createElement("div");
    buttonDatesLeft.className = "nonogram__dates-left";
    bottomDates.append(buttonDatesLeft);

    const field = document.createElement("div");
    field.className = "nonogram__field field1";
    bottomDates.append(field);
    for (let i = 0; i < this.array.length; i++) {
      const containerTopDates = document.createElement("div");
      containerTopDates.className = "cell-top nonogram__top-container1";
      containerTopDates.style.gridTemplateRows = `repeat(${this.array[i].length},1fr)`;
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
    for (let i = 0; i < this.array2.length; i++) {
      const containerLeftDates = document.createElement("div");
      containerLeftDates.className = "cell-left nonogram__left-container";
      containerLeftDates.style.gridTemplateColumns = `repeat(${this.array2[i].length},1fr)`;
      buttonDatesLeft.append(containerLeftDates);
      for (let j = 0; j < this.array2[i].length; j++) {
        const leftDate = document.createElement("p");
        leftDate.className = "nonogram__left";
        leftDate.textContent = `${this.array2[i][j]}`;
        if (this.array2[i][j] !== "") {
          leftDate.style.backgroundColor = "rgb(194, 188, 188)";
        }
        containerLeftDates.append(leftDate);
      }
      console.log(this.array2[i]);
    }
    for (let i = 0; i < this.array3.length; i++) {
      const fieldDates = document.createElement("div");
      fieldDates.className = "nonogram__field-dates field__1";
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

const fieldArray1 = new Array(25).fill("");

for (let i = 0; i < datesLevel1.length; i++) {
  const nonogramTop = new Level1(
    datesLevel1[i].top,
    datesLevel1[i].left,
    fieldArray1
  );
  nonogramTop.fillLevel1();
}

//create level 2
class Level2 {
  constructor(dates, left, field) {
    this.array = dates;
    for (let i = 0; i < dates.length; i++) {
      this.array[i] = dates[i];
    }
    this.array2 = left;
    for (let i = 0; i < left.length; i++) {
      this.array2[i] = left[i];
    }
    this.array3 = field;
    for (let i = 0; i < field.length; i++) {
      this.array3[i] = field[i];
    }
  }

  fillLevel2() {
    const nonogram2 = document.createElement("div");
    nonogram2.className = "nonogram nonogram__level2";
    nonograms2.append(nonogram2);
    const topDates2 = document.createElement("div");
    topDates2.className = "nonogram__top-dates level2";
    nonogram2.append(topDates2);
    const topDatesEmpty2 = document.createElement("div");
    topDatesEmpty2.className = "nonogram__dates-empty level2";
    topDates2.append(topDatesEmpty2);
    const topDatesFull2 = document.createElement("div");
    topDatesFull2.className = "nonogram__dates-full f-level2";
    topDates2.append(topDatesFull2);
    const bottomDates2 = document.createElement("div");
    bottomDates2.className = "nonogram__bottom-dates level2";
    nonogram2.append(bottomDates2);
    const buttonDatesLeft2 = document.createElement("div");
    buttonDatesLeft2.className = "nonogram__dates-left level2";
    bottomDates2.append(buttonDatesLeft2);
    const field2 = document.createElement("div");
    field2.className = "nonogram__field f-level2";
    bottomDates2.append(field2);

    for (let i = 0; i < this.array.length; i++) {
      const containerTopDates2 = document.createElement("div");
      containerTopDates2.className = "cell-top nonogram__top-container level2";
      containerTopDates2.style.gridTemplateRows = `repeat(${this.array[i].length},1fr)`;
      console.log(this.array[i].length);
      topDatesFull2.append(containerTopDates2);
      for (let j = 0; j < this.array[i].length; j++) {
        const topDate2 = document.createElement("p");
        topDate2.className = "nonogram__top level2";
        topDate2.textContent = `${this.array[i][j]}`;
        if (this.array[i][j] !== "") {
          topDate2.style.backgroundColor = "rgb(194, 188, 188)";
        }
        containerTopDates2.append(topDate2);
      }
    }

    for (let i = 0; i < this.array2.length; i++) {
      const containerLeftDates2 = document.createElement("div");
      containerLeftDates2.className =
        "cell-left nonogram__left-container level2";
      containerLeftDates2.style.gridTemplateColumns = `repeat(${this.array2[i].length},1fr)`;
      buttonDatesLeft2.append(containerLeftDates2);
      for (let j = 0; j < this.array2[i].length; j++) {
        const leftDate2 = document.createElement("p");
        leftDate2.className = "nonogram__left";
        leftDate2.textContent = `${this.array2[i][j]}`;
        if (this.array2[i][j] !== "") {
          leftDate2.style.backgroundColor = "rgb(194, 188, 188)";
        }
        containerLeftDates2.append(leftDate2);
      }
      console.log(this.array2[i]);

      for (let i = 0; i < this.array.length; i++) {
        const fieldDates2 = document.createElement("div");
        fieldDates2.className = "nonogram__field-dates field-level2";
        field2.append(fieldDates2);
        const wrongDatesL2 = document.createElement("div");
        wrongDatesL2.className = "line nonogram__incorrect-level2";
        fieldDates2.append(wrongDatesL2);
        const wrongDatesL22 = document.createElement("div");
        wrongDatesL22.className = "line nonogram__incorrect2-level2";
        fieldDates2.append(wrongDatesL22);
      }

      console.log(this.array.length);
    }
  }
}

const fieldArray2 = new Array(100).fill("");

for (let i = 0; i < datesLevel2.length; i++) {
  const nonogramTop = new Level2(
    datesLevel2[i].top,
    datesLevel2[i].left,
    fieldArray2
  );
  nonogramTop.fillLevel2();
}

class Level3 {
  constructor(dates, left, field) {
    this.array = dates;
    for (let i = 0; i < dates.length; i++) {
      this.array[i] = dates[i];
    }
    this.array2 = left;
    for (let i = 0; i < left.length; i++) {
      this.array2[i] = left[i];
    }
    this.array3 = field;
    for (let i = 0; i < field.length; i++) {
      this.array3[i] = field[i];
    }
  }

  fillLevel3() {
    const nonogram3 = document.createElement("div");
    nonogram3.className = "nonogram nonogram__level3";
    nonograms3.append(nonogram3);

    const topDates3 = document.createElement("div");
    topDates3.className = "nonogram__top-dates level3";
    nonogram3.append(topDates3);

    const topDatesEmpty3 = document.createElement("div");
    topDatesEmpty3.className = "nonogram__dates-empty level3";
    topDates3.append(topDatesEmpty3);

    const topDatesFull3 = document.createElement("div");
    topDatesFull3.className = "nonogram__dates-full f-level3";
    topDates3.append(topDatesFull3);

    const bottomDates3 = document.createElement("div");
    bottomDates3.className = "nonogram__bottom-dates level3";
    nonogram3.append(bottomDates3);

    const buttonDatesLeft3 = document.createElement("div");
    buttonDatesLeft3.className = "nonogram__dates-left level2";
    bottomDates3.append(buttonDatesLeft3);

    const field3 = document.createElement("div");
    field3.className = "nonogram__field f-level3";
    bottomDates3.append(field3);
    for (let i = 0; i < this.array.length; i++) {
      const containerTopDates3 = document.createElement("div");
      containerTopDates3.className = "cell-top nonogram__top-container level2";
      containerTopDates3.style.gridTemplateRows = `repeat(${this.array[i].length},1fr)`;
      topDatesFull3.append(containerTopDates3);
      for (let j = 0; j < this.array[i].length; j++) {
        const topDate3 = document.createElement("p");
        topDate3.className = "nonogram__top level2";
        topDate3.textContent = `${this.array[i][j]}`;
        if (this.array[i][j] !== "") {
          topDate3.style.backgroundColor = "rgb(194, 188, 188)";
        }
        containerTopDates3.append(topDate3);
      }
      console.log(this.array[i]);
    }
    for (let i = 0; i < this.array3.length; i++) {
      const containerLeftDates3 = document.createElement("div");
      containerLeftDates3.className =
        "cell-left nonogram__left-container level3";
      containerLeftDates3.style.gridTemplateColumns = `repeat(${this.array3[i].length},1fr)`;
      buttonDatesLeft3.append(containerLeftDates3);
      for (let j = 0; j < this.array3[i].length; j++) {
        const leftDate3 = document.createElement("p");
        leftDate3.className = "nonogram__left";
        leftDate3.textContent = `${this.array3[i][j]}`;
        if (this.array3[i][j] !== "") {
          leftDate3.style.backgroundColor = "rgb(194, 188, 188)";
        }
        containerLeftDates3.append(leftDate3);
      }
      console.log(this.array3[i]);
    }
    for (let i = 0; i < this.array.length; i++) {
      const fieldDates3 = document.createElement("div");
      fieldDates3.className = "nonogram__field-dates field-level3";
      field3.append(fieldDates3);
      const wrongDatesL3 = document.createElement("div");
      wrongDatesL3.className = "line nonogram__incorrect-level3";
      fieldDates3.append(wrongDatesL3);
      const wrongDatesL32 = document.createElement("div");
      wrongDatesL32.className = "line nonogram__incorrect2-level3";
      fieldDates3.append(wrongDatesL32);
    }
  }
}

const fieldArray3 = new Array(100).fill("");

for (let i = 0; i < datesLevel3.length; i++) {
  const nonogramTop = new Level3(
    datesLevel3[i].top,
    datesLevel3[i].left,
    fieldArray3
  );
  nonogramTop.fillLevel3();
}

export { wrapper, Level1, Level2, Level3 };
