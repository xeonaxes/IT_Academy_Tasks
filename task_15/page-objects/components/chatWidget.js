import { expect } from '@playwright/test';

export class ChatWidget {
  constructor(page) {
    this.page = page;
    this.chatBtn = page.locator('.ws-chat-btn-logo-yes');
    this.textArea = page.locator('.ws-textarea').first();
    this.sendBtn = page.locator('.ws-textarea-send-btn');
    this.closeBtn = page.locator('.ws-icon-close').first();
    this.chatContainer = page.locator('.ws-chat-container');
  }

  async openChat() {
    await this.chatBtn.waitFor({ state: 'visible' });
    await this.chatBtn.click();
  }

  async sendMessage(message) {
    await this.textArea.fill(message);
    if (await this.sendBtn.isVisible()) {
      await this.sendBtn.click();
    } else {
      await this.textArea.press('Enter');
    }
  }

  async closeChat() {
    await this.closeBtn.click();
  }

  async chatIsHidden() {
    await expect(this.chatContainer).toBeHidden();
  }
}
