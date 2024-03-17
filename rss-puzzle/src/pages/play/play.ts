import { firstLevel } from '../../components/interfaces/level_1';
import { DivCards, divRows } from '../../components/divs-game/div';
import { buttonContinue } from '../../components/button/button';

import './play.css';

export class PlayPage {
  id: string;

  constructor(id: string) {
    this.id = id;
  }

  createPage() {
    const playWrapper = document.createElement('div');
    playWrapper.id = this.id;
    document.body.append(playWrapper);
    const divContainer = document.createElement('div');
    divContainer.className = 'game_container';
    playWrapper.append(divContainer);
    const rowGame = new DivCards(divRows.fill('div'), 45);
    const row = rowGame.createMainDiv();
    divContainer.append(row);
    const divSentence = document.createElement('div');
    divSentence.className = 'game_sentence';
    divContainer.append(divSentence);
    const partSentence = this.splitSentence();
    if (partSentence != undefined) {
      for (let i = 0; i < partSentence.length; i += 1) {
        const columnDiv = document.createElement('div');
        columnDiv.className = 'data_column';
        columnDiv.setAttribute('data-parent', `${partSentence[i]}`);
        columnDiv.textContent = `${partSentence[i]}`;
        divSentence.append(columnDiv);
        this.changeSizeSource();
      }
    }
    const continueButton = buttonContinue.createButton();
    continueButton.setAttribute('disabled', 'true');
    divContainer.append(continueButton);
    this.clickWord();
    return playWrapper;
  }

  private showSentence() {
    let sentence = '';
    for (let i = 0; i < firstLevel.rounds.length; i += 1) {
      const round = firstLevel.rounds[i];
      for (let j = 0; j < round.words.length; j += 1) {
        const sentences = round.words[j];
        sentence = sentences.textExample;
        return sentence;
      }
    }
  }

  private splitSentence() {
    const sentence = this.showSentence()?.split(' ');
    if (sentence != undefined) {
      const mixSentence = sentence.sort(() => Math.random() - 0.5);
      return mixSentence;
    }
  }

  private clickWord() {
    const game = document.querySelector('.game_sentence') as HTMLElement;
    const gameContainer = document.querySelectorAll('.game_row');
    if (gameContainer != null && game != null) {
      for (let j = 0; j < gameContainer.length; j += 1) {
        game.addEventListener('click', (e) => {
          if (j === 0 && e.target instanceof HTMLElement) {
            e.target.remove();
            const element = (e.target as HTMLElement).dataset.parent;
            const column = document.createElement('div');
            column.setAttribute('data-parent', `${element}`);
            column.className = 'column';
            column.textContent = `${element}`;
            gameContainer[j].append(column);
            this.changeSizeResult();
            this.checkSentence();
          }
        });
      }
    }
    this.clickWordCards();
  }

  private changeSizeSource() {
    const sentence = this.splitSentence();
    const allLength = sentence?.join('').length;
    const partsSource = document.querySelectorAll('.data_column');
    if (partsSource != null) {
      for (let i = 0; i < partsSource.length; i += 1) {
        const element = (partsSource[i] as HTMLElement).dataset.parent;
        if (element != undefined && allLength != undefined) {
          const elementLength = (element.length * 100) / allLength;
          const part = partsSource[i] as HTMLElement;
          part.style.width = `${elementLength}%`;
        }
      }
    }
  }

  private changeSizeResult() {
    const sentence = this.splitSentence();
    const allLength = sentence?.join('').length;
    const partsResult = document.querySelectorAll('.column');
    if (partsResult != null) {
      for (let i = 0; i < partsResult.length; i += 1) {
        const element = (partsResult[i] as HTMLElement).dataset.parent;
        if (element != undefined && allLength != undefined) {
          const elementLength = (element.length * 100) / allLength;
          const part = partsResult[i] as HTMLElement;
          part.style.width = `${elementLength}%`;
        }
      }
    }
  }

  private clickWordCards() {
    const game = document.querySelector('.game_sentence') as HTMLElement;
    const gameContainer = document.querySelectorAll('.game_row');
    for (let i = 0; i < gameContainer.length; i += 1) {
      gameContainer[i].addEventListener('click', (e) => {
        if (i === 0 && e.target instanceof HTMLElement) {
          e.target.remove();
          const element = (e.target as HTMLElement).dataset.parent;
          const column = document.createElement('div');
          column.setAttribute('data-parent', `${element}`);
          column.className = 'data_column';
          column.textContent = `${element}`;
          game.append(column);
          this.changeSizeSource();
        }
      });
    }
  }

  checkSentence() {
    const rightSentence = this.showSentence();
    const gameContainer = document.querySelectorAll('.game_row');
    const elements = document.querySelectorAll('.column');
    const resultSentence: string[] = [];
    for (let i = 0; i < gameContainer.length; i += 1) {
      if (i === 0) {
        console.log(elements);
        for (let j = 0; j < elements.length; j += 1) {
          const element = (elements[j] as HTMLElement).innerHTML;
          resultSentence.push(element);
        }
        const sentence = resultSentence.join(' ');
        if (sentence.length === rightSentence?.length) {
          const result = sentence === rightSentence ? 'true' : 'false';
          console.log(result);
        }
      }
    }
  }
}
