import { test, expect } from '@playwright/test';

test.describe('vag.killercb test', () => {

    test('Sending a message in the Online chat widget', async ({ page }) => {
      await page.goto('https://vag.killercb.ru/liza_prod_ru/index.html');

      await page.locator('.ws-chat-btn-logo-yes').waitFor({ state: 'visible' });
      await page.locator('.ws-chat-btn-logo-yes').click();

      await page.locator('.ws-textarea').first().fill('Hello, my autotest');

      if (await page.locator('.ws-textarea-send-btn').isVisible()) {
        await page.locator('.ws-textarea-send-btn').click();
      } else {
        await page.locator('.ws-textarea').press('Enter');
      }

      await page.locator('.ws-icon-close').first().click();
      await expect(page.locator('.ws-chat-container')).toBeHidden();
    });

    test('Taking the survey in the Quiz widget', async ({ page }) => {
      await page.goto('https://vag.killercb.ru/liza_prod_ru/index.html');


      await page.locator('.ws-quiz-btn-el-container.envy-not-scalling').waitFor({ state: 'visible' });
      await page.locator('.ws-quiz-btn-el-container.envy-not-scalling').click();

      
      const frame = page.frameLocator('iframe[name="ws-quiz-iframe-78568"]');
      await frame.locator('.btn-start').waitFor({ state: 'visible' });
      await frame.locator('.btn-start').click();

      
      await frame.locator('.title-box:has-text("test")').waitFor({ state: 'visible' });
      await frame.locator('.title-box:has-text("test")').first().click();

      
      await frame.locator('.quiz-name').waitFor({ state: 'visible' });
      await frame.locator('.quiz-name').fill('Liza');

     
      await frame.locator('.quiz-phone-input').waitFor({ state: 'visible' });
      await frame.locator('.quiz-phone-input').fill('375259999999');

      
      await frame.locator('.quiz-send-lead-btn:has-text("Получить скидку")').waitFor({ state: 'visible' });
      await frame.locator('.quiz-send-lead-btn:has-text("Получить скидку")').click();

      
      await frame.locator('.close-btn:has-text("закрыть")').waitFor({ state: 'visible' });
      await frame.locator('.close-btn:has-text("закрыть")').first().click();
    });

    test('Order a call in the Callback widget', async ({ page }) => {
        await page.goto('https://vag.killercb.ru/liza_prod_ru/index.html');

        
        await page.locator('.cbk-phone-phone').waitFor({ state: 'visible' });
        await page.locator('.cbk-phone-phone').click();

        
        await page.locator('#cbkPhoneInput').waitFor({ state: 'visible' });
        await page.locator('#cbkPhoneInput').fill('375259999999');

        
        await page.locator('#cbkPhoneBtn').waitFor({ state: 'visible' });
        await page.locator('#cbkPhoneBtn').click();

        
        await page.locator('.cbk-close-window').waitFor({ state: 'visible' });
        await page.locator('.cbk-close-window').click();

    });

    test('Navigation', async ({ page }) => {
        await page.goto('https://vag.killercb.ru/liza_prod_ru/index.html');

      
        await page.locator('[data-scroll-nav="3"]').waitFor({ state: 'visible' });
        await page.locator('[data-scroll-nav="3"]').click();

    });
});








