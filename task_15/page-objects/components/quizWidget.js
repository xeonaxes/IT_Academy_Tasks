export class QuizWidget {
  constructor(page) {
    this.page = page;
    this.quizBtn = page.locator('.ws-quiz-btn-el-container.envy-not-scalling');
  }

  async startQuiz(name, phone) {
    await this.quizBtn.waitFor({ state: 'visible' });
    await this.quizBtn.click();

    const frame = this.page.frameLocator('iframe[name="ws-quiz-iframe-78568"]');
    await frame.locator('.btn-start').click();
    await frame.locator('.title-box:has-text("test")').first().click();
    await frame.locator('.quiz-name').fill(name);
    await frame.locator('.quiz-phone-input').fill(phone);
    await frame.locator('.quiz-send-lead-btn:has-text("Получить скидку")').click();
    await frame.locator('.close-btn:has-text("закрыть")').click();
  }
}
