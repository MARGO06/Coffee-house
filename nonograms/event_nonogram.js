const cellsField = document.querySelector(".nonogram__field");
const cellField = document.querySelectorAll(".nonogram__field-dates");

function paintCellField() {
  cellsField.addEventListener("click", (e) => {
    e.preventDefault;
    e.target.classList.toggle("active");
  });
}

function clickRightMouse() {
  cellsField.addEventListener("mousedown", (e) => {
    e.preventDefault;
    if (e.button === 2) {
      e.target.classList.toggle("change");
      deleteContextMenu();
    }
  });
}
//clickRightMouse();

function deleteContextMenu() {
  cellField.forEach((item) => {
    item.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    });
  });
}

/*function deleteCross() {
  cellsField.addEventListener("mousedown", (e) => {
    e.preventDefault;
    if (e.target.classList.contains("change") && e.button === 2) {
      e.target.classList.remove("change");
    }
  });
}
deleteCross();*/
//correct answer
const correctAnswer1 = [
  0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1,
];

export { paintCellField, clickRightMouse };
