import { wrapperModal, windowModal, backgroundModal } from '../wrapper/wrapper';
import { buttonModal } from '../button/button';

import './modal.css';

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
