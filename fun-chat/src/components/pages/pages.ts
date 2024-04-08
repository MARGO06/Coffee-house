export abstract class Page {
  id: string;
  constructor(id: string) {
    this.id = id;
  }

  createPage() {
    const page = document.createElement('div');
    page.id = this.id;
    document.body.append(page);
  }
}
