class Elements {
  constructor(elements) {
    this.elements = elements.map((element) => this.createElement(element));
  }

  createElement({ tag = "div", className }) {
    const singleElement = document.createElement(tag);
    singleElement.className = className;
    return singleElement;
  }

  appendTo(parent) {
    this.elements.forEach((element) => parent.append(element));
  }
}

const illustrationElements = [
  { className: "part illustration__part21" },
  { className: "part illustration__part22" },
  { className: "part illustration__part23" },
];

export const bodyElements = [
  { className: "part illustration__body1" },
  { className: "part illustration__body2" },
  { className: "part illustration__body3" },
  { className: "part illustration__body4" },
  { className: "part illustration__body5" },
  { className: "part illustration__body6" },
];

export const illustrationParts = new Elements(illustrationElements);
export const bodyParts = new Elements(bodyElements);
