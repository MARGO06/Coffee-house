import { sendHistoryRequest } from '../websocket/sendHistoryRequest';
import { getNewActive } from '../websocket/user_external';
import { showAllHistoryMessages } from './showHistoryMessage';

export const newActive = async () => {
  const active = document.querySelector('.active');
  const inactive = document.querySelectorAll('.users_inactive');
  const nameDestination = document.querySelector('.main_destination-name');
  const status = document.querySelector('.main_destination-status');
  const answer = await getNewActive();
  if (answer.type === 'USER_EXTERNAL_LOGIN' || answer.type === 'USER_ACTIVE') {
    const users = answer.payload.user.login;
    const userActive = document.createElement('li');
    userActive.className = 'users_active';
    userActive.textContent = users;
    const countMessages = document.createElement('div');
    countMessages.className = `count ${users}`;
    countMessages.dataset.count = `0`;
    inactive.forEach((name) => {
      if (name.innerHTML === users) {
        console.log(name.innerHTML);
        name.remove();
        deleteCount(users);
      }
    });
    userActive.addEventListener('click', (e) => {
      e.preventDefault();
      if (nameDestination instanceof HTMLElement && status instanceof HTMLElement) {
        nameDestination.innerHTML = users;
        status.innerHTML = 'active';
        status.style.color = 'rgb(27, 243, 8)';
      }
      sendHistoryRequest(users);
      showAllHistoryMessages();
      newActive();
      exitNewActive();
    });

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
    });

    newActive();
  }
}

function deleteCount(data: string) {
  const counts = document.querySelectorAll('.count');
  counts.forEach((count) => {
    if (count.classList.contains(data)) {
      console.log(count);
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
