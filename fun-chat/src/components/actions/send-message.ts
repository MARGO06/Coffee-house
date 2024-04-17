import { sendMessageToUser } from '../websocket/send-message-to-user';

export const sendMessage = () => {
  const input = document.getElementById('message');
  const button = document.querySelector('.send_button');
  const name = document.querySelector('.main_destination-name');
  const field = document.querySelector('.main_field-message');
  const scroll = document.querySelector('.main_scroll-field');
  if (button instanceof HTMLButtonElement && name instanceof HTMLElement && scroll instanceof HTMLElement) {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      if (field instanceof HTMLElement && input instanceof HTMLInputElement) {
        if (field.innerHTML.includes('<p class="first_message">You can write your first message...</p>')) {
          field.children[0].remove();
        }
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
  blockButtonAndInput();
};

function blockButtonAndInput() {
  const name = document.querySelector('.main_destination-name');
  const input = document.getElementById('message');
  const button = document.querySelector('.send_button');
  if (name instanceof HTMLElement && input instanceof HTMLElement && button instanceof HTMLElement) {
    if (!name.innerHTML) {
      input.setAttribute('disabled', 'true');
      button.setAttribute('disabled', 'true');
    }
  }
}

export function unBlockButtonAndInput(name: string) {
  const input = document.getElementById('message');
  const button = document.querySelector('.send_button');
  if (input instanceof HTMLElement && button instanceof HTMLElement) {
    if (name) {
      input.removeAttribute('disabled');
      button.removeAttribute('disabled');
    }
  }
}

export function sendMessageClickButton() {
  const input = document.getElementById('message');
  const name = document.querySelector('.main_destination-name');
  const field = document.querySelector('.main_field-message');
  const scroll = document.querySelector('.main_scroll-field');
  if (name instanceof HTMLElement && scroll instanceof HTMLElement && input instanceof HTMLInputElement) {
    document.addEventListener('keydown', (e) => {
      console.log(input.value);
      if (e.key === 'Enter' && input.value) {
        e.preventDefault();
        if (field instanceof HTMLElement && input instanceof HTMLInputElement) {
          if (field.innerHTML.includes('<p class="first_message">You can write your first message...</p>')) {
            field.children[0].remove();
          }
          const message = document.createElement('p');
          message.className = `message ${name.innerHTML}`;
          sendMessageToUser(name.innerHTML, input.value);
          message.textContent = input.value;
          message.style.alignItems = 'end';
          field.append(message);
        }
        scroll.scrollTop = scroll.scrollHeight;
      }
    });
  }
  blockButtonAndInput();
}
