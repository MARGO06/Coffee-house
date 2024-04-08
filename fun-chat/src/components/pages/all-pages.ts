import { Login } from './login/login';

export class AllPages {
  loginPage: Login;

  constructor() {
    this.loginPage = new Login('login');
  }

  createLoginPage() {
    this.loginPage.createPage();
    window.location.hash = 'login';
  }
}
