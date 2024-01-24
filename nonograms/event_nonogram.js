const cellField = document.querySelector(".nonogram__field");

function paintCellField() {
  cellField.addEventListener("click", (e) => {
    e.preventDefault;
    e.target.classList.toggle("active");
  });
}

export { paintCellField };
