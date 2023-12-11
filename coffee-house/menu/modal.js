import {dates} from "./json.js";
import {coffees,teas,desserts} from "./load_goods.js";
dates;
coffees;
teas;
desserts;

const modalImg = document.querySelector('.modal__img');
const modalTitle = document.querySelector('.modal__title');
const modalDescription = document.querySelector('.modal__description');
const modalChoiceSizes = document.querySelectorAll('.offers-btn');
const products = document.querySelectorAll('.product');
const modalPrice = document.querySelector('.modal__total-price');
const cards = document.querySelectorAll('.card');
const butCoffee = document.querySelector('.menu__coffee');
const modalWindow = document.querySelector('.modal');
const cardImgs = document.querySelectorAll('.card__img');
const cardTitles = document.querySelectorAll('.card__title');

//create modal windows

function showGeneralContent () {
  modalChoiceSizes.forEach((modalSize,index) =>{
    coffees.forEach(coffee=>{
      let sizes = Object.values(coffee.sizes);
        sizes.forEach((size,i) => {
          if(index === i) {
            modalSize.textContent = `${size.size}`
          }
        })
    })
  })
}
function showModalCoffee(){
    coffees.forEach((coffee,index)=>{
        cards.forEach(i => {
            if(index === i){
                modalImg.textContent = `${coffee.img}`   
            }
          })
    })

        coffees.forEach((coffee,i) => {
         
            modalTitle.textContent = `${i.name}`;
            console.log(coffee.description, coffee.name, coffees)
          
      })
   
 
  coffees.forEach((coffee,i)=>{
    modalDescription.textContent = `${coffee.description}`
    //console.log(coffee.description, coffee.name, coffees)
  })
  showGeneralContent ();
  products.forEach((product,index) =>{
    coffees.forEach(coffee=>{
      let additives = Object.values(coffee.additives);
      additives.forEach((additive,i) => {
      if(index === i) {
        product.textContent = `${additive.name}`
      }
    })
  })
  })
  coffees.forEach(coffee => {
    modalPrice.textContent = `${coffee.price}`
  })
}

function showModalTea(){
  teas.forEach(tea=>{
    modalImg.textContent = `${tea.img}`
    console.log(tea.img)
  })
  teas.forEach(tea=>{
    modalTitle.textContent = `${tea.name}`
  })
   teas.forEach(tea=>{
    modalDescription.textContent = `${tea.description}`
  })
   showGeneralContent ();
    products.forEach((product,index) =>{
      teas.forEach(tea=>{
        let additives = Object.values(tea.additives);
        additives.forEach((additive,i) => {
        if(index === i) {
          product.textContent = `${additive.name}`
        }
      })
    })
    })
    teas.forEach(tea => {
      modalPrice.textContent = `${tea.price}`
  })
}

function showModalDessert(){
    desserts.forEach(dessert=>{
      modalImg.textContent = `${dessert.img}`
    })
    desserts.forEach(dessert=>{
      modalTitle.textContent = `${dessert.name}`
    })
    desserts.forEach(dessert=>{
      modalDescription.textContent = `${dessert.description}`
    })
    modalChoiceSizes.forEach((modalSize,index) =>{
      desserts.forEach(dessert=>{
        let sizes = Object.values(dessert.sizes);
        sizes.forEach((size,i) => {
        if(index === i) {
          modalSize.textContent = `${size.size}`
        }
      })
    })
    })
    products.forEach((product,index) =>{
      desserts.forEach(dessert=>{
        let additives = Object.values(dessert.additives);
        additives.forEach((additive,i) => {
        if(index === i) {
          product.textContent = `${additive.name}`
        }
      })
    })
    })
    desserts.forEach(dessert => {
      modalPrice.textContent = `${dessert.price}`
    })
    console.log(teas)
  }

//show modal windows

function openModalCoffee () {
    cards.forEach((card,index) => {
      card.addEventListener('click',(e) => {
        coffees.forEach((coffee,i) => {
            if(index === i){
                showModalCoffee();
                showGeneralContent ();
                modalWindow.classList.remove('hidden');
                console.log(index)
            }
        })
    })
})
}

export {openModalCoffee, showModalCoffee}