class Pages {
  activeButton() {
    const garageButton = document.querySelector('.btn_garage');
    const winnerButton = document.querySelector('.btn_winners');
    const view = document.querySelector('.view');
    const garage = document.getElementById('garage');
    const winners = document.getElementById('winner');
    winnerButton?.addEventListener('click', () => {
      winnerButton.classList.add('active');
      garageButton?.classList.remove('active');
      view?.classList.remove('active');
      garage?.classList.remove('active');
      winners?.classList.add('active');
    });

    garageButton?.addEventListener('click', () => {
      if (winnerButton?.classList.contains('active')) {
        winnerButton.classList.remove('active');
        garageButton?.classList.add('active');
        view?.classList.add('active');
        garage?.classList.add('active');
        winners?.classList.remove('active');
      }
    });
  }
}

export const partsPages = new Pages();
