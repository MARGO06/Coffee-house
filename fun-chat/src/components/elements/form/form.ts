import { Element, ElementPage } from '../element';
import { label1, label2, input1, input2, requirement1, requirement2 } from '../label-input/label-input';
import { buttonLogin, buttonInfo } from '../button/button';

import './form.css';

const form: ElementPage = {
  tag: 'form',
  class: 'login_form',
};

class Form extends Element {
  constructor(element: ElementPage) {
    super(element);
  }

  createElement() {
    const formLogin = super.createElement();
    if (formLogin instanceof HTMLFormElement) {
      formLogin.action = '#';
      formLogin.append(label1, input1, requirement1);
      formLogin.append(label2, input2, requirement2);
    }
    const loginButton = buttonLogin.createElement();
    loginButton.setAttribute('disabled', '');
    const infoButton = buttonInfo.createElement();
    formLogin.append(loginButton, infoButton);
    return formLogin;
  }
}

export const loginForm = new Form(form);
