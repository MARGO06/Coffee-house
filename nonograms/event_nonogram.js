const cellsField = document.querySelector(".nonogram__field");
const cellField = document.querySelectorAll(".nonogram__field-dates");
const resetButton = document.querySelector(".nonogram__button-reset");

function paintCellField() {
  cellsField.addEventListener("click", (e) => {
    e.preventDefault;
    e.target.classList.toggle("active");
  });
}

//add right click
function clickRightMouse() {
  cellsField.addEventListener("mousedown", (e) => {
    e.preventDefault;
    if (e.button === 2) {
      e.target.classList.toggle("change");
      deleteContextMenu();
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
  });
}

//correct answer
const correctAnswer1 = [
  0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1,
];

export { paintCellField, clickRightMouse, resetGame };
