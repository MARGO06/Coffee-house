import { sendMessageToUser } from '../websocket/send-message-to-user';
import { getMessage } from '../websocket/getMessage';
import { wrapperDates, wrapperStatus } from '../elements/wrapper/wrapper';
import { userName, messageText, messageData, statusDelivery, statusEdit } from '../elements/text/text';
import { exitNewActive } from './create-new-active';
import { countMessage } from './getMessageFromUser';
import { clickSendButton } from './deleteSeparete';
import { showActionWindow } from './deleteMessages';
import { actionsWindow } from '../elements/modal/modal';

export const options: Intl.DateTimeFormatOptions = {
  month: '2-digit',
  day: '2-digit',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
};

export const sendMessage = () => {
  const input = document.getElementById('message');
  const button = document.querySelector('.send_button');
  const name = document.querySelector('.main_destination-name');
  const field = document.querySelector('.main_field-message');
  const scroll = document.querySelector('.main_scroll-field');
  if (button instanceof HTMLButtonElement && name instanceof HTMLElement && scroll instanceof HTMLElement) {
    button.addEventListener('click', async (e) => {
      e.preventDefault();
      console.log('sss');
      if (field instanceof HTMLElement && input instanceof HTMLInputElement) {
        if (field.innerHTML.includes('<p class="first_message">You can write your first message...</p>')) {
          field.children[0].remove();
        }
        const message = document.createElement('div');
        message.className = `message ${name.innerHTML}`;
        sendMessageToUser(name.innerHTML, input.value);
        message.style.alignItems = 'end';
        const wrapper = await createMessage(message);
        field.style.justifyContent = 'end';
        field.append(wrapper);
        input.value = '';
        showActionWindow(message);
        clickSendButton();
      }
      scroll.scrollTop = scroll.scrollHeight;
      blockInputMessage();
      await countMessage();
    });
  }
  exitNewActive();
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
  console.log('hhhh');
  const input = document.getElementById('message');
  const name = document.querySelector('.main_destination-name');
  const field = document.querySelector('.main_field-message');
  const scroll = document.querySelector('.main_scroll-field');
  const button = document.querySelector('.send_button');
  if (
    name instanceof HTMLElement &&
    scroll instanceof HTMLElement &&
    input instanceof HTMLInputElement &&
    field instanceof HTMLElement &&
    button instanceof HTMLButtonElement
  ) {
    input.addEventListener('keydown', async (e) => {
      if (e.key === 'Enter') {
        if (!input.value) {
          e.preventDefault();
        }
        if (input.value) {
          e.preventDefault();

          if (field.innerHTML.includes('<p class="first_message">You can write your first message...</p>')) {
            field.children[0].remove();
          }
          const message = document.createElement('p');
          message.className = `message ${name.innerHTML}`;
          sendMessageToUser(name.innerHTML, input.value);
          message.style.alignSelf = 'end';
          message.style.justifyContent = 'end';
          const wrapper = await createMessage(message);
          wrapper.id = message.id;
          field.append(wrapper);
          input.value = '';
          button.setAttribute('disabled', 'true');
          await countMessage();
          scroll.scrollTop = scroll.scrollHeight;
        }
      }
    });
  }
  blockButtonAndInput();
  exitNewActive();
}

export async function createMessage(wrapper: HTMLElement) {
  const data = await getMessage();
  const actions = actionsWindow.createActionWindow();
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
  wrapper.id = message.id;
  console.log(wrapper);
  console.log(wrapper.id);
  wrapper.append(actions, messageDates, textMessage, messageStatus);
  return wrapper;
}

export function blockInputMessage() {
  const input = document.getElementById('message');
  const button = document.querySelector('.send_button');
  if (input instanceof HTMLInputElement && button instanceof HTMLButtonElement) {
    if (!input.value) {
      button.setAttribute('disabled', 'true');
    }
    input.addEventListener('input', () => {
      if (input.value) {
        button.removeAttribute('disabled');
      }
    });
  }
}
