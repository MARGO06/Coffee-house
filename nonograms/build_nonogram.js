const wrapper = document.createElement("div");
wrapper.classList = "wrapper";
document.body.append(wrapper);

const nonograms = document.createElement("div");
nonograms.classList = "nonograms";
wrapper.append(nonograms);

//create first nonogramm;
const nonogram = document.createElement("div");
nonogram.classList = "nonogram";
nonograms.append(nonogram);

const topDates = document.createElement("div");
topDates.classList = "nonogram__top-dates";
nonogram.append(topDates);

const topDatesEmpty = document.createElement("div");
topDatesEmpty.classList = "nonogram__dates-empty";
topDates.append(topDatesEmpty);

const topDatesFull = document.createElement("div");
topDatesFull.classList = "nonogram__dates-full";
topDates.append(topDatesFull);

const bottomDates = document.createElement("div");
bottomDates.classList = "nonogram__bottom-dates";
nonogram.append(bottomDates);

const buttonDatesLeft = document.createElement("div");
buttonDatesLeft.classList = "nonogram__dates-left";
bottomDates.append(buttonDatesLeft);

const field = document.createElement("div");
field.classList = "nonogram__field";
bottomDates.append(field);

const buttonReset = document.createElement("button");
buttonReset.classList = "nonogram__button-reset";
buttonReset.textContent = "Reset game";
nonograms.append(buttonReset);

const nonogramTime = document.createElement("div");
nonogramTime.classList = "nonogram__time";
nonogram.before(nonogramTime);

const nonogramMinute = document.createElement("span");
nonogramMinute.classList = "nonogram__minutes";
nonogramMinute.textContent = "00";
nonogramTime.append(nonogramMinute);

const nonogramColon = document.createElement("span");
nonogramColon.classList = "nonogram__colon";
nonogramColon.textContent = ":";
nonogramTime.append(nonogramColon);

const nonogramSeconds = document.createElement("span");
nonogramSeconds.classList = "nonogram__seconds";
nonogramSeconds.textContent = "00";
nonogramTime.append(nonogramSeconds);

//create dates
const nonogram1 = [
  ["", "4"],
  ["2", "1"],
  ["", "4"],
  ["1", "1"],
  ["1", "1"],
];

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
      buttonDatesLeft.append(containerLeftDates);
      for (let j = 0; j < this.array[i].length; j++) {
        const leftDate = document.createElement("p");
        leftDate.className = "nonogram__left";
        leftDate.textContent = `${this.array[i][j]}`;
        containerLeftDates.append(leftDate);
      }
      console.log(this.array[i]);
    }
  }
}

const nonogramLeft1 = new LeftDates(nonogram1);
const leftDates = nonogramLeft1.fillLeftPart();

const nonogramT1 = [
  ["", "1"],
  ["3", "1"],
  ["1", "2"],
  ["1", "1"],
  ["", "5"],
];

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
      topDatesFull.append(containerTopDates);
      for (let j = 0; j < this.array[i].length; j++) {
        const topDate = document.createElement("p");
        topDate.className = "nonogram__top";
        topDate.textContent = `${this.array[i][j]}`;
        containerTopDates.append(topDate);
      }
      console.log(this.array[i]);
    }
  }
}

const nonogramTop1 = new TopDates(nonogramT1);
const topDate = nonogramTop1.fillTopPart();

//create field

const fieldArray = new Array(25).fill(" ");

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
      wrongDates.classList = "line nonogram__incorrect";
      fieldDates.append(wrongDates);
      const wrongDates2 = document.createElement("div");
      wrongDates2.classList = "line nonogram__incorrect2";
      fieldDates.append(wrongDates2);
    }
  }
}

const nonogramField = new FieldDates(fieldArray);
const datesField = nonogramField.fillField();

export { wrapper, leftDates, topDate, datesField };
