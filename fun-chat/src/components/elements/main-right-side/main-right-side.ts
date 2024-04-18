import { wrapperRight, wrapperDestination, messageSend, messageField, fieldScroll } from '../wrapper/wrapper';
import { destinationName, mainNotUser, statusDestination } from '../text/text';
import { newMessage } from '../label-input/label-input';
import { buttonSend } from '../button/button';
import { sendHistoryRequest } from '../../websocket/sendHistoryRequest';
import { createFirstScreen } from '../../actions/create-new-active';
import { unBlockButtonAndInput, blockInputMessage } from '../../actions/send-message';

import './main-right-side.css';
import { showAllHistoryMessages } from '../../actions/showHistoryMessage';

export class RightSide {
  createRightSide() {
    const rightWrapper = wrapperRight.createElement();
    const destinationWrapper = wrapperDestination.createElement();
    const name = destinationName.createElement();
    const status = statusDestination.createElement();
    const scroll = fieldScroll.createElement();
    const field = messageField.createElement();
    field.style.height = '100%';
    field.style.justifyContent = 'center';
    const text = mainNotUser.createElement();
    const send = messageSend.createElement();
    const sendButton = buttonSend.createElement();
    send.append(newMessage, sendButton);
    field.append(text);
    scroll.append(field);
    rightWrapper.append(destinationWrapper, scroll, send);
    destinationWrapper.append(name, status);
    return rightWrapper;
  }

  getNameDestination() {
    const inactive = document.querySelectorAll('.users_inactive');
    const active = document.querySelectorAll('.users_active');
    const allUsers = Array.from(active).concat(Array.from(inactive));
    const nameDestination = document.querySelector('.main_destination-name');
    const status = document.querySelector('.main_destination-status');
    const field = document.querySelector('.main_field-message');
    allUsers.forEach((name) => {
      name.addEventListener('click', (e) => {
        e.preventDefault();
        createFirstScreen();
        if (nameDestination instanceof HTMLElement && status instanceof HTMLElement && field instanceof HTMLElement) {
          nameDestination.innerHTML = name.innerHTML;
          unBlockButtonAndInput(nameDestination.innerHTML);
          if (name.className === 'users_inactive') {
            status.innerHTML = 'inactive';
            status.style.color = 'rgba(194, 6, 6, 0.847)';
          }
          if (name.className === 'users_active') {
            status.innerHTML = 'active';
            status.style.color = 'rgb(27, 243, 8)';
          }
        }
        blockInputMessage();
        sendHistoryRequest(name.innerHTML);
        showAllHistoryMessages();
      });
    });
  }
}

export const rightWrapper = new RightSide();
