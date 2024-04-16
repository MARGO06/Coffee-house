import { getActiveUsers, activeUsers } from '../../websocket/all-authenticated-users';
import { wrapperLeft } from '../wrapper/wrapper';
import { inactiveUsers } from '../../websocket/all-unauthenticated-users';

import './main-left-side.css';

class LeftWrapper {
  async createLeftSide() {
    const wrapper = wrapperLeft.createElement();
    const active = await this.createActiveUsers();
    const inactive = await this.createInactiveUsers();
    wrapper.append(active, inactive);
    return wrapper;
  }

  async createActiveUsers() {
    const name = sessionStorage.getItem('first name');
    const active = document.createElement('ul');
    active.className = 'active';
    activeUsers();
    const answer = await getActiveUsers();
    if (answer.type === 'USER_ACTIVE') {
      const users = answer.payload.users;
      users.forEach((user) => {
        if (user.login !== name) {
          const userActive = document.createElement('li');
          userActive.className = 'users_active';
          userActive.textContent = user.login;
          const countMessages = document.createElement('div');
          countMessages.className = `count ${user.login}`;
          countMessages.dataset.count = `0`;
          active.append(userActive, countMessages);
        }
      });
    }
    return active;
  }

  async createInactiveUsers() {
    const inactive = document.createElement('ul');
    inactive.className = 'inactive';
    inactiveUsers();
    const answer = await getActiveUsers();
    if (answer.type === 'USER_INACTIVE') {
      const users = answer.payload.users;
      users.forEach((user) => {
        const userActive = document.createElement('li');
        userActive.className = 'users_inactive';
        userActive.textContent = user.login;
        const countMessages = document.createElement('div');
        countMessages.className = `count ${user.login}`;
        countMessages.dataset.count = `0`;
        inactive.append(userActive, countMessages);
      });
    }
    return inactive;
  }
}
export const user = new LeftWrapper();
