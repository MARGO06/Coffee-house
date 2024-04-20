import { socket } from './send-message';
export const sendMessageToUser = (name: string, message: string) => {
  const data = {
    id: 'send-message',
    type: 'MSG_SEND',
    payload: {
      message: {
        to: `${name}`,
        text: `${message}`,
      },
    },
  };
  socket.send(JSON.stringify(data));
  console.log(data);
};
