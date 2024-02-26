import {dates} from "./json.js";
import {coffees,teas,desserts,clickButtonTea,clickButtonDesert,clickButtonCoffee} from "./load_goods.js";
dates;
coffees;
teas;
desserts;
clickButtonCoffee();
clickButtonDesert();
clickButtonTea();

const modalImg = document.querySelector('.modal__img');
const modalTitle = document.querySelector('.modal__title');
const modalDescription = document.querySelector('.modal__description');
const modalChoiceSizes = document.querySelectorAll('.offers-btn');
const products = document.querySelectorAll('.product');
const modalPrice = document.querySelector('.modal__total-price');
const cards = document.querySelectorAll('.card');
const butCoffee = document.querySelector('.menu__coffee');
const modalWindow = document.querySelector('.modal');
const butDesert = document.querySelector('.menu__dessert');
const butTea = document.querySelector('.menu__tea');
const backModal = document.querySelector('.background-modal');
const butClose = document.querySelector('.modal__close')


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
}

function showModalTea(){
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
}

function showModalDessert(){
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
  }

//show modal windows

function openModalCoffee () {
    cards.forEach((card,index) => {
      card.addEventListener('click',(e) => {
        coffees.forEach((coffee,i) => {
            if(index === i && (butCoffee.classList.contains('active') || butCoffee.classList.contains('checked'))){
                modalImg.src = `${coffee.img}`
                modalTitle.textContent = `${coffee.name}`
                modalDescription.textContent = `${coffee.description}`
                modalPrice.textContent = `${coffee.price}`;
                showGeneralContent ();
                showModalCoffee();
                modalWindow.classList.remove('hidden');
                backModal.classList.remove('hidden');
                document.body.classList.add('lock');
                console.log(index)
            }
        })
    })
})
}


function openModalTea () {
  cards.forEach((card,index) => {
    card.addEventListener('click',(e) => {
      teas.forEach((tea,i) => {
          if(index === i && butTea.classList.contains('active')){
              modalImg.src = `${tea.img}`
              modalTitle.textContent = `${tea.name}`
              modalDescription.textContent = `${tea.description}`;
              modalPrice.textContent = `${tea.price}`
              showGeneralContent ();
              showModalTea();
              modalWindow.classList.remove('hidden');
              backModal.classList.remove('hidden');
              document.body.classList.add('lock');
              console.log(index)
          }
      })
  })
})
}


function openModalDessert () {
  cards.forEach((card,index) => {
    card.addEventListener('click',(e) => {
      desserts.forEach((dessert,i) => {
          if(index === i && butDesert.classList.contains('active')){
              modalImg.src = `${dessert.img}`
              modalTitle.textContent = `${dessert.name}`
              modalDescription.textContent = `${dessert.description}`
              modalPrice.textContent = `${dessert.price}`
              showGeneralContent ();
              showModalDessert();
              modalWindow.classList.remove('hidden');
              backModal.classList.remove('hidden');
              document.body.classList.add('lock');
              console.log(index)
          }
      })
  })
})
}

//close modal window

function hiddenModalWindow (){
  modalWindow.classList.add('hidden');
  backModal.classList.add('hidden');
  document.body.classList.remove('lock');
}

function clickButtonClose (){
  butClose.addEventListener('click', (e) => {
    hiddenModalWindow ()
  })
}

function clickBackModal (){
  backModal.addEventListener('click', (e) => {
    hiddenModalWindow ()
  })
}


export {showModalCoffee,openModalDessert,openModalTea,openModalCoffee,clickButtonClose,clickBackModal}