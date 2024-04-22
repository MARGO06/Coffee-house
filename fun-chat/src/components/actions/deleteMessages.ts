import { getDeletedMessage, sendDeletionMessage } from '../websocket/messageDelete';
import { countMessage } from './getMessageFromUser';

export function showActionWindow(message: HTMLElement) {
  message.addEventListener('click', (e) => {
    e.preventDefault();
    message.classList.add('active');
    const actionWindows = document.querySelectorAll('.message_action');
    actionWindows.forEach((actionWindow) => {
      if (actionWindow instanceof HTMLElement && actionWindow.parentElement) {
        if (actionWindow.parentElement.classList.contains('active')) {
          actionWindow.style.display = 'flex';
          actionWindow.classList.add('active');
        }
      }
    });
  });
}

export function deleteMessageByUser(button: HTMLElement) {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    button.classList.add('active');
    const message = button.parentElement?.parentElement;
    const messageId = button.parentElement?.parentElement?.getAttribute('id');
    sendDeletionMessage(`${messageId}`);
    if (message instanceof HTMLElement) {
      message.remove();
    }
  });
}

export async function deleteMessageOfUser() {
  const data = await getDeletedMessage();
  if (data.type === 'MSG_DELETE') {
    const messageId = data.payload.message.id;
    const allMessages = document.querySelectorAll('.message');
    allMessages.forEach((message) => {
      const userId = message.getAttribute('id');
      if (userId === messageId) {
        message.remove();
        countMessage();
      }
    });
  }
  deleteMessageOfUser();
}
