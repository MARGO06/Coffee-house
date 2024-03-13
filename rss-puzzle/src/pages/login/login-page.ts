import { label1, input1, requirement1, label2, input2, requirement2 } from '../../components/form/form';
import { buttonLog } from '../../components/button/button';
import './login-page.css';
import login from '../../assets/three.jpg';

export class LoginPage {
  id: string;

  constructor(id: string) {
    this.id = id;
  }

  createPage() {
    const loginWrapper = document.createElement('div');
    loginWrapper.id = this.id;
    document.body.append(loginWrapper);

    loginWrapper.style.backgroundImage = `url(${login})`;
    loginWrapper.style.backgroundSize = 'cover';
    loginWrapper.style.height = '100%';

    const loginContainer = document.createElement('div');
    loginContainer.className = 'login_container';
    loginWrapper.append(loginContainer);

    const form = document.createElement('form');
    form.className = 'login_form';
    loginContainer.append(form);

    form.append(label1);
    form.append(input1);
    form.append(requirement1);
    form.append(label2);
    form.append(input2);
    form.append(requirement2);

    const loginButton = buttonLog.createButton();
    form.append(loginButton);

    location.hash = 'login';
    console.log('kkk');
    return loginWrapper;
  }
}
