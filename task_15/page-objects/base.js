
export class Base {
  constructor(page) {
    this.page = page;
    this.url = 'https://vag.killercb.ru/liza_prod_ru/index.html';
  }

  async open() {
    await this.page.goto(this.url);
  }
}



