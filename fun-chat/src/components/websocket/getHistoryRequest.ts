import { socket } from './send-message';
import { HistoryMessage } from '../elements/types';

export const getHistoryMessage = function (): Promise<HistoryMessage> {
  return new Promise((resolve: (value: HistoryMessage) => void) => {
    let answer: HistoryMessage;
    socket.addEventListener('message', (event) => {
      answer = JSON.parse(event.data);
      // console.log(answer);
      resolve(answer);
    });
  });
};
