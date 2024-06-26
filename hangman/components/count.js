class Count {
  constructor(array) {
    this.elements = array.map((element, index) => {
      const singleElement = document.createElement("div");
      singleElement.className = `number quiz__numbers${index}`;
      singleElement.textContent = element;
      return singleElement;
    });
  }

  appendTo(parent) {
    this.elements.forEach((element) => parent.append(element));
  }
}
const countNumbers = ["0", "/", "6"];
export const counts = new Count(countNumbers);
