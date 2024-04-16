import { wrapperRight, wrapperDestination, messageSend, messageField } from '../wrapper/wrapper';
import { destinationName, statusDestination } from '../text/text';
import { newMessage } from '../label-input/label-input';
import { buttonSend } from '../button/button';

import './main-right-side.css';

export class RightSide {
  createRightSide() {
    const rightWrapper = wrapperRight.createElement();
    const destinationWrapper = wrapperDestination.createElement();
    const name = destinationName.createElement();
    const status = statusDestination.createElement();
    const field = messageField.createElement();
    const send = messageSend.createElement();
    const sendButton = buttonSend.createElement();
    send.append(newMessage, sendButton);
    rightWrapper.append(destinationWrapper, field, send);
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
        if (field instanceof HTMLElement) field.innerHTML = '';
        if (nameDestination instanceof HTMLElement && status instanceof HTMLElement) {
          nameDestination.innerHTML = name.innerHTML;
          if (name.className === 'users_inactive') {
            status.innerHTML = 'inactive';
            status.style.color = 'rgba(194, 6, 6, 0.847)';
          }
          if (name.className === 'users_active') {
            status.innerHTML = 'active';
            status.style.color = 'rgb(27, 243, 8)';
          }
        }
      });
    });
  }
}

export const rightWrapper = new RightSide();
