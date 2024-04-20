import { Active } from '../elements/types';
import { socket } from './send-message';

export const getActiveUsers = function (): Promise<Active> {
  return new Promise((resolve: (value: Active) => void) => {
    let answer: Active;
    socket.addEventListener('message', (event) => {
      answer = JSON.parse(event.data);
      //console.log(answer);
      resolve(answer);
    });
  });
};

export const activeUsers = () => {
  const data = {
    id: 'user active',
    type: 'USER_ACTIVE',
    payload: null,
  };
  socket.send(JSON.stringify(data));
};
