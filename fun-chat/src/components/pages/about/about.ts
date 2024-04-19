import { Page } from '../pages';
import { wrapperAbout, informationAbout } from '../../elements/wrapper/wrapper';
import { informationApp } from '../../elements/text/text';
import { buttonBack } from '../../elements/button/button';
import { backFromAboutPage } from '../../actions/exitAboutPage';

import './about.css';

export class About extends Page {
  constructor(id: string) {
    super(id);
  }

  createPage() {
    const page = document.createElement('div');
    page.id = this.id;
    const wrapper = wrapperAbout.createElement();
    const wrapperInformation = informationAbout.createElement();
    const information = informationApp.createElement();
    const button = buttonBack.createElement();
    wrapperInformation.append(information, button);
    wrapper.append(wrapperInformation);
    document.body.append(page);
    page.append(wrapper);
    backFromAboutPage(button);
  }
}
