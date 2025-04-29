export class CallbackWidget {
  constructor(page) {
    this.page = page;
    this.callBtn = page.locator('.cbk-phone-phone');
    this.phoneInput = page.locator('#cbkPhoneInput');
    this.submitBtn = page.locator('#cbkPhoneBtn');
    this.closeBtn = page.locator('.cbk-close-window');
  }

  async orderCall(phone) {
    await this.callBtn.click();
    await this.phoneInput.fill(phone);
    await this.submitBtn.click();
    await this.closeBtn.click();
  }
}
