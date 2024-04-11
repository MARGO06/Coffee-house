import { socket } from './send-message';

export const userLogout = (name: string, password: string) => {
  socket.addEventListener('message', (event) => {
    console.log(event.data);
  });
  const data = {
    id: '1',
    type: 'USER_LOGOUT',
    payload: {
      user: {
        login: `${name}`,
        password: `${password}`,
      },
    },
  };
  socket.send(JSON.stringify(data));
};
