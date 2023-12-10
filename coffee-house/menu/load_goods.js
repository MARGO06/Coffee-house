import {dates} from "./json.js";
dates;

const cardImgs = document.querySelectorAll('.card__img');
const cardTitles = document.querySelectorAll('.card__title');
const cardDescriptions = document.querySelectorAll('.card__description');
const cardPrices = document.querySelectorAll('.card__price');
const callButtons = document.querySelectorAll('input');

const coffee = [];
const tea = [];
const dessert = [];

function fff(){
 dates.forEach(date =>
    console.log(date.category, dates)
    )
cardPrices.forEach((index)=> console.log(index ))
console.log(callButtons)
 callButtons.forEach((callButton) => callButton.value === 'Coffee' ? console.log("sss") : console.log(10));


}

export{fff}