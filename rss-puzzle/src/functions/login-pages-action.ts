class SaveElements {
  static saveLocalStorage() {
    const button = document.querySelector('.login_button') as HTMLButtonElement;
    const firstInput = document.getElementById('fname') as HTMLInputElement;
    const lastInput = document.getElementById('lname') as HTMLInputElement;
    if (firstInput != null || lastInput != null || button != null) {
      button.addEventListener('click', (ev: Event) => {
        ev.preventDefault();
        if (firstInput.value != null && lastInput.value != null) {
          localStorage.setItem('first name', firstInput.value);
          localStorage.setItem('surname', lastInput.value);
        }
      });
    }
  }
}

SaveElements.saveLocalStorage();
