import { AllMessage } from '../elements/types';
import { getHistoryMessage } from '../websocket/getHistoryRequest';
//import { createFirstScreen } from './create-new-active';

export const showAllHistoryMessages = async () => {
  const data = await getHistoryMessage();
  const name = document.querySelector('.main_destination-name');
  const field = document.querySelector('.main_field-message');
  const allMessages = data.payload.messages;
  // createFirstScreen();

  if (name instanceof HTMLElement && field instanceof HTMLElement) {
    allMessages.forEach((message: AllMessage) => {
      if (message != null) {
        if (field.innerHTML.includes('<p class="first_message">You can write your first message...</p>')) {
          field.children[0].remove();
        }
        const userFrom = message.from;
        const messageFrom = document.createElement('p');
        if (userFrom === name.innerHTML) {
          messageFrom.className = `message ${userFrom}`;
          messageFrom.textContent = `${message.text}`;
          messageFrom.style.alignSelf = 'end';
        }
        if (userFrom === sessionStorage.getItem('first name')) {
          messageFrom.className = `message ${userFrom}`;
          messageFrom.textContent = `${message.text}`;
          messageFrom.style.alignSelf = 'start';
        }
        field.style.justifyContent = 'end';
        field.append(messageFrom);
      }
    });
  }
};
