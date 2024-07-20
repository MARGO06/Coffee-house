import { countNew } from "../utils/changeCount.js";
import { rightAnswer } from "../utils/showAnswer.js";
import { partsBody } from "../utils/showBodyParts.js";

class Keyboard {
  constructor(elements) {
    this.elements = Object.entries(elements).map(([key, letter]) => {
      const singleElement = document.createElement("div");
      singleElement.className = `key ${key}`;
      singleElement.textContent = letter;
      return singleElement;
    });
  }
  appendTo(parent) {
    this.elements.forEach((element) => parent.append(element));
  }

  pressButton() {
    document.addEventListener("keydown", (e) => {
      this.elements.forEach((key) => {
        if (key.classList.contains(e.code)) {
          key.classList.add("active");
          rightAnswer.showLetter(key.innerHTML);
          countNew.changeCount(key.innerHTML);
          partsBody.showBodyParts();
        }
      });
    });
  }

  upButton() {
    document.addEventListener("keyup", (e) => {
      this.elements.forEach((key) => {
        if (key.classList.contains(e.code)) {
          key.classList.remove("active");
          key.classList.add("disabled");
          key.style.pointerEvents = "none";
        }
      });
    });
  }

  putMouse() {
    this.elements.forEach((key) => {
      key.addEventListener("mousedown", () => {
        key.classList.add("active");
        rightAnswer.showLetter(key.innerHTML);
        countNew.changeCount(key.innerHTML);
        partsBody.showBodyParts();
      });
    });
  }

  upMouse() {
    this.elements.forEach((key) => {
      key.addEventListener("mouseup", () => {
        if (key.classList.contains("active")) {
          key.classList.remove("active");
          key.classList.add("disabled");
        }
      });
    });
  }
}

const letters = {
  KeyA: "A",
  KeyB: "B",
  KeyC: "C",
  KeyD: "D",
  KeyE: "E",
  KeyF: "F",
  KeyG: "G",
  KeyH: "H",
  KeyI: "I",
  KeyJ: "J",
  KeyK: "K",
  KeyL: "L",
  KeyM: "M",
  KeyN: "N",
  KeyO: "O",
  KeyP: "P",
  KeyQ: "Q",
  KeyR: "R",
  KeyS: "S",
  KeyT: "T",
  KeyU: "U",
  KeyV: "V",
  KeyW: "W",
  KeyX: "X",
  KeyY: "Y",
  KeyZ: "Z",
};

export const keyboardsLetters = new Keyboard(letters);
