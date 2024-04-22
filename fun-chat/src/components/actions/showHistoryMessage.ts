import { AllMessage } from '../elements/types';
import { getHistoryMessage } from '../websocket/getHistoryRequest';
import { wrapperDates, wrapperStatus } from '../elements/wrapper/wrapper';
import { userName, messageData, messageText, statusDelivery, statusEdit } from '../elements/text/text';
import { options } from './send-message';
import { countMessage } from './getMessageFromUser';
import { exitNewActive } from './create-new-active';
import { showActionWindow } from './deleteMessages';
import { actionsWindow } from '../elements/modal/modal';

export const showAllHistoryMessages = async () => {
  const data = await getHistoryMessage();
  const name = document.querySelector('.main_destination-name');
  const field = document.querySelector('.main_field-message');
  const allMessages = data.payload.messages;
  if (name instanceof HTMLElement && field instanceof HTMLElement) {
    allMessages.forEach((message: AllMessage) => {
      if (message != null) {
        if (field.innerHTML.includes('<p class="first_message">You can write your first message...</p>')) {
          field.children[0].remove();
        }
        const userFrom = message.from;
        const actions = actionsWindow.createActionWindow();
        const messageFrom = document.createElement('div');
        messageFrom.id = message.id;
        const messageDates = wrapperDates.createElement();
        const nameSend = userName.createElement();
        nameSend.textContent = message.from;
        const dataSend = messageData.createElement();
        const dataMessage = new Intl.DateTimeFormat('en-US', options).format(message.datetime);
        dataSend.textContent = dataMessage;
        const textMessage = messageText.createElement();
        const messageStatus = wrapperStatus.createElement();
        const editStatus = statusEdit.createElement();
        const deliveryStatus = statusDelivery.createElement();
        if (userFrom === name.innerHTML) {
          messageFrom.className = `message ${userFrom}`;
          textMessage.textContent = message.text;
          messageFrom.style.alignSelf = 'start';
        }
        if (userFrom === sessionStorage.getItem('first name')) {
          messageFrom.className = `message ${userFrom}`;
          textMessage.textContent = message.text;
          messageFrom.style.alignSelf = 'end';
        }
        field.style.justifyContent = 'end';
        messageDates.append(nameSend, dataSend);
        messageStatus.append(editStatus, deliveryStatus);
        messageFrom.append(actions, messageDates, textMessage, messageStatus);
        field.append(messageFrom);
        showActionWindow(messageFrom);
      }
    });
  }
  countMessage();
  exitNewActive();
};
