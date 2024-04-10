import { socket } from '../websocket/send-message';
export const sendForm = () => {
  const form = document.querySelector('.login_form') as HTMLElement;
  const nameInput = document.getElementById('name') as HTMLInputElement;
  const passwordInput = document.getElementById('password') as HTMLInputElement;
  form.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
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
        if (form instanceof HTMLFormElement) form.submit();
        nameInput.value = '';
        passwordInput.value = '';
      }
    }
  });
};
