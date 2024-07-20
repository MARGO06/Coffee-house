import { dates } from "../json.js";
import { wholeQuiz } from "../components/quiz.js";
import { randomNumber } from "../components/quiz.js";
import { windowGameOver } from "../components/modal.js";

class Answer {
  constructor(dates, wholeQuiz, number) {
    this.dates = dates;
    this.quizAnswer = Object.entries(wholeQuiz).map((element) => {
      return element[1];
    });
    this.number = number;
  }

  chooseAnswer() {
    return this.dates[this.number]
      ? this.dates[this.number].answer.split("")
      : [];
  }

  chooseAnswerEmpty() {
    const answer = this.quizAnswer[0][this.number];
    return answer.oneLetter;
  }

  showLetter(letter) {
    const answer = this.chooseAnswer();
    const emptyAnswer = this.chooseAnswerEmpty();
    answer.map((element, index) => {
      if (element === letter) {
        emptyAnswer[index].textContent = letter;
        emptyAnswer[index].classList.add("active");
      }
      if (emptyAnswer.every((letter) => letter.textContent !== " ")) {
        setTimeout(() => {
          windowGameOver.showModalWindow();
        }, 1000);
      }
    });
  }
}

export const rightAnswer = new Answer(dates, wholeQuiz, randomNumber);
