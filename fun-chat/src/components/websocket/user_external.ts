import { NewActive } from '../elements/types';
import { socket } from './send-message';
export const getNewActive = function (): Promise<NewActive> {
  return new Promise((resolve: (value: NewActive) => void) => {
    let answer: NewActive;
    socket.addEventListener('message', (event) => {
      answer = JSON.parse(event.data);
      resolve(answer);
    });
  });
};
