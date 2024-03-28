import { deleteCar } from '../../api-requests/delete-car';

class DeleteCar {
  id: number;
  index: number;
  constructor() {
    this.id = 0;
    this.index = 0;
  }

  choiceCar() {
    const buttonSelect = document.getElementById('garage');
    const containers = buttonSelect?.children;
    if (buttonSelect != null) {
      buttonSelect.addEventListener('click', (e: Event) => {
        e.preventDefault();
        if (e.target instanceof HTMLElement && e.target.classList.contains('btn_reset')) {
          this.id = Number(e.target.id);
          if (containers != undefined) {
            Array.from(containers).forEach((element, index) => {
              if (Number(element.id) === this.id) {
                this.index = index;
              }
            });
          }
          this.getCars();
          this.deleteCarOnServer();
        }
      });
    }
  }

  deleteCarOnServer() {
    deleteCar(`http://127.0.0.1:3000/garage/${this.id}`).then((data) => {
      this.id = data.id;
    });
  }

  getCars() {
    const garage = document.getElementById('garage');
    if (garage != undefined) {
      garage.removeChild(garage.childNodes[this.index]);
    }
    return garage;
  }
}

export const carDelete = new DeleteCar();
