//burger-menu

const headerLogo = document.querySelector('.header__logo');
const headerIcon = document.querySelector('.header__icon');
const headerNavigation = document.querySelector('.header__navigation');


function showNavigation () {
  if(headerLogo && headerIcon) {
    headerIcon.addEventListener('click',()=>{
        document.body.classList.toggle('lock');
        headerLogo.classList.toggle('active');
        headerIcon.classList.toggle('active');
        headerNavigation.classList.toggle ('active');
        console.log('nice')
    })
  }
}

showNavigation()