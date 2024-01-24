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

const topDatesLeft = document.createElement("div");
topDatesLeft.classList = "nonogram__dates-left";
bottomDates.append(topDatesLeft);

const field = document.createElement("div");
field.classList = "nonogram__field";
bottomDates.append(field);

export { wrapper };
