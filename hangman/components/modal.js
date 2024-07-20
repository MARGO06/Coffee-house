import { dates } from "../json.js";
import { counts } from "./count.js";
import { randomNumber } from "./quiz.js";
import { modalWindow, backgroundModalWindow } from "./wrapper.js";
import { textModal, resultModal, answerModal, buttonModal } from "./text.js";

const LOSING_SCORE = 6;

class ModalWindow {
  constructor() {
    this.counts = Object.values(counts)[0];
    this.text = textModal;
    this.result = resultModal;
    this.answer = answerModal;
    this.button = buttonModal;
  }

  addModalText() {
    this.counts[0].textContent != LOSING_SCORE
      ? this.text.updateText("Game over! Congratulation! You won! 🎉🎉🎉")
      : this.text.updateText("Game over! You lose! You can try again)");

    const result = [
      this.counts[0].textContent,
      this.counts[1].textContent,
      this.counts[2].textContent,
    ].join("");

    this.result.updateText(`Your result : ${result}`);
    this.answer.updateText(`Correct answer : ${dates[randomNumber].answer}`);
  }

  showModalWindow() {
    backgroundModalWindow.tag.classList.add("active");
    modalWindow.tag.classList.add("active");
    this.addModalText();
    this.closeModalWindow();
  }

  closeModalWindow() {
    this.button.tag.addEventListener("click", () => {
      backgroundModalWindow.tag.classList.remove("active");
      modalWindow.tag.classList.remove("active");
      setTimeout(() => {
        window.location.reload();
      }, 500);
    });
  }
}

export const windowGameOver = new ModalWindow();
