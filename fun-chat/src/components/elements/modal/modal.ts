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
    window.append(information, button);
    document.body.append(wrapper, background);
    wrapper.append(window);
    this.closeModalWindow();
    return wrapper;
  }

  closeModalWindow() {
    const button = document.querySelector('.modal_button');
    const wrapper = document.querySelector('.modal_wrapper');
    const background = document.querySelector('.modal_background');
    if (button != null) {
      button.addEventListener('click', (event: Event) => {
        event.preventDefault();
        wrapper?.classList.add('hidden');
        background?.classList.add('hidden');
        window.location.hash = 'login';
        console.log('hello');
      });
    }
  }
}
