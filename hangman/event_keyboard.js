import { wrapper, row } from "./build_page.js";
wrapper;
row;

const keys = document.querySelectorAll(".key");
// physical keyboard
function putButton() {
  document.addEventListener("keydown", (e) => {
    for (let i = 0; i < keys.length; i++) {
      if (keys[i].getAttribute("class").includes(e.code)) {
        keys[i].classList.add("active");
      }
    }
    console.log(e.code);
  });
}

function upButton() {
  document.addEventListener("keyup", (e) => {
    for (let i = 0; i < keys.length; i++) {
      if (keys[i].getAttribute("class").includes(e.code)) {
        keys[i].classList.remove("active");
        keys[i].classList.add("inactive");
      }
    }
    console.log(e.code);
  });
}

// virtual keyboard
function putMouse() {
  keys.forEach((key) => {
    key.addEventListener("mousedown", (e) => {
      key.classList.add("active");
      console.log(e);
    });
  });
}

function upMouse() {
  keys.forEach((key) => {
    key.addEventListener("mouseup", (e) => {
      key.classList.remove("active");
      key.classList.add("inactive");
      console.log(e);
    });
  });
}

export { putButton, upButton, putMouse, upMouse };
