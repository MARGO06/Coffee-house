export function clickSendButton() {
  const separator = document.querySelector('.separator');
  const messages = document.querySelectorAll('.unread');
  if (separator instanceof HTMLElement) {
    console.log(separator, messages);
    messages.forEach((message) => {
      if (message.classList.contains('unread')) {
        message.classList.remove('unread');
      }
      separator.remove();
    });
  }
}

export function clickDisplay() {
  const field = document.querySelector('.main_field-message');
  if (field instanceof HTMLElement) {
    field.addEventListener('click', (e) => {
      e.preventDefault();
      clickSendButton();
    });
  }
}

export function scrollField() {
  const scroll = document.querySelector('.main_scroll-field');
  if (scroll instanceof HTMLElement) {
    scroll.addEventListener('scroll', (e) => {
      e.preventDefault();
      clickSendButton();
    });
  }
}
