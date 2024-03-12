import { LabelInput, form1, form2 } from '../../components/form/form';
import { Button, buttonLogin } from '../../components/button/button';
import '../../functions/login-pages-action';
import './login-page.css';
import login from '../../assets/three.jpg';

class LoginPage {
  id: string;

  constructor(id: string) {
    this.id = id;
  }

  createPage() {
    const loginWrapper = document.createElement('div');
    loginWrapper.id = this.id;
    document.body.append(loginWrapper);
    return loginWrapper;
  }
}

const firstName = new LabelInput(form1);
const label1 = firstName.createLabel();
const input1 = firstName.createInput();
const requirement1 = firstName.createRequirements();

const lastName = new LabelInput(form2);
const label2 = lastName.createLabel();
const input2 = lastName.createInput();
const requirement2 = lastName.createRequirements();

const wrapper = new LoginPage('login');
const loginWrap = wrapper.createPage();
loginWrap.style.backgroundImage = `url(${login})`;
loginWrap.style.backgroundSize = 'cover';
loginWrap.style.height = '100%';

const loginContainer = document.createElement('div');
loginContainer.className = 'login_container';
loginWrap.append(loginContainer);

const form = document.createElement('form');
form.className = 'login_form';
loginContainer.append(form);

form.append(label1);
form.append(input1);
form.append(requirement1);
form.append(label2);
form.append(input2);
form.append(requirement2);

const buttonLog = new Button(buttonLogin);
const loginButton = buttonLog.createButton();
form.append(loginButton);
