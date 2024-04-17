import { sendMessageToUser } from '../websocket/send-message-to-user';

export const sendMessage = () => {
  const input = document.getElementById('message');
  const button = document.querySelector('.send_button');
  const name = document.querySelector('.main_destination-name');
  const field = document.querySelector('.main_field-message');
  const scroll = document.querySelector('.main_scroll-field');
  const ggg = document.querySelector('.first_message');
  if (button instanceof HTMLButtonElement && name instanceof HTMLElement && scroll instanceof HTMLElement) {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      //if (ggg instanceof HTMLElement) {ggg.remove()};
      if (field instanceof HTMLElement && input instanceof HTMLInputElement) {
        if (field.innerHTML.includes('<p class="first_message">You can write your first message...</p>')) {
          field.children[0].remove();
        }
        console.log(ggg, field.innerHTML);
        const message = document.createElement('p');
        message.className = `message ${name.innerHTML}`;
        sendMessageToUser(name.innerHTML, input.value);
        message.textContent = input.value;
        message.style.alignItems = 'end';
        field.append(message);
      }
      scroll.scrollTop = scroll.scrollHeight;
    });
  }
};
