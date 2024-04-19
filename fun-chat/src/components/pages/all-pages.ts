import { Login } from './login/login';
import { Chat } from './chat/chat';
import { socket, sendMessage } from '../websocket/send-message';
import { ModalWindow } from '../elements/modal/modal';
import { sendForm } from '../actions/send-form';
import { About } from './about/about';

export class AllPages {
  loginPage: Login;
  chatPage: Chat;
  aboutPage: About;

  constructor() {
    this.loginPage = new Login('login');
    this.chatPage = new Chat('chat');
    this.aboutPage = new About('about');
  }

  createLoginPage() {
    this.loginPage.createPage();
    window.location.hash = 'login';
  }

  createChatPageButton() {
    const form = document.querySelector('.login_form') as HTMLElement;
    const nameInput = document.getElementById('name') as HTMLInputElement;
    const passwordInput = document.getElementById('password') as HTMLInputElement;
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!nameInput.validity.patternMismatch && !passwordInput.validity.patternMismatch) {
        sessionStorage.setItem('first name', nameInput.value);
        sessionStorage.setItem('password', passwordInput.value);
        const data = {
          id: '1',
          type: 'USER_LOGIN',
          payload: {
            user: {
              login: `${nameInput.value}`,
              password: `${passwordInput.value}`,
            },
          },
        };
        socket.send(JSON.stringify(data));
        nameInput.value = '';
        passwordInput.value = '';
        this.showModalWindows();
        this.backToLoginPage();
      }
    });
  }

  createChatPageInput() {
    sendForm();
  }

  showModalWindows() {
    sendMessage().then((result) => {
      if (result === 'USER_LOGIN') {
        document.body.innerHTML = '';
        this.chatPage.createPage();
        window.location.hash = '#chat';
      } else if (result === 'a user with this login is already authorized') {
        const window = new ModalWindow();
        window.createModalWindow(result);
      } else if (result === 'incorrect password') {
        const window = new ModalWindow();
        window.createModalWindow(result);
      }
    });
  }

  backToLoginPage() {
    document.body.innerHTML = '';
    this.createLoginPage();
    this.createChatPageButton();
    this.createChatPageInput();
    this.createAboutPage();
  }

  createAboutPage() {
    const infoButton = document.querySelector('.info_button');
    if (infoButton instanceof HTMLButtonElement) {
      this.backToPage(infoButton);
    }
  }

  backToPage(button: HTMLElement) {
    button.addEventListener('click', (e) => {
      console.log(location.hash);
      e.preventDefault();
      sessionStorage.setItem('location', `${location.hash}`);
      document.body.innerHTML = '';
      this.aboutPage.createPage();
      window.location.hash = 'about';
    });
  }
}
