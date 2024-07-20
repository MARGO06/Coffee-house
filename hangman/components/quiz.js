import { dates } from "../json.js";

class QuizElements {
  constructor(elements) {
    this.elements = elements.map((element) => {
      const oneLetter = element.answer.split("").map((_, index) => {
        const letter = document.createElement("div");
        letter.className = `quiz__one-letter ${index}`;
        letter.textContent = " ";
        return letter;
      });
      const question = document.createElement("p");
      question.className = "quiz__question";
      question.textContent = `${element.question}`;
      return { question, oneLetter };
    });
  }

  getRandomNumber(min, max) {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

  choiceAnswer(number) {
    const result = this.elements[number];
    return result;
  }

  appendTo(parent, element) {
    element.oneLetter.forEach((letter) => parent.append(letter));
  }

  appendToQuestion(parent, element) {
    parent.append(element.question);
  }
}

export const wholeQuiz = new QuizElements(dates);
export const randomNumber = wholeQuiz.getRandomNumber(
  0,
  wholeQuiz.elements.length - 1
);
export const answer = wholeQuiz.choiceAnswer(randomNumber);
