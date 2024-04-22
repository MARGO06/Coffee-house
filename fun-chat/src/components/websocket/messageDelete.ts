import { deletedMessage } from '../elements/types';
import { socket } from './send-message';

export const getDeletedMessage = function (): Promise<deletedMessage> {
  return new Promise((resolve: (value: deletedMessage) => void) => {
    let answer: deletedMessage;
    socket.addEventListener('message', (event) => {
      answer = JSON.parse(event.data);
      console.log(answer);
      resolve(answer);
    });
  });
};

export const sendDeletionMessage = (id: string) => {
  const data = {
    id: 'deletion_message',
    type: 'MSG_DELETE',
    payload: {
      message: {
        id: `${id}`,
      },
    },
  };
  socket.send(JSON.stringify(data));
};
