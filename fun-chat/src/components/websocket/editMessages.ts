import { EditMessage } from '../elements/types';
import { socket } from './send-message';

export const getEditMessage = function (): Promise<EditMessage> {
  return new Promise((resolve: (value: EditMessage) => void) => {
    let answer: EditMessage;
    socket.addEventListener('message', (event) => {
      answer = JSON.parse(event.data);
      resolve(answer);
    });
  });
};

export const sendEditMessage = (id: string, text: string) => {
  const data = {
    id: 'edit_message',
    type: 'MSG_EDIT',
    payload: {
      message: {
        id: `${id}`,
        text: `${text}`,
      },
    },
  };
  socket.send(JSON.stringify(data));
};
