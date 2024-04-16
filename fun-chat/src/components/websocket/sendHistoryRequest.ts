import { socket } from './send-message';
export const sendHistoryRequest = (name: string) => {
  const data = {
    id: 'send-history',
    type: 'MSG_FROM_USER',
    payload: {
      user: {
        login: `${name}`,
      },
    },
  };
  socket.send(JSON.stringify(data));
};
