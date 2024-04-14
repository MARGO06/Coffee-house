import { getNewActive } from '../websocket/user_external';

export const newActive = async () => {
  const active = document.querySelector('.active');
  const answer = await getNewActive();
  if (answer.type === 'USER_EXTERNAL_LOGIN') {
    const users = answer.payload.user.login;
    const userActive = document.createElement('li');
    userActive.className = 'users_active';
    userActive.textContent = users;
    userActive.addEventListener('click', (e) => {
      const nameDestination = document.querySelector('.main_destination-name');
      const status = document.querySelector('.main_destination-status');
      e.preventDefault();
      if (nameDestination instanceof HTMLElement && status instanceof HTMLElement) {
        nameDestination.innerHTML = users;
        status.innerHTML = 'active';
        status.style.color = 'rgb(27, 243, 8)';
      }
    });
    if (active instanceof HTMLUListElement) active.append(userActive);
  }
  exitNewActive();
  return active;
};

export async function exitNewActive() {
  const answer = await getNewActive();
  if (answer.type === 'USER_EXTERNAL_LOGOUT' || answer.type === 'USER_LOGOUT') {
    const logout = document.querySelectorAll('.users_active');
    const users = answer.payload.user.login;
    console.log(users, logout);
    logout.forEach((name) => {
      if (name.innerHTML === users) {
        name.remove();
      }
    });
    newActive();
  }
}
