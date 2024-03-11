class ActiveElements {
  static showActiveButton() {
    const button = document.querySelector('.login_button') as HTMLButtonElement;
    const firstInput = document.getElementById('fname') as HTMLInputElement;
    const lastInput = document.getElementById('lname') as HTMLInputElement;

    if (firstInput != null || lastInput != null || button != null) {
      button.addEventListener('click', (ev: Event) => {
        if (firstInput.value !== '' && lastInput.value !== '') {
          ev.preventDefault();
          console.log(firstInput.value);
        }
      });
    }
  }
}

ActiveElements.showActiveButton();
