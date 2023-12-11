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


function showModalCoffee(){
  coffees.forEach(coffee=>{
    modalImg.textContent = `${coffee.img}`
  })
  coffees.forEach(coffee=>{
    modalTitle.textContent = `${coffee.name}`
  })
  coffees.forEach(coffee=>{
    modalDescription.textContent = `${coffee.description}`
    console.log(Object.values(coffee.sizes))
  })
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
  console.log(coffees)
}



export {showModalCoffee}