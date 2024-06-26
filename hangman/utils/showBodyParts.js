import { counts } from "../components/count.js";
import { bodyParts } from "../components/illustration.js";
import { windowGameOver } from "../components/modal.js";

class BodyPart {
  constructor() {
    this.counts = Object.values(counts)[0];
    this.bodyParts = bodyParts;
  }

  showBodyParts() {
    const score = parseInt(this.counts[0].textContent, 10);
    this.bodyParts.elements.forEach((element, index) => {
      if (index < score) {
        element.style.visibility = "visible";
      }
      if (score === 6) {
        setTimeout(() => {
          windowGameOver.showModalWindow();
        }, 1000);
      }
    });
  }
}

export const partsBody = new BodyPart();
