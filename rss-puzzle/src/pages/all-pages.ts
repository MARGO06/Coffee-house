import { LoginPage } from './login/login-page';

export class AllPages {
  loginWrapper: LoginPage;

  constructor() {
    this.loginWrapper = new LoginPage('login');
  }

  static renderPage(pageId: string) {
    document.body.innerHTML = '';
    let page: LoginPage | null = null;

    if (pageId === 'login') {
      page = new LoginPage(pageId);

      console.log(page);
    }

    if (page) {
      const newPage = page.createPage();
      console.log(newPage);
      return newPage;
    }
  }
}
