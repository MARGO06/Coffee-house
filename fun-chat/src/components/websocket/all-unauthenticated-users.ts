import { socket } from './send-message';
import { Active } from '../elements/types';

export const getActiveUsers = function (): Promise<Active> {
  return new Promise((resolve: (value: Active) => void) => {
    let answer: Active;
    socket.addEventListener('message', (event) => {
      answer = JSON.parse(event.data);
      // console.log(answer);
      resolve(answer);
    });
  });
};
export const inactiveUsers = () => {
  const data = {
    id: 'user inactive',
    type: 'USER_INACTIVE',
    payload: null,
  };
  socket.send(JSON.stringify(data));
};
