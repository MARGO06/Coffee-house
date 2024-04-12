import { wrapperRight, wrapperDestination } from '../wrapper/wrapper';
import { destinationName, statusDestination } from '../text/text';
export class RightSide {
  createRightSide() {
    const rightWrapper = wrapperRight.createElement();
    const destinationWrapper = wrapperDestination.createElement();
    const name = destinationName.createElement();
    const status = statusDestination.createElement();
    rightWrapper.append(destinationWrapper);
    destinationWrapper.append(name, status);
    return rightWrapper;
  }

  getNameDestination() {
    const inactive = document.querySelectorAll('.users_inactive');
    const active = document.querySelectorAll('.users_active');
    const allUsers = Array.from(active).concat(Array.from(inactive));
    const nameDestination = document.querySelector('.main_destination-name');
    const status = document.querySelector('.main_destination-status');
    allUsers.forEach((name) => {
      name.addEventListener('click', (e) => {
        e.preventDefault();
        if (nameDestination instanceof HTMLElement && status instanceof HTMLElement) {
          nameDestination.innerHTML = name.innerHTML;
          console.log(name.className);
          if (name.className === 'users_inactive') {
            status.innerHTML = 'inactive';
            status.style.color = 'rgba(194, 6, 6, 0.847)';
          }
          if (name.className === 'users_active') {
            status.innerHTML = 'active';
            status.style.color = 'rgb(27, 243, 8)';
          }
        }

        console.log(name.innerHTML);
      });
    });
  }
}

export const rightWrapper = new RightSide();
