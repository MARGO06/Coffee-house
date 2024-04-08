import { Page } from '../pages';
import { wrapperLogin } from '../../elements/wrapper/wrapper';
import { loginForm } from '../../elements/form/form';

import './login.css';

export class Login extends Page {
  constructor(id: string) {
    super(id);
  }

  createPage() {
    const page = document.createElement('div');
    page.id = this.id;
    const wrapper = wrapperLogin.createElement();
    const form = loginForm.createElement();
    page.append(wrapper);
    wrapper.append(form);
    document.body.append(page);
  }
}
