import { LabelInput, form1, form2 } from '../../components/form/input';

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

const LastName = new LabelInput(form2);
const label2 = LastName.createLabel();
const input2 = LastName.createInput();

const wrapper = new LoginPage('login_wrapper');
const loginWrap = wrapper.createPage();

const form = document.createElement('form');
form.className = 'login-form';
loginWrap.append(form);

form.append(label1);
form.append(input1);
form.append(label2);
form.append(input2);
