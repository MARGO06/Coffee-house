import { getMessage } from '../websocket/getMessage';
import { Message } from '../elements/types';
import { options } from './send-message';
import { wrapperDates, wrapperStatus } from '../elements/wrapper/wrapper';
import { messageData, messageText, statusDelivery, statusEdit, userName } from '../elements/text/text';
import { exitNewActive } from './create-new-active';

export const countMessage = async () => {
  const data = await getMessage();
  const active = document.querySelectorAll('.users_active');
  const inactive = document.querySelectorAll('.users_inactive');
  const allUsers = Array.from(active).concat(Array.from(inactive));
  const messageCounts = document.querySelectorAll('.message');
  console.log(data);
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

async function showMessage(user: Element, data: Message) {
  const name = document.querySelector('.main_destination-name');
  const field = document.querySelector('.main_field-message');
  const scroll = document.querySelector('.main_scroll-field');
  if (field instanceof HTMLElement) {
    if (field.innerHTML.includes('<p class="first_message">You can write your first message...</p>')) {
      field.children[0].remove();
    }
    const messageWrapper = document.createElement('div');
    messageWrapper.className = `message ${user.innerHTML}`;
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
      const message = data.payload.message;
      const messageDates = wrapperDates.createElement();
      const nameSend = userName.createElement();
      nameSend.textContent = message.from;
      const dataSend = messageData.createElement();
      const dataMessage = new Intl.DateTimeFormat('en-US', options).format(message.datetime);
      dataSend.textContent = dataMessage;
      const textMessage = messageText.createElement();
      textMessage.textContent = message.text;
      const messageStatus = wrapperStatus.createElement();
      const editStatus = statusEdit.createElement();
      const deliveryStatus = statusDelivery.createElement();
      messageDates.append(nameSend, dataSend);
      messageStatus.append(editStatus, deliveryStatus);
      messageWrapper.append(messageDates, textMessage, messageStatus);
      field.append(messageWrapper);
      scroll.scrollTop = scroll.scrollHeight;
    }
  }
  exitNewActive();
  return field;
}
