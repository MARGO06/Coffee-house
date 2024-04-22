import { wrapperModal, windowModal, backgroundModal, actionWindow } from '../wrapper/wrapper';
import { buttonModal, buttonDelete, buttonEdit } from '../button/button';

import './modal.css';
import { deleteMessageByUser } from '../../actions/deleteMessages';
import { editMessageByUser } from '../../actions/editTextMessages';

export class ModalWindow {
  createModalWindow(text: string) {
    const wrapper = wrapperModal.createElement();
    const window = windowModal.createElement();
    const background = backgroundModal.createElement();
    const information = document.createElement('p');
    information.className = 'modal_text';
    information.textContent = text.toUpperCase();
    const button = buttonModal.createElement();
    if (button != null) {
      button.addEventListener('click', (event) => {
        event.preventDefault();
        wrapper?.remove();
        background?.remove();
      });
    }
    window.append(information, button);
    document.body.append(wrapper, background);
    wrapper.append(window);
    return wrapper;
  }
}

class MessageActionWindow {
  createActionWindow() {
    const window = actionWindow.createElement();
    const deleteButton = buttonDelete.createElement();
    deleteMessageByUser(deleteButton);
    const editButton = buttonEdit.createElement();
    editMessageByUser(editButton);
    window.append(deleteButton, editButton);
    return window;
  }
}

export const actionsWindow = new MessageActionWindow();
