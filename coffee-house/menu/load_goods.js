import {dates} from "./json.js";
dates;

const cardImgs = document.querySelectorAll('.card__img');
const cardTitles = document.querySelectorAll('.card__title');
const cardDescriptions = document.querySelectorAll('.card__description');
const cardPrices = document.querySelectorAll('.card__price');
const butDesert = document.querySelector('.menu__dessert');
const butCoffee = document.querySelector('.menu__coffee')
const butTea = document.querySelector('.menu__tea');


const coffees = [];
const teas = [];
const desserts = [];


//fill arrays
function fillArrays(){

  for (let date of dates) {
    if(date.category === "coffee") {
        coffees.push(date)
    }
    if(date.category === "tea") {
        teas.push(date)
    }
    if(date.category === "dessert") {
        desserts.push(date)
    }
  }
}

function changeElementTea() {
    
  cardTitles.forEach((cardTitle,index) =>{
      teas.forEach((tea,i) => {
        if(index === i) {
          cardTitle.textContent = `${tea.name}`;
        }
    })
  })
  
  cardImgs.forEach((cardImg,index) => {
      teas.forEach((tea,i) => {
        if(index === i) {
          cardImg.src = `${tea.img}`;
        }
    })
  })

  cardDescriptions.forEach((cardDescription,index) => {
      teas.forEach((tea,i) => {
        if(index === i) {
          cardDescription.textContent = `${tea.description}`;
        }
    })
  })

  cardPrices.forEach((cardPrice,index) =>{
      teas.forEach((tea,i) => {
        if(index === i) {
          cardPrice.textContent = `${tea.price}`;
        }
    })
  })  
}


function changeElementDessert() {
    
    cardTitles.forEach((cardTitle,index) =>{
        desserts.forEach((dessert,i) => {
          if(index === i) {
            cardTitle.textContent = `${dessert.name}`;
          }
      })
    })
    
    cardImgs.forEach((cardImg,index) =>{
        desserts.forEach((dessert,i) => {
          if(index === i) {
            cardImg.src = `${dessert.img}`;
          }
      })
    })
  
    cardDescriptions.forEach((cardDescription,index) =>{
        desserts.forEach((dessert,i) => {
          if(index === i) {
            cardDescription.textContent = `${dessert.description}`;
          }
      })
    })
  
    cardPrices.forEach((cardPrice,index) =>{
        desserts.forEach((dessert,i) => {
          if(index === i) {
            cardPrice.textContent = `${dessert.price}`;
          }
      })
    })  
  }
  

function changeElementCoffees() {
    
  cardTitles.forEach((cardTitle,index) =>{
    coffees.forEach((coffee,i) => {
      if(index === i) {
      cardTitle.textContent = `${coffee.name}`;
      }
    })
  })
    
  cardImgs.forEach((cardImg,index) =>{
      coffees.forEach((coffee,i) => {
        if(index === i) {
        cardImg.src = `${coffee.img}`;
        }
    })
  })
  
  cardDescriptions.forEach((cardDescription,index) =>{
    coffees.forEach((coffee,i) => {
      if(index === i) {
      cardDescription.textContent = `${coffee.description}`;
      }
    })
  })
  
  cardPrices.forEach((cardPrice,index) =>{
    coffees.forEach((coffee,i) => {
      if(index === i) {
      cardPrice.textContent = `${coffee.price}`;
      }
    })
  })  
}

//click buttons

function clickButtonTea () {
  butTea.addEventListener('click',(e)=>{
    e.preventDefault();
    butTea.classList.add('active');
    changeElementTea();
    butCoffee.classList.remove('active');
    butDesert.classList.remove('active');
  })
}

function clickButtonDesert () {
    butDesert.addEventListener('click',(e)=>{
      e.preventDefault();
      butDesert.classList.add('active');
      changeElementDessert();
      butCoffee.classList.remove('active');
      butTea.classList.remove('active');
    })
  }

function clickButtonCoffee () {
    butCoffee.addEventListener('click',(e)=>{
      e.preventDefault();
      butCoffee.classList.add('active');
      changeElementCoffees();
      butTea.classList.remove('active');
      butDesert.classList.remove('active');
    })
  }



            

export{fillArrays, clickButtonTea,clickButtonDesert,clickButtonCoffee}