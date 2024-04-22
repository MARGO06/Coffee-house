import { sendEditMessage } from '../websocket/editMessages';

export function editMessageByUser(button: HTMLElement) {
  const input = document.getElementById('message');
  button.addEventListener('click', (event) => {
    event.preventDefault();
    const message = button.parentElement?.nextElementSibling?.nextElementSibling;
    if (message instanceof HTMLElement && message !== undefined) {
      const messageText = message.innerHTML;
      if (input instanceof HTMLInputElement && input != undefined) {
        input.value = messageText;
        sendChangeMessage();
      }
    }
  });
}

export function sendChangeMessage() {
  const messages = document.querySelectorAll('.message');
  const sendButton = document.querySelector('.send_button');
  const input = document.getElementById('message');
  messages.forEach((message) => {
    if (message.classList.contains('active') && sendButton instanceof HTMLElement) {
      sendButton.addEventListener('click', (e) => {
        e.preventDefault();
        if (input instanceof HTMLInputElement) {
          const oldText = message.children.item(2);
          const messageId = message.getAttribute('id');
          if (oldText instanceof HTMLElement) {
            oldText.innerHTML = input.value;
            sendEditMessage(`${messageId}`, oldText.innerHTML);
            message.classList.remove('active');
            const actionWindow = message.children.item(0);
            if (actionWindow instanceof HTMLElement) {
              actionWindow.classList.remove('active');
              actionWindow.style.display = 'none';
            }
          }
        }
      });
    }
  });
}
