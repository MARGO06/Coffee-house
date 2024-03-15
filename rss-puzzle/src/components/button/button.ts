import './button.css';
type Btn = {
  type: string;
  text: string;
  name: string;
};

const buttonLogin: Btn = {
  type: 'submit',
  text: 'Login',
  name: 'login_button',
};

const buttonLogout: Btn = {
  type: 'button',
  text: 'Logout',
  name: 'logout_button',
};

const buttonSt: Btn = {
  type: 'button',
  text: 'Start',
  name: 'start_button',
};

class Button {
  type: string;
  text: string;
  name: string;

  constructor(button: Btn) {
    this.type = button.type;
    this.text = button.text;
    this.name = button.name;
  }

  createButton() {
    const button = document.createElement('button');
    button.setAttribute('type', this.type);
    button.textContent = this.text;
    button.className = this.name;
    return button;
  }
}

export const buttonLog = new Button(buttonLogin);
export const buttonOut = new Button(buttonLogout);
export const buttonStart = new Button(buttonSt);
