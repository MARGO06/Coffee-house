import { Header } from '../../components/header/header';
import login from '../../assets/three.jpg';
import './main.css';

export class MainPage {
  id: string;

  constructor(id: string) {
    this.id = id;
  }

  createPage() {
    const mainWrapper = document.createElement('div');
    mainWrapper.id = this.id;
    mainWrapper.style.backgroundImage = `url(${login})`;
    mainWrapper.style.backgroundSize = 'cover';
    mainWrapper.style.height = '100%';
    document.body.append(mainWrapper);
    const head = new Header();
    const headerMain = head.createHeader();
    mainWrapper.append(headerMain);
    const description = document.createElement('div');
    description.className = 'main_description';
    mainWrapper.append(description);
    const text = document.createElement('p');
    text.className = 'main_text';
    text.textContent =
      'You will have an exciting journey into the world of learning English. You will be presented with 6 levels of the game, starting with the first (easy) level. Each level has 10 rounds.You need to collect the painting in 10 rounds. To assemble a picture you need to make sentences from English words that will be presented to you.You can also use the hints if you have any doubts about writing sentences.';
    description.append(text);
    window.location.hash = 'main_wrapper';
    return mainWrapper;
  }
}
