//burger-menu

const headerLogo = document.querySelector('.header__logo');
const headerIcon = document.querySelector('.header__icon');
const headerNavigation = document.querySelector('.header__navigation');
const headerItems = document.querySelectorAll('.header__item');
const headerLinks = document.querySelectorAll('.header__link');
const enjoySection= document.querySelector('.enjoy');


function showNavigation () {
  if(headerLogo && headerIcon) {
    headerIcon.addEventListener('click',(e)=>{
        enjoySection.classList.toggle('hidden');
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
        enjoySection.classList.remove('hidden');
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
const progressBars = document.querySelectorAll('.paginaton__color');

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
    e.preventDefault();
    if(currentSlide === slideLength) {
      currentSlide = 0;
    } else {
      currentSlide += 1;
    }
     coffeeSliders.forEach(coffeeSlider => {
       coffeeSlider.classList.add('active')
      })
      stopAutoProgress ();
      showProgressBar(currentBar);
      changeSliders(currentSlide);
  })
}

clickButtonRight();

//previous slider 

function clickButtonLeft () {
  buttonRight.addEventListener('click',(e) => {
    e.preventDefault();
    if(currentSlide === 0) {
      currentSlide = slideLength;
    } else {
      currentSlide -= 1;
    }
    coffeeSliders.forEach(coffeeSlider => {
      coffeeSlider.classList.add('active')
     })
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
  coffeeSliders.forEach(coffeeSlider => {
    coffeeSlider.classList.add('active')
   })
  changeSliders(currentSlide);
  showProgressBar(currentBar);
  mouseOverOnCoffee();
  mouseOutOnCoffee();
}

let autoChangeSlides = setInterval(autoSlider,5000);

function stopAutoProgress () {
  clearInterval(autoChangeSlides);
  autoChangeSlides = setInterval(autoSlider,5000)
}

//change slides for mobile
let x1 ;
let x2 ;

function touchStartMobile(){
  coffeeSliders.forEach(coffeeSlider => {
     coffeeSlider.addEventListener("touchstart", (e)  => {
      e.preventDefault();
      x1 = e.touches[0].clientX;
     },
     false)
  })
}

touchStartMobile()

function touchMoveMobile () {
  coffeeSliders.forEach(coffeeSlider => {
    coffeeSlider.addEventListener('touchmove',(e) => {
       e.preventDefault();
       x2 = e.touches[0].clientX;
    },false)
  })
}

touchMoveMobile ()

function touchEndMobile(){
  coffeeSliders.forEach(coffeeSlider => {
     coffeeSlider.addEventListener("touchend", (e)  => {
     e.preventDefault();
     
     if(currentSlide === 0 && x2>x1) {
      currentSlide = slideLength;
     }
     else if(currentSlide === slideLength && x2<x1) {
      currentSlide = 0;
     }
     else if((currentSlide === slideLength && x2<x1) || (x2>x1)) {
        currentSlide -= 1;
     } else if(x2<x1){
        currentSlide += 1;
     } 
     
    coffeeSliders.forEach(coffeeSlider => {
    coffeeSlider.classList.add('active')
   })
  stopAutoProgress ();
  changeSliders(currentSlide);
  showProgressBar(currentBar);
  console.log(e)

   console.log(x2)
     },
     false)
  })

}
 touchEndMobile()

// add stop auto change slider (mouse event)

function mouseOverOnCoffee (){
  coffeeSliders.forEach(coffeeSlider=>{
    coffeeSlider.addEventListener('mouseover',(e)=>{
      (e).preventDefault;
        coffeeSlider.classList.add('pause');
        progressBars.forEach(progressBar=>{
          progressBar.classList.add('pause');
        })
      console.log('ggg')
    })
   })
}

mouseOverOnCoffee()

function mouseOutOnCoffee (){
  coffeeSliders.forEach(coffeeSlider=>{
    coffeeSlider.addEventListener('mouseout',(e)=>{
      (e).preventDefault;
        coffeeSlider.classList.remove('pause');
        progressBars.forEach(progressBar=>{
          progressBar.classList.remove('pause');
        })
      console.log('ggg')
    })
   })
}

mouseOutOnCoffee()

