import { dates } from "./json.js";

const cardImgs = document.querySelectorAll(".card__img");
const cardTitles = document.querySelectorAll(".card__title");
const cardDescriptions = document.querySelectorAll(".card__description");
const cardPrices = document.querySelectorAll(".card__price");
const butDesert = document.querySelector(".menu__dessert");
const butCoffee = document.querySelector(".menu__coffee");
const butTea = document.querySelector(".menu__tea");
const cards = document.querySelector(".cards");
const card = document.querySelectorAll(".card");
const menuBtn = document.querySelector(".menu__btn");
const coffeeChecked = document.querySelector(".menu__coffee");

const coffees = [];
const teas = [];
const desserts = [];

//fill arrays
function fillArrays() {
  for (let date of dates) {
    if (date.category === "coffee") {
      coffees.push(date);
    }
    if (date.category === "tea") {
      teas.push(date);
    }
    if (date.category === "dessert") {
      desserts.push(date);
    }
  }
}

function changeElementTea() {
  teas.forEach((tea, index) => {
    if (cardTitles[index]) {
      cardTitles[index].textContent = tea.name;
    }
    if (cardImgs[index]) {
      cardImgs[index].src = tea.img;
    }
    if (cardDescriptions[index]) {
      cardDescriptions[index].textContent = tea.description;
    }
    if (cardPrices[index]) {
      cardPrices[index].textContent = tea.price;
    }
  });
}

function changeElementDessert() {
  desserts.forEach((dessert, index) => {
    if (cardTitles[index]) {
      cardTitles[index].textContent = dessert.name;
    }
    if (cardImgs[index]) {
      cardImgs[index].src = dessert.img;
    }
    if (cardDescriptions[index]) {
      cardDescriptions[index].textContent = dessert.description;
    }
    if (cardPrices[index]) {
      cardPrices[index].textContent = dessert.price;
    }
  });
}

function changeElementCoffees() {
  coffees.forEach((coffee, index) => {
    if (cardTitles[index]) {
      cardTitles[index].textContent = coffee.name;
    }
    if (cardImgs[index]) {
      cardImgs[index].src = coffee.img;
    }
    if (cardDescriptions[index]) {
      cardDescriptions[index].textContent = coffee.description;
    }
    if (cardPrices[index]) {
      cardPrices[index].textContent = coffee.price;
    }
  });
}

//hidden cards

function hiddenCards() {
  if (
    coffees.length < card.length ||
    teas.length < card.length ||
    desserts.length < card.length
  ) {
    cards.classList.add("hidden");
    menuBtn.classList.add("hidden");
  }
}

function openHiddenCards() {
  cards.classList.remove("hidden");
  menuBtn.classList.remove("hidden");
}

//open cards on media

function openCardsMedia() {
  menuBtn.addEventListener("click", (e) => {
    e.preventDefault();
    menuBtn.classList.add("hidden");
    cards.classList.add("open");
  });
}

function hiddenCardsMedia() {
  cards.classList.remove("open");
}

//click buttons

function clickButtonTea() {
  butTea.addEventListener("click", (e) => {
    e.preventDefault();
    butTea.classList.add("active");
    changeElementTea();
    hiddenCards();
    coffeeChecked.classList.add("hidden");
    butCoffee.classList.remove("active");
    butDesert.classList.remove("active");
  });
}

function clickButtonDesert() {
  butDesert.addEventListener("click", (e) => {
    e.preventDefault();
    butDesert.classList.add("active");
    changeElementDessert();
    openHiddenCards();
    hiddenCardsMedia();
    coffeeChecked.classList.add("hidden");
    butCoffee.classList.remove("active");
    butTea.classList.remove("active");
  });
}

function clickButtonCoffee() {
  butCoffee.addEventListener("click", (e) => {
    e.preventDefault();
    butCoffee.classList.add("active");
    changeElementCoffees();
    openHiddenCards();
    hiddenCardsMedia();
    coffeeChecked.classList.remove("hidden");
    butTea.classList.remove("active");
    butDesert.classList.remove("active");
  });
}

export {
  fillArrays,
  clickButtonTea,
  clickButtonDesert,
  clickButtonCoffee,
  openCardsMedia,
  coffees,
  teas,
  desserts,
};
