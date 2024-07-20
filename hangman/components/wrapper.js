export class Element {
  constructor(tag, className) {
    this.tag = document.createElement(tag);
    this.tag.className = className;
  }

  appendTo(parent) {
    parent.append(this.tag);
    return this.tag;
  }
}

export const wrapperPage = new Element("div", "wrapper");
export const wrapperIllustration = new Element("div", "wrapper__illustration");
export const illustrationImage = new Element("div", "illustration");
export const illustrationHeightPart = new Element(
  "div",
  "part illustration__height"
);
export const illustrationMiddlePart = new Element(
  "div",
  "illustration__middle"
);
export const illustrationFooterPart = new Element(
  "div",
  "part illustration__footer"
);

export const quizGame = new Element("div", "quiz");
export const quizAnswer = new Element("div", "quiz__answer");
export const quizCount = new Element("div", "score");

export const keyboard = new Element("div", "quiz__keyboard");
export const row = new Element("div", "quiz__row");

export const personBody = new Element("div", " illustration__body");
export const modalWindow = new Element("div", "modal hidden");
export const backgroundModalWindow = new Element(
  "div",
  "modal__background hidden"
);
