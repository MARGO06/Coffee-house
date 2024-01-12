import { numbers } from "./event_keyboard.js";
import {
  modalText,
  modalResult,
  modalAnswer,
  randomNumber,
} from "./build_page.js";
import { dates } from "./json.js";

const result = [
  `${numbers[0].innerHTML}`,
  `${numbers[1].innerHTML}`,
  `${numbers[2].innerHTML}`,
].join("");

function viewModal() {
  if (numbers[0].innerHtml !== "6") {
    modalText.innerHTML = "Game over! Congratulation! You won! 🎉🎉🎉";
  }
  if (numbers[0].innerHtml === "6") {
    modalText.innerHTML = "Game over! You lose! You can try again)";
  }
  modalResult.innerHTML = `Your result : ${result}`;
  modalAnswer.innerHTML = `Correct answer : ${dates[randomNumber].answer}`;
}
console.log(result);
viewModal();

export { viewModal };
