import { getMessage } from '../websocket/getMessage';
import { Message } from '../elements/types';
import { options } from './send-message';
import { lineSeparator, wrapperDates, wrapperStatus } from '../elements/wrapper/wrapper';
import { messageData, messageText, separatorText, statusDelivery, statusEdit, userName } from '../elements/text/text';
import { exitNewActive } from './create-new-active';
import { clickDisplay, scrollField } from './deleteSeparete';

export const countMessage = async () => {
  const data = await getMessage();

  const active = document.querySelectorAll('.users_active');
  const inactive = document.querySelectorAll('.users_inactive');
  const allUsers = Array.from(active).concat(Array.from(inactive));

  if (data.type === 'MSG_SEND') {
    for (let i = 0; i < allUsers.length; i += 1) {
      if (allUsers[i].innerHTML.includes(data.payload.message.from)) {
        // const currentCounts = document.querySelectorAll('.count');
        // const count = messageCounts.length + 1;
        /* currentCounts.forEach((currentCount) => {
          if (currentCount.classList.contains(allUsers[i].innerHTML) && currentCount instanceof HTMLElement) {
            currentCount.dataset.count = `${count}`;
            currentCount.innerHTML = `${count}`;
          }
        });*/
        showMessage(allUsers[i], data);
        createSeparatorLine();
        clickDisplay();
        scrollField();
        console.log('oooo');
        //  deleteMessage();
        await countMessage();
      }
    }
  }
  exitNewActive();
};

function showMessage(user: Element, data: Message) {
  const name = document.querySelector('.main_destination-name');
  const field = document.querySelector('.main_field-message');
  const scroll = document.querySelector('.main_scroll-field');
  if (field instanceof HTMLElement) {
    if (field.innerHTML.includes('<p class="first_message">You can write your first message...</p>')) {
      field.children[0].remove();
    }

    const messageWrapper = document.createElement('div');
    messageWrapper.className = `message ${user.innerHTML} unread`;
    if (name instanceof HTMLElement && scroll instanceof HTMLElement) {
      if (!name.innerHTML) {
        messageWrapper.classList.add('hidden');
      }
      if (name.innerHTML === data.payload.message.from) {
        messageWrapper.classList.remove('hidden');
      }

      messageWrapper.style.alignSelf = 'start';
      //const wrapper = await createMessage(message);
      // console.log(wrapper);

      const messageN = data.payload.message;
      messageWrapper.id = messageN.id;
      const messageDates = wrapperDates.createElement();
      const nameSend = userName.createElement();
      nameSend.textContent = messageN.from;
      const dataSend = messageData.createElement();
      const dataMessage = new Intl.DateTimeFormat('en-US', options).format(messageN.datetime);
      dataSend.textContent = dataMessage;
      const textMessage = messageText.createElement();
      textMessage.textContent = messageN.text;
      const messageStatus = wrapperStatus.createElement();
      const editStatus = statusEdit.createElement();
      const deliveryStatus = statusDelivery.createElement();
      messageDates.append(nameSend, dataSend);
      messageStatus.append(editStatus, deliveryStatus);
      messageWrapper.append(messageDates, textMessage, messageStatus);
      field.style.justifyContent = 'end';
      field.append(messageWrapper);
      scroll.scrollTop = scroll.scrollHeight;
    }
  }
  exitNewActive();
}

export function createSeparatorLine() {
  const messages = document.querySelectorAll('.unread');
  const separators = document.querySelector('.separator');
  messages.forEach((message, index) => {
    if (index === 0 && !separators) {
      const separator = lineSeparator.createElement();
      const textSeparator = separatorText.createElement();
      message.before(separator);
      separator.appendChild(textSeparator);
    }
  });
}
