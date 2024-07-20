import { Element } from "./wrapper.js";
class Text extends Element {
  constructor(tag, className, content) {
    super(tag, className);
    this.tag.textContent = content;
  }

  appendTo(parent) {
    super.appendTo(parent);
  }

  updateText(newText) {
    this.tag.textContent = newText;
  }
}

export const nameGame = new Text("h1", "nameGame", "HANGMAN GAME");
export const nameCount = new Text("p", "quiz_text", "Incorrect guesses:");
export const textModal = new Text("p", "modal__text", " ");
export const resultModal = new Text("p", "modal__result", "");
export const answerModal = new Text("p", "modal__answer", "");
export const buttonModal = new Text("button", "modal__button", "Play again");
