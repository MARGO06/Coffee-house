import { socket } from '../websocket/send-message';
import { AllPages } from '../pages/all-pages';

export const sendForm = () => {
  const form = document.querySelector('.login_form') as HTMLElement;
  const nameInput = document.getElementById('name') as HTMLInputElement;
  const passwordInput = document.getElementById('password') as HTMLInputElement;
  form.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      form.dispatchEvent(new Event('submit'));
      if (nameInput.validity.valid && passwordInput.validity.valid) {
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
        const window = new AllPages();
        window.showModalWindows();
      }
    }
  });
};
