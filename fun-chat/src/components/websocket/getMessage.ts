import { socket } from './send-message';
import { Message } from '../elements/types';

export const getMessage = function (): Promise<Message> {
  return new Promise((resolve: (value: Message) => void) => {
    let answer: Message;
    socket.addEventListener('message', (event) => {
      answer = JSON.parse(event.data);
      console.log(answer);
      resolve(answer);
    });
  });
};
