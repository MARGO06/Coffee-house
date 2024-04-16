import { sendMessageToUser } from '../websocket/send-message-to-user';

export const sendMessage = () => {
  const input = document.getElementById('message');
  const button = document.querySelector('.send_button');
  const name = document.querySelector('.main_destination-name');
  const field = document.querySelector('.main_field-message');
  if (button instanceof HTMLButtonElement && name instanceof HTMLElement) {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      if (field instanceof HTMLElement && input instanceof HTMLInputElement) {
        const message = document.createElement('p');
        message.className = `message ${name.innerHTML}`;
        sendMessageToUser(name.innerHTML, input.value);
        message.textContent = input.value;
        field.append(message);
      }
    });
  }
};
