import { getActiveUsers, activeUsers } from '../../websocket/all-authenticated-users';
import { wrapperLeft } from '../wrapper/wrapper';
import { inactiveUsers } from '../../websocket/all-unauthenticated-users';

class LeftWrapper {
  async createLeftSide() {
    const wrapper = wrapperLeft.createElement();
    const active = await this.createActiveUsers();
    const inactive = await this.createInactiveUsers();
    wrapper.append(active, inactive);
    return wrapper;
  }

  async createActiveUsers() {
    const active = document.createElement('ul');
    active.className = 'active';
    activeUsers();
    const answer = await getActiveUsers();
    if (answer.type === 'USER_ACTIVE') {
      const users = answer.payload.users;
      users.forEach((user) => {
        const userActive = document.createElement('li');
        userActive.className = 'users_active';
        userActive.textContent = user.login;
        active.append(userActive);
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
        inactive.append(userActive);
      });
    }
    return inactive;
  }
}
export const user = new LeftWrapper();
