import { wrap, paginationContainer } from './components/elements/wrapper/wrapper';
import { allHeader } from './components/page-elements/header/header';
import { createView } from './components/page-elements/view/view';
import { garagePage } from './components/page-elements/one-page/one-page';
import { btnPrev, btnNext } from './components/elements/button/button';
import { pageWinner } from './components/page-elements/second-page/second-page';
import { partsPages } from './components/functions/change-pages';
import { car } from './components/functions/create-car';
import { carChange } from './components/functions/update-car';
import { carDelete } from './components/functions/delete-car';
import { carsGenerate } from './components/functions/generate-car';

import './style.css';

class Page {
  createPage() {
    const wrapper = wrap.createElement();
    document.body.append(wrapper);
    const header = allHeader.collectElements();
    wrapper.append(header);
    const view = createView.createElement();
    wrapper.append(view);
    const garage = garagePage.createPartPage();
    wrapper.append(garage);
    const winners = pageWinner.createPartPage();
    wrapper.append(winners);
    const pagination = paginationContainer.createElement();
    const buttonPrev = btnPrev.createElement();
    const buttonNext = btnNext.createElement();
    buttonNext.setAttribute('data-page', '1');
    buttonPrev.setAttribute('data-page', '1');
    buttonPrev.setAttribute('disabled', '');
    pagination.append(buttonPrev);
    pagination.append(buttonNext);
    wrapper.append(pagination);
  }
  createCar() {
    return car.getValues();
  }
  updateCar() {
    return carChange.choiceCar();
  }

  deleteCar() {
    return carDelete.choiceCar();
  }
}
export const page = new Page();
page.createPage();
page.createCar();
page.deleteCar();

page.updateCar();

partsPages.activeButton();
carsGenerate.clickGenerateCars();
