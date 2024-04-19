import { AllPages } from '../pages/all-pages';

export function backFromAboutPage(button: HTMLElement) {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    document.body.innerHTML = '';
    window.history.back();
    let newPage: AllPages;
    if (sessionStorage.getItem('location') === '#login') {
      newPage = new AllPages();
      newPage.createLoginPage();
      newPage.createChatPageButton();
      newPage.createChatPageInput();
      newPage.createAboutPage();
    }
    if (sessionStorage.getItem('location') === '#chat') {
      newPage = new AllPages();
      document.body.innerHTML = '';
      newPage.chatPage.createPage();
      window.location.hash = '#chat';
    }
    sessionStorage.removeItem('location');
  });
}
