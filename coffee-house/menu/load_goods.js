import {dates} from "./json.js";
dates;

const cardImgs = document.querySelectorAll('.card__img');
const cardTitles = document.querySelectorAll('.card__title');
const cardDescriptions = document.querySelectorAll('.card__description');
const cardPrices = document.querySelectorAll('.card__price');
const valueButtons = document.querySelectorAll('input');

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
console.log(coffees)
console.log(teas)
console.log(desserts)
console.log(cardTitles)
 

}

function changeElementTea() {
    
  cardTitles.forEach((cardTitle,index) =>{
    console.log(cardTitle)
      teas.forEach((tea,i) => {
        if(index === i) {
          cardTitle.textContent = `${tea.name}`;
          console.log(cardTitles) 
        }
    })
  })
  
  cardImgs.forEach((cardImg,index) =>{
    console.log(cardImg)
      teas.forEach((tea,i) => {
        if(index === i) {
          cardImg.src = `${tea.img}`;
          console.log(cardImg) 
        }
    })
  })

  cardDescriptions.forEach((cardDescription,index) =>{
    console.log(cardDescription)
      teas.forEach((tea,i) => {
        if(index === i) {
          cardDescription.textContent = `${tea.description}`;
          console.log(cardDescription) 
        }
    })
  })

  cardPrices.forEach((cardPrice,index) =>{
    console.log(cardPrice)
      teas.forEach((tea,i) => {
        if(index === i) {
          cardPrice.textContent = `${tea.price}`;
          console.log(cardPrice) 
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



function clickButton () {
  for(let valueButton of valueButtons) {
    if(valueButton.value === 'Tea'){
        console.log(valueButton)
    }
  }
}
export{fillArrays, clickButton,changeElementDessert}