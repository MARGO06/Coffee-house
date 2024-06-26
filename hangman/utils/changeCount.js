import { counts } from "../components/count.js";
import { rightAnswer } from "./showAnswer.js";

class NewCount {
  constructor() {
    this.counts = Object.values(counts)[0];
    this.first = 0;
    this.second = 6;
  }

  changeCount(letter) {
    const answer = rightAnswer.chooseAnswer();
    if (!answer.includes(letter) && this.first < 6 && this.second > 0) {
      this.first++;
      this.second--;
    }
    this.counts[0].textContent = this.first;
    this.counts[2].textContent = this.second;
  }
}

export const countNew = new NewCount();
