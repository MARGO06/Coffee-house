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
    const continueButton = buttonContinue.createButton();
    continueButton.setAttribute('disabled', 'true');
    divContainer.append(continueButton);
    const partSentence = this.showSplitSentence();
    if (partSentence != undefined) {
      for (let i = 0; i < partSentence.length; i += 1) {
        const columnDiv = document.createElement('div');
        columnDiv.className = 'data_container';
        divSentence.append(columnDiv);
        const parts = partSentence[i].split(' ');
        for (let j = 0; j < parts.length; j += 1) {
          const columnPart = document.createElement('div');
          columnPart.className = `data_column data_sentence${i}`;
          columnPart.setAttribute('data-parent', `${parts[j]}`);
          columnPart.textContent = `${parts[j]}`;
          columnDiv.append(columnPart);
        }
        this.changeSizeSource();
      }
    }
    this.clickWord();
    this.checkSentence();
    return playWrapper;
  }

  private showSentences() {
    for (let i = 0; i < firstLevel.rounds.length; i += 1) {
      if (firstLevel.rounds[i].levelData.id === `1_01`) {
        const allSentence: string[] = [];
        const round = firstLevel.rounds[0];
        for (let j = 0; j < round.words.length; j += 1) {
          const sentences = round.words[j].textExample;
          allSentence.push(sentences);
        }
        return allSentence;
      }
    }
  }

  private splitSentences() {
    const sentence = this.showSentences();
    const mixSentences: string[] = [];
    if (sentence != undefined) {
      for (let i = 0; i < sentence.length; i += 1) {
        const newSentence = sentence[i].split(' ');
        const mixSentence = newSentence.sort(() => Math.random() - 0.5);
        mixSentences.push(mixSentence.join(' '));
      }
      return mixSentences;
    }
  }

  private showSentence() {
    const sentence = this.showSentences();
    if (sentence != undefined) {
      console.log(sentence);
      return sentence[0];
    }
  }

  private showSplitSentence() {
    const sentence = this.splitSentences();
    const result: string[] = [];
    if (sentence != undefined) {
      for (let i = 0; i < sentence?.length; i += 1) {
        result.push(sentence[i]);
      }
    }
    return result;
  }

  private clickWord() {
    const game = document.querySelector('.game_sentence') as HTMLElement;
    const gameContainer = document.querySelectorAll('.game_row');
    const dataContainer = document.querySelectorAll('.data_container');
    if (gameContainer != null && game != null) {
      for (let j = 0; j < gameContainer.length; j += 1) {
        for (let i = 0; i < dataContainer.length; i += 1) {
          game.addEventListener('click', (e) => {
            if (i === j && e.target instanceof HTMLElement && gameContainer[j].classList.contains('active')) {
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
    }
    this.clickWordCards();
  }

  private changeSizeSource() {
    const sentence = this.showSentences();
    const partsSource = document.querySelectorAll('.data_container');
    if (partsSource != null && sentence != null) {
      for (let i = 0; i < partsSource.length; i += 1) {
        for (let k = 0; k < sentence.length; k += 1) {
          if (i === k) {
            const oneSentence = sentence[k].split(' ').join('').length;
            const parts = document.querySelectorAll(`.data_sentence${i}`);
            for (let j = 0; j < parts.length; j += 1) {
              const element = (parts[j] as HTMLElement).dataset.parent;
              if (element != undefined && oneSentence != undefined) {
                const elementLength = (element.length * 100) / oneSentence;
                const part = parts[j] as HTMLElement;
                part.style.width = `${elementLength}%`;
              }
            }
          }
        }
      }
    }
  }

  private changeSizeResult() {
    const sentence = this.showSplitSentence();
    const partsResult = document.querySelectorAll('.column');
    const rows = document.querySelectorAll('.game_row');
    if (partsResult != null) {
      for (let j = 0; j < sentence.length; j += 1) {
        for (let k = 0; k < rows.length; k += 1) {
          if (j === k && rows[k].classList.contains('active')) {
            const oneSentence = sentence[j].split(' ').join('').length;
            for (let i = 0; i < partsResult.length; i += 1) {
              const element = (partsResult[i] as HTMLElement).dataset.parent;
              if (element != undefined && oneSentence != undefined) {
                const elementLength = (element.length * 100) / oneSentence;
                const part = partsResult[i] as HTMLElement;
                part.style.width = `${elementLength}%`;
              }
            }
          }
        }
      }
    }
  }

  private clickWordCards() {
    const game = document.querySelectorAll('.data_container');
    const gameContainer = document.querySelectorAll('.game_row');
    for (let i = 0; i < gameContainer.length; i += 1) {
      for (let j = 0; j < game.length; j += 1) {
        if (i === j && gameContainer[i].classList.contains('active')) {
          console.log(gameContainer[i]);
          gameContainer[i].addEventListener('click', (e) => {
            if (e.target instanceof HTMLElement) {
              e.target.remove();
              const element = (e.target as HTMLElement).dataset.parent;
              const column = document.createElement('div');
              column.setAttribute('data-parent', `${element}`);
              column.className = `data_column data_sentence${i}`;
              column.textContent = `${element}`;
              game[j].append(column);
              this.changeSizeSource();
            }
          });
        }
      }
    }
  }

  checkSentence() {
    const rightSentences = this.showSentences();
    const gameContainer = document.querySelectorAll('.game_row');
    const elements = document.querySelectorAll('.column');
    const resultSentence: string[] = [];
    if (rightSentences != undefined) {
      for (let i = 0; i < gameContainer.length; i += 1) {
        for (let k = 0; k < rightSentences.length; k += 1) {
          if (i === k && gameContainer[i].classList.contains('active')) {
            const rightSentence = rightSentences[k];
            for (let j = 0; j < elements.length; j += 1) {
              const element = (elements[j] as HTMLElement).innerHTML;
              resultSentence.push(element);
            }
            const sentence = resultSentence.join(' ');
            if (sentence.length === rightSentence?.length) {
              const result = sentence === rightSentence ? this.showNextSentence() : 'false';
              return result;
            }
          }
        }
      }
    }
  }

  showNextSentence() {
    const continueButton = document.querySelector('.continue_button');
    const gameContainer = document.querySelectorAll('.game_row');
    const game = document.querySelectorAll('.data_container');
    continueButton?.removeAttribute('disabled');
    continueButton?.classList.add('active');
    let count: number = 0;
    continueButton?.addEventListener('click', (e: Event) => {
      e.preventDefault();
      count += 1;
      for (let i = 0; i < game.length; i += 1) {
        for (let j = 0; j < gameContainer.length; j += 1) {
          if (count === i && count === j) {
            const minus = count - 1;
            (game[minus] as HTMLElement).style.display = 'none';
            (game[i] as HTMLElement).style.display = 'flex';
            gameContainer[minus].classList.remove('active');
            gameContainer[j].classList.add('active');
            this.checkSentence();
            this.clickWordCards();
          }
          this.changeSizeSource();
        }
      }
      continueButton.setAttribute('disabled', 'true');
      continueButton?.classList.remove('active');
    });
  }
}
