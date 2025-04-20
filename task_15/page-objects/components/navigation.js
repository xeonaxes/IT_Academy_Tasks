export class Navigation {
  constructor(page) {
    this.page = page;

    this.section3Btn = page.locator('[data-scroll-nav="3"]');
  }
  async navigateToSection3() {
    await this.section3Btn.waitFor({ state: 'visible' });
    await this.section3Btn.click();
  }

}

