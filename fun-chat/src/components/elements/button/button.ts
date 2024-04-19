import { Element, ElementPage } from '../element';

import './button.css';

const loginButton: ElementPage = {
  tag: 'button',
  class: 'login_button',
};

const infoButton: ElementPage = {
  tag: 'button',
  class: 'info_button',
};

const infoButtonChat: ElementPage = {
  tag: 'button',
  class: 'info_button-chat',
};

const modalButton: ElementPage = {
  tag: 'button',
  class: 'modal_button',
};

const logoutButton: ElementPage = {
  tag: 'button',
  class: 'logout_button',
};

const sendButton: ElementPage = {
  tag: 'button',
  class: 'send_button',
};

const backButton: ElementPage = {
  tag: 'button',
  class: 'back_button',
};

class Button extends Element {
  type: string;
  text: string;

  constructor(element: ElementPage, type: string, text: string) {
    super(element);
    this.type = type;
    this.text = text;
  }

  createElement() {
    const button = super.createElement();
    button.setAttribute('type', this.type);
    button.textContent = this.text;
    return button;
  }
}

export const buttonLogin = new Button(loginButton, 'submit', 'Login');
export const buttonInfo = new Button(infoButton, 'button', 'Information');
export const buttonModal = new Button(modalButton, 'button', 'OK');
export const buttonLogout = new Button(logoutButton, 'button', 'Logout');
export const buttonSend = new Button(sendButton, 'button', 'Send');
export const buttonBack = new Button(backButton, 'button', 'Come back');
export const buttonInfoChat = new Button(infoButtonChat, 'button', 'Information');
