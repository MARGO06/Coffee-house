import { AllMessage } from '../elements/types';
import { getHistoryMessage } from '../websocket/getHistoryRequest';

export const showAllHistoryMessages = async () => {
  const data = await getHistoryMessage();
  const name = document.querySelector('.main_destination-name');
  const field = document.querySelector('.main_field-message');
  const allMessages = data.payload.messages;
  if (name instanceof HTMLElement && field instanceof HTMLElement) {
    allMessages.forEach((message: AllMessage) => {
      if (message != null) {
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
        field.append(messageFrom);
      }
    });
  }
};
