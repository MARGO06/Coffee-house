import { dates } from "./json.js";
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

function showModalCoffee() {
  products.forEach((product, index) => {
    coffees.forEach((coffee) => {
      let additives = Object.values(coffee.additives);
      if (additives[index]) {
        product.textContent = additives[index].name;
      }
    });
  });
}

function showModalTea() {
  showGeneralContent();
  products.forEach((product, index) => {
    teas.forEach((tea) => {
      let additives = Object.values(tea.additives);
      if (additives[index]) {
        product.textContent = additives[index].name;
      }
    });
  });
}

function showModalDessert() {
  modalChoiceSizes.forEach((modalSize, index) => {
    desserts.forEach((dessert) => {
      let sizes = Object.values(dessert.sizes);
      if (sizes[index]) {
        modalSize.textContent = sizes[index].size;
      }
    });
  });
  products.forEach((product, index) => {
    desserts.forEach((dessert) => {
      let additives = Object.values(dessert.additives);
      if (additives[index]) {
        product.textContent = additives[index].name;
      }
    });
  });
}

//show modal windows

function openWindow() {
  updateStyles();
  showGeneralContent();
  modalWindow.classList.remove("hidden");
  backModal.classList.remove("hidden");
  document.body.classList.add("lock");
}

function openModalCoffee() {
  cards.forEach((card, index) => {
    card.addEventListener("click", (e) => {
      coffees.forEach((coffee, i) => {
        if (
          index === i &&
          (butCoffee.classList.contains("active") ||
            butCoffee.classList.contains("checked"))
        ) {
          modalImg.src = `${coffee.img}`;
          modalTitle.textContent = `${coffee.name}`;
          modalDescription.textContent = `${coffee.description}`;
          modalPrice.textContent = `${coffee.price}`;
          showModalCoffee();
          openWindow();
        }
      });
    });
  });
}

function setStyleForTea() {
  elementTwo.classList.add("offers__two--tea");
}

function openModalTea() {
  cards.forEach((card, index) => {
    card.addEventListener("click", (e) => {
      teas.forEach((tea, i) => {
        if (index === i && butTea.classList.contains("active")) {
          modalImg.src = `${tea.img}`;
          modalTitle.textContent = `${tea.name}`;
          modalDescription.textContent = `${tea.description}`;
          modalPrice.textContent = `${tea.price}`;
          showModalTea();
          openWindow();
        }
      });
    });
  });
}

function setStyleForDessert() {
  elementOne.classList.add("offers__one--dessert");
  elementTwo.classList.add("offers__two--dessert");
  elementThree.classList.add("offers__three--dessert");
  elementSmall.classList.add("offers__small--dessert");
  elementMedium.classList.add("offers__medium--dessert");
  elementLarge.classList.add("offers__large--dessert");
}

function openModalDessert() {
  cards.forEach((card, index) => {
    card.addEventListener("click", (e) => {
      desserts.forEach((dessert, i) => {
        if (index === i && butDesert.classList.contains("active")) {
          modalImg.src = `${dessert.img}`;
          modalTitle.textContent = `${dessert.name}`;
          modalDescription.textContent = `${dessert.description}`;
          modalPrice.textContent = `${dessert.price}`;
          showModalDessert();
          openWindow();
        }
      });
    });
  });
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
  modalWindow.classList.add("hidden");
  backModal.classList.add("hidden");
  document.body.classList.remove("lock");
}

function clickButtonClose() {
  butClose.addEventListener("click", (e) => {
    hiddenModalWindow();
  });
}

function clickBackModal() {
  backModal.addEventListener("click", (e) => {
    hiddenModalWindow();
  });
}

export {
  showModalCoffee,
  openModalDessert,
  openModalTea,
  openModalCoffee,
  clickButtonClose,
  clickBackModal,
};
