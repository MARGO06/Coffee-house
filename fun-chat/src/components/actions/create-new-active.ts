import { getNewActive } from '../websocket/user_external';
export const newActive = async () => {
  const active = document.querySelector('.active');
  const answer = await getNewActive();
  if (answer.type === 'USER_EXTERNAL_LOGIN') {
    const users = answer.payload.user.login;
    const userActive = document.createElement('li');
    userActive.className = 'users_active';
    userActive.textContent = users;
    if (active instanceof HTMLUListElement) active.append(userActive);
  }
  return active;
};
