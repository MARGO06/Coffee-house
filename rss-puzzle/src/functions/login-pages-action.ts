//import { changePage } from '../pages/change';

export class SaveElements {
  static saveLocalStorage() {
    const button = document.querySelector('.login_button') as HTMLButtonElement;
    const firstInput = document.getElementById('fname') as HTMLInputElement;
    const lastInput = document.getElementById('lname') as HTMLInputElement;
    if (firstInput != null || lastInput != null || button != null) {
      button.addEventListener('click', () => {
        if (!firstInput.validity.patternMismatch && !lastInput.validity.patternMismatch) {
          localStorage.setItem('first name', firstInput.value);
          localStorage.setItem('surname', lastInput.value);
        }
        //changePage;
      });
    }
  }
}

//SaveElements.saveLocalStorage();
