import { firstLevel } from '../../components/interfaces/level_1';
import { DivCards, divRows } from '../../components/divs-game/div';

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
      this.clickWord();
    }
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

  clickWord() {
    const sentence = document.querySelectorAll('.data_column');
    const gameContainer = document.querySelectorAll('.game_wrapper div');
    if (sentence != null && gameContainer != null) {
      for (let j = 0; j < gameContainer.length; j += 1) {
        for (let i = 0; i < sentence.length; i += 1) {
          sentence[i].addEventListener('click', (e: Event) => {
            e.preventDefault();
            if (j === 0) {
              console.log(gameContainer[j]);
              sentence[i].classList.add('hidden');
              const element = (sentence[i] as HTMLElement).dataset.parent;
              const column = document.createElement('div');
              column.setAttribute('data-parent', `${element}`);
              column.className = 'column';
              column.textContent = `${element}`;
              gameContainer[j].append(column);
            }
            this.changeSizeResult();
          });
        }
      }
    }
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
          console.log(partsResult[i]);
        }
      }
    }
  }
}
