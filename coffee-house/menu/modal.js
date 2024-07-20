import {
  coffees,
  teas,
  desserts,
  clickButtonTea,
  clickButtonDesert,
  clickButtonCoffee,
} from "./load_goods.js";
clickButtonCoffee();
clickButtonDesert();
clickButtonTea();

const modalImg = document.querySelector(".modal__img");
const modalTitle = document.querySelector(".modal__title");
const modalDescription = document.querySelector(".modal__description");
const modalChoiceSizes = document.querySelectorAll(".offers-btn");
const products = document.querySelectorAll(".product");
const modalPrice = document.querySelector(".modal__total-price");
const cards = document.querySelectorAll(".card");
const butCoffee = document.querySelector(".menu__coffee");
const modalWindow = document.querySelector(".modal");
const butDesert = document.querySelector(".menu__dessert");
const butTea = document.querySelector(".menu__tea");
const backModal = document.querySelector(".background-modal");
const butClose = document.querySelector(".modal__close");
const elementTwo = document.querySelector(".offers__two");
const elementOne = document.querySelector(".offers__one");
const elementThree = document.querySelector(".offers__three");
const elementSmall = document.querySelector(".offers__small");
const elementMedium = document.querySelector(".offers__medium");
const elementLarge = document.querySelector(".offers__large");
const price = document.querySelector(".modal__total-price");
let basePrice = 0;
let allPrice = 0;
//create modal windows

function showGeneralContent() {
  modalChoiceSizes.forEach((modalSize, index) => {
    if (
      butTea.classList.contains("active") ||
      !butCoffee.classList.contains("hidden")
    ) {
      coffees.forEach((coffee) => {
        let sizes = Object.values(coffee.sizes);
        if (sizes[index]) {
          modalSize.textContent = sizes[index].size;
        }
      });
    }
    if (butDesert.classList.contains("active")) {
      desserts.forEach((dessert) => {
        let sizes = Object.values(dessert.sizes);
        if (sizes[index]) {
          modalSize.textContent = sizes[index].size;
        }
      });
    }
  });
}

function showModalAdditives(modalItem) {
  products.forEach((product, index) => {
    modalItem.forEach((item) => {
      let additives = Object.values(item.additives);
      if (additives[index]) {
        product.textContent = additives[index].name;
      }
    });
  });
}

//show modal windows

function openWindow() {
  elementSmall.classList.add("checked");
  updateStyles();
  showGeneralContent();
  modalWindow.classList.remove("hidden");
  backModal.classList.remove("hidden");
  document.body.classList.add("lock");
}

function openModalWindow(modalItem, button, state) {
  cards.forEach((card, index) => {
    card.addEventListener("click", (e) => {
      modalItem.forEach((item, i) => {
        if (index === i && button.classList.contains(`${state}`)) {
          modalImg.src = `${item.img}`;
          modalTitle.textContent = `${item.name}`;
          modalDescription.textContent = `${item.description}`;
          modalPrice.textContent = `${item.price}`;
          basePrice = Number(item.price);
          showModalAdditives(modalItem);
          openWindow();
        }
      });
    });
  });
}

function showActiveModalWindow() {
  openModalWindow(coffees, butCoffee, "checked");
  openModalWindow(teas, butTea, "active");
  openModalWindow(desserts, butDesert, "active");
}

function setStyleForTea() {
  elementTwo.classList.add("offers__two--tea");
}

function setStyleForDessert() {
  elementOne.classList.add("offers__one--dessert");
  elementTwo.classList.add("offers__two--dessert");
  elementThree.classList.add("offers__three--dessert");
  elementSmall.classList.add("offers__small--dessert");
  elementMedium.classList.add("offers__medium--dessert");
  elementLarge.classList.add("offers__large--dessert");
}

// clear all styles
function clearAllStyles() {
  const elements = [
    elementOne,
    elementTwo,
    elementThree,
    elementSmall,
    elementMedium,
    elementLarge,
  ];

  elements.forEach((element) => {
    element.classList.remove(
      "offers__one--dessert",
      "offers__two--tea",
      "offers__two--dessert",
      "offers__three--dessert",
      "offers__small--dessert",
      "offers__medium--dessert",
      "offers__large--dessert"
    );
  });
}

// change margin styles
function updateStyles() {
  clearAllStyles();
  if (butCoffee.classList.contains("hidden")) {
    clearAllStyles();
  }
  if (butTea.classList.contains("active")) {
    setStyleForTea();
    elementSmall.classList.remove("offers__small--dessert");
    elementMedium.classList.remove("offers__medium--dessert");
    elementLarge.classList.remove("offers__large--dessert");
  }
  if (butDesert.classList.contains("active")) {
    setStyleForDessert();
  }
}

updateStyles();

//close modal window

function hiddenModalWindow() {
  elementMedium.classList.remove("active");
  elementLarge.classList.remove("active");
  modalWindow.classList.add("hidden");
  backModal.classList.add("hidden");
  document.body.classList.remove("lock");
}

function clickButtonClose(button) {
  button.addEventListener("click", () => {
    hiddenModalWindow();
  });
}

function closeModalWindow() {
  clickButtonClose(butClose);
  clickButtonClose(backModal);
}

//change size
function activeSize() {
  elementSmall.addEventListener("click", () => {
    elementMedium.classList.remove("active");
    elementLarge.classList.remove("active");
    elementSmall.classList.add("checked");
    getPrices();
  });
  elementMedium.addEventListener("click", () => {
    elementMedium.classList.add("active");
    elementLarge.classList.remove("active");
    elementSmall.classList.remove("checked");
    getPrices();
  });
  elementLarge.addEventListener("click", () => {
    elementLarge.classList.add("active");
    elementMedium.classList.remove("active");
    elementSmall.classList.remove("checked");
    getPrices();
  });
}
activeSize();

function getPrice(menuItems) {
  let finalPrice = basePrice;
  let added = false;
  menuItems.map((item) => {
    let additives = Object.values(item.additives);
    let sizes = Object.values(item.sizes);
    if (!added && elementSmall.classList.contains("checked")) {
      finalPrice;
      added = true;
      finalPrice = getPriceAdditives(finalPrice, additives);
    }
    if (!added && elementMedium.classList.contains("active")) {
      finalPrice += Number(sizes[1]["add-price"]);
      added = true;
      finalPrice = getPriceAdditives(finalPrice, additives);
    }
    if (!added && elementLarge.classList.contains("active")) {
      finalPrice += Number(sizes[2]["add-price"]);
      added = true;
      finalPrice = getPriceAdditives(finalPrice, additives);
    }
  });

  allPrice = finalPrice.toFixed(2);
  return allPrice;
}

function getPrices() {
  price.textContent = getPrice(coffees);
  price.textContent = getPrice(teas);
  price.textContent = getPrice(desserts);
}

//add additives

function clickAdditives(button) {
  button.addEventListener("click", () => {
    button.classList.toggle("active");
    getPrices();
  });
}
function showAddedAdditives() {
  clickAdditives(elementOne);
  clickAdditives(elementTwo);
  clickAdditives(elementThree);
}
showAddedAdditives();

function getPriceAdditives(finalPrice, additives) {
  if (elementOne.classList.contains("active")) {
    finalPrice += Number(additives[0]["add-price"]);
  }
  if (elementTwo.classList.contains("active")) {
    finalPrice += Number(additives[1]["add-price"]);
  }
  if (elementThree.classList.contains("active")) {
    finalPrice += Number(additives[2]["add-price"]);
  }
  return finalPrice;
}

export { closeModalWindow, showActiveModalWindow };
