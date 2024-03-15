import { buttonOut } from '../../components/button/button';

export class MainPage {
  id: string;

  constructor(id: string) {
    this.id = id;
  }

  createPage() {
    const mainWrapper = document.createElement('div');
    mainWrapper.id = this.id;
    document.body.append(mainWrapper);
    const outButton = buttonOut.createButton();
    mainWrapper.append(outButton);
    window.location.hash = 'main_wrapper';
    return mainWrapper;
  }
}
