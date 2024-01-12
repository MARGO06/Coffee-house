import {
  modalText,
  modalResult,
  modalAnswer,
  randomNumber,
} from "./build_page.js";
import { dates } from "./json.js";

const backgroundModal = document.querySelector(".modal__background");
const modalWindow = document.querySelector(".modal");
const numbers = document.querySelectorAll(".number");

function viewModal() {
  if (numbers[0].innerHTML !== "6") {
    modalText.innerHTML = "Game over! Congratulation! You won! 🎉🎉🎉";
    console.log(numbers[0].innerHtml);
  }
  if (numbers[0].innerHTML === "6") {
    modalText.innerHTML = "Game over! You lose! You can try again)";
  }
  const result = [
    `${numbers[0].innerHTML}`,
    `${numbers[1].innerHTML}`,
    `${numbers[2].innerHTML}`,
  ].join("");
  modalResult.innerHTML = `Your result : ${result}`;
  modalAnswer.innerHTML = `Correct answer : ${dates[randomNumber].answer}`;
}
//console.log(result);

function showModalWindow() {
  backgroundModal.classList.add("active");
  modalWindow.classList.add("active");
  viewModal();
  console.log("jjj");
}

export { showModalWindow };
