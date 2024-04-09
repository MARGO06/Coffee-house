import { Login } from './login/login';
import { Chat } from './chat/chat';
import { socket, sendMessage } from '../websocket/send-message';
import { ModalWindow } from '../elements/modal/modal';

export class AllPages {
  loginPage: Login;
  chatPage: Chat;

  constructor() {
    this.loginPage = new Login('login');
    this.chatPage = new Chat('chat');
  }

  createLoginPage() {
    this.loginPage.createPage();
    window.location.hash = 'login';
  }

  createChatPage() {
    const form = document.querySelector('.login_form') as HTMLElement;
    const nameInput = document.getElementById('name') as HTMLInputElement;
    const passwordInput = document.getElementById('password') as HTMLInputElement;
    form.addEventListener('submit', () => {
      if (!nameInput.validity.patternMismatch && !passwordInput.validity.patternMismatch) {
        localStorage.setItem('first name', nameInput.value);
        localStorage.setItem('password', passwordInput.value);
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
      }
    });
  }

  private showModalWindows() {
    sendMessage().then((result) => {
      console.log(result);
      if (result === 'USER_LOGIN') {
        document.body.innerHTML = '';
        this.chatPage.createPage();
        window.location.hash = '#chat';
        console.log('hhh');
      }
      if (result === 'a user with this login is already authorized') {
        const window = new ModalWindow();
        const modal = window.createModalWindow(result);
        const background = document.querySelector('.modal_background');
        modal.classList.remove('hidden');
        if (background != null) background.classList.remove('hidden');
      }
      if (result === 'incorrect password') {
        const window = new ModalWindow();
        const modal = window.createModalWindow(result);
        const background = document.querySelector('.modal_background');
        modal.classList.remove('hidden');
        if (background != null) background.classList.remove('hidden');
      }
    });
  }
}
