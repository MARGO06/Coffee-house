import { LoginPage } from './login/login-page';
import { MainPage } from './main/main-page';
import { PlayPage } from './play/play';

export class AllPages {
  loginWrapper: LoginPage;
  mainWrapper: MainPage;
  playWrapper: PlayPage;

  constructor() {
    this.loginWrapper = new LoginPage('login');
    this.mainWrapper = new MainPage('main_wrapper');
    this.playWrapper = new PlayPage('play_wrapper');
  }

  createLogin() {
    this.loginWrapper.createPage();
    window.location.hash = 'login';
  }

  createMain() {
    const form = document.querySelector('.login_form') as HTMLElement;
    const firstInput = document.getElementById('fname') as HTMLInputElement;
    const lastInput = document.getElementById('lname') as HTMLInputElement;
    if (firstInput != null || lastInput != null || form != null) {
      form.addEventListener('submit', () => {
        if (!firstInput.validity.patternMismatch && !lastInput.validity.patternMismatch) {
          localStorage.setItem('first name', firstInput.value);
          localStorage.setItem('surname', lastInput.value);
          firstInput.value = '';
          lastInput.value = '';
          document.body.innerHTML = '';
          this.mainWrapper.createPage();
          this.changePages();
          this.transitionToGame();
        }
      });
    }
  }

  private changePages() {
    const button = document.querySelector('.logout_button') as HTMLElement;
    if (button != null) {
      button.addEventListener('click', (e: Event) => {
        e.preventDefault();
        localStorage.clear();
        document.body.innerHTML = '';
        this.createLogin();
        this.createMain();
      });
    }
  }

  private createPlayPage() {
    document.body.innerHTML = '';
    this.playWrapper.createPage();
    window.location.hash = 'play_wrapper';
  }

  private transitionToGame() {
    const button = document.querySelector('.start_button') as HTMLElement;
    if (button != null) {
      button.addEventListener('click', (e: Event) => {
        e.preventDefault();
        this.createPlayPage();
      });
    }
  }
}
