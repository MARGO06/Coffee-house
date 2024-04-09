export const socket = new WebSocket('ws://127.0.0.1:4000');

export const sendMessage = function () {
  return new Promise((resolve) => {
    let wrongAnswer;
    socket.addEventListener('message', (event) => {
      const answer = JSON.parse(event.data);
      if (answer.type === 'USER_LOGIN') {
        wrongAnswer = answer.type;
        resolve(wrongAnswer);
      } else {
        wrongAnswer = answer.payload.error;
        resolve(wrongAnswer);
      }
    });
  });
};
