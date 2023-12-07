//burger-menu

const headerLogo = document.querySelector('.header__logo');
const headerIcon = document.querySelector('.header__icon');
const headerNavigation = document.querySelector('.header__navigation');
const headerItems = document.querySelectorAll('.header__item');
const headerLinks = document.querySelectorAll('.header__link');


function showNavigation () {
  if(headerLogo && headerIcon) {
    headerIcon.addEventListener('click',(e)=>{
        document.body.classList.toggle('lock');
        headerLogo.classList.toggle('active');
        headerIcon.classList.toggle('active');
        headerNavigation.classList.toggle ('active');
        console.log('nice')
    })
  }
}

showNavigation()

function closeNavigation () {
   headerItems.forEach(headerItem => {
     headerItem.addEventListener('click',(e) => {
      if(headerIcon.classList.contains('active')) {
        document.body.classList.remove('lock');
        headerLogo.classList.remove('active');
        headerIcon.classList.remove('active');
        headerNavigation.classList.remove ('active');
        console.log('nice3')
      }
     })
   })
}

closeNavigation ()

function smoothScroll () {
  headerLinks.forEach(headerLink => {
    headerLink.addEventListener('click',(e) =>{
        e.preventDefault();
        const id = headerLink.getAttribute('href').substring(1);
        document.getElementById(id).scrollIntoView({
            behavior:'smooth',
        })
    })
})
}

smoothScroll()

//create slider

const coffeeSliders = document.querySelectorAll('.coffee');
const buttonRight = document.querySelector('.choose__right');
const buttonLeft = document.querySelector('.choose__left');
const progressBars = document.querySelectorAll('.pagination__rectg');

let currentSlide = 0;
let currentBar = 0;
let autoProgress = true;
const slideLength = coffeeSliders.length-1;

coffeeSliders.forEach((slide, index) => slide.style.transform = `translateX(${100*index}%)`);

function changeSliders () {
  coffeeSliders.forEach((slide, index) => slide.style.transform = 
                    `translateX(${100*(index-currentSlide)}%)`);
}

// progress bar
function showProgressBar() {
  progressBars.forEach ((progressBar,index)=>{
    if(currentSlide === index) {
    currentBar = index;
    progressBar.classList.add ('active');
    } 
    else {progressBar.classList.remove ('active');
    }
  })
}

//next slider
function clickButtonRight () {
  buttonLeft.addEventListener('click',(e) => {
    if(currentSlide === slideLength) {
      currentSlide = 0;
    } else {
      currentSlide += 1;
    }
      stopAutoProgress ();
      showProgressBar(currentBar);
      changeSliders(currentSlide);
  })
}

clickButtonRight();

//previous slider 

function clickButtonLeft () {
  buttonRight.addEventListener('click',(e) => {

    if(currentSlide === 0) {
      currentSlide = slideLength;
    } else {
      currentSlide -= 1;
    }
    stopAutoProgress ();
    showProgressBar(currentBar);
    changeSliders(currentSlide);
  })
}

clickButtonLeft();

// auto change slides

const showFirstProgressBar = setTimeout(showProgressBar(0),0);

function autoSlider () {

  if(currentSlide === slideLength) {
    currentSlide = 0;
  } else {
    currentSlide += 1;
  }

  changeSliders(currentSlide);
  showProgressBar(currentBar);

}

let autoChangeSlides = setInterval(autoSlider,5000);

function stopAutoProgress () {
  clearInterval(autoChangeSlides);
  autoChangeSlides = setInterval(autoSlider,5000)
}




