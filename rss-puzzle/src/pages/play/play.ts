import { firstLevel } from '../../components/interfaces/level_1';
import { DivCards, divRows } from '../../components/divs-game/div';

export class PlayPage {
  id: string;

  constructor(id: string) {
    this.id = id;
  }

  createPage() {
    const playWrapper = document.createElement('div');
    playWrapper.id = this.id;
    document.body.append(playWrapper);
    const rowGame = new DivCards(divRows.fill('div'));
    const row = rowGame.createMainDiv();
    playWrapper.append(row);
    const divSentence = document.createElement('div');
    divSentence.className = 'game_sentence';
    playWrapper.append(divSentence);
    console.log(firstLevel.rounds[0]);
    return playWrapper;
  }
}
