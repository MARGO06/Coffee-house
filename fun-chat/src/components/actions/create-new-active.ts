import { sendHistoryRequest } from '../websocket/sendHistoryRequest';
import { getNewActive } from '../websocket/user_external';
import { countMessage } from './getMessageFromUser';

import { searchName } from './search-name';
import { unBlockButtonAndInput, blockInputMessage } from './send-message';

import { showAllHistoryMessages } from './showHistoryMessage';

export const newActive = async () => {
  const active = document.querySelector('.active');
  const inactive = document.querySelectorAll('.users_inactive');
  const nameDestination = document.querySelector('.main_destination-name');
  const status = document.querySelector('.main_destination-status');
  const field = document.querySelector('.main_field-message');
  const answer = await getNewActive();
  if (answer.type === 'USER_EXTERNAL_LOGIN' || answer.type === 'USER_LOGIN') {
    const users = answer.payload.user.login;
    inactive.forEach((name) => {
      if (name.innerHTML === users) {
        name.remove();
        deleteCount(users);
        if (nameDestination instanceof HTMLElement && status instanceof HTMLElement) {
          if (name.innerHTML === nameDestination.innerHTML) {
            status.innerHTML = 'active';
            status.style.color = 'rgb(27, 243, 8)';
            countMessage();
            name.remove();
            deleteCount(users);
          }
        }
      }
    });
    const userActive = document.createElement('li');
    userActive.className = 'users_active';
    userActive.textContent = users;
    const countMessages = document.createElement('div');
    countMessages.className = `count ${users}`;
    countMessages.dataset.count = `0`;
    userActive.addEventListener('click', (e) => {
      e.preventDefault();
      if (nameDestination instanceof HTMLElement && status instanceof HTMLElement && field instanceof HTMLElement) {
        nameDestination.innerHTML = users;
        status.innerHTML = 'active';
        status.style.color = 'rgb(27, 243, 8)';
        unBlockButtonAndInput(nameDestination.innerHTML);
        createFirstScreen();
        blockInputMessage();
      }
      sendHistoryRequest(users);
      showAllHistoryMessages();
    });
    searchName(userActive);
    if (active instanceof HTMLUListElement) active.append(userActive, countMessages);
  }
  exitNewActive();
  return active;
};

export async function exitNewActive() {
  const answer = await getNewActive();
  if (answer.type === 'USER_EXTERNAL_LOGOUT' || answer.type === 'USER_LOGOUT') {
    const logout = document.querySelectorAll('.users_active');
    const inactive = document.querySelector('.inactive');
    const users = answer.payload.user.login;
    logout.forEach((name) => {
      if (name.innerHTML === users) {
        name.remove();
        const userActive = document.createElement('li');
        userActive.className = 'users_inactive';
        userActive.textContent = users;
        const countMessages = document.createElement('div');
        countMessages.className = `count ${users}`;
        countMessages.dataset.count = `0`;
        deleteCount(name.innerHTML);
        changeStatus(name.innerHTML);
        if (inactive instanceof HTMLElement) inactive.append(userActive, countMessages);
      }
      newActive();
    });
  }
}

function deleteCount(data: string) {
  const counts = document.querySelectorAll('.count');
  counts.forEach((count) => {
    if (count.classList.contains(data)) {
      count.remove();
    }
  });
}

function changeStatus(data: string) {
  const nameDestination = document.querySelector('.main_destination-name');
  const status = document.querySelector('.main_destination-status');
  if (nameDestination instanceof HTMLElement && status instanceof HTMLElement) {
    if (nameDestination.innerHTML === data) {
      status.innerHTML = 'inactive';
      status.style.color = 'rgba(194, 6, 6, 0.847)';
    }
  }
}

export function createFirstScreen() {
  const field = document.querySelector('.main_field-message');
  if (field instanceof HTMLElement) {
    field.innerHTML = '<p class="first_message">You can write your first message...</p>';
    field.style.height = '100%';
    field.style.justifyContent = 'center';
  }
  return field;
}
