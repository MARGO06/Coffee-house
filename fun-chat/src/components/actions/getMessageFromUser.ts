import { getMessage } from '../websocket/getMessage';
import { Message } from '../elements/types';

export const countMessage = async () => {
  const data = await getMessage();
  const active = document.querySelectorAll('.users_active');
  const inactive = document.querySelectorAll('.users_inactive');
  const allUsers = Array.from(active).concat(Array.from(inactive));
  const messageCounts = document.querySelectorAll('.message');
  if (data.type === 'MSG_SEND') {
    for (let i = 0; i < allUsers.length; i += 1) {
      if (allUsers[i].innerHTML.includes(data.payload.message.from)) {
        const currentCounts = document.querySelectorAll('.count');
        const count = messageCounts.length + 1;
        currentCounts.forEach((currentCount) => {
          if (currentCount.classList.contains(allUsers[i].innerHTML) && currentCount instanceof HTMLElement) {
            currentCount.dataset.count = `${count}`;
            currentCount.innerHTML = `${count}`;
          }
        });
        showMessage(allUsers[i], data);
      }
    }
  }
  countMessage();
};

function showMessage(user: Element, data: Message) {
  const name = document.querySelector('.main_destination-name');
  const field = document.querySelector('.main_field-message');
  const scroll = document.querySelector('.main_scroll-field');

  const message = document.createElement('p');
  message.className = `message ${user.innerHTML}`;

  if (name instanceof HTMLElement && scroll instanceof HTMLElement) {
    if (!name.innerHTML) {
      message.classList.add('hidden');
    }
    if (name.innerHTML === data.payload.message.from) {
      message.classList.remove('hidden');
    }
    message.textContent = data.payload.message.text;
    message.style.alignSelf = 'start';
    if (field instanceof HTMLElement) {
      if (field.innerHTML.includes('<p class="first_message">You can write your first message...</p>')) {
        field.children[0].remove();
      }
      field.append(message);
    }

    scroll.scrollTop = scroll.scrollHeight;
    return field;
  }
}
