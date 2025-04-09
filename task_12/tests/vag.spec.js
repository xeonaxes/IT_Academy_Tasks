import { test, expect } from '@playwright/test';

test.describe('Тест моего сайта', () => {

    test('Начать диалог Онлайн чата', async ({ page }) => {
      await page.goto('https://vag.killercb.ru/liza_prod_ru/index.html');

      await page.locator('.ws-chat-btn-logo-yes').waitFor({ state: 'visible' });
      await page.locator('.ws-chat-btn-logo-yes').click();

      await page.locator('.ws-textarea').first().fill('Приветик, меня зовут Лиз и это мой автотест');

      if (await page.locator('.ws-textarea-send-btn').isVisible()) {
        await page.locator('.ws-textarea-send-btn').click();
      } else {
        await page.locator('.ws-textarea').press('Enter');
      }

      await page.locator('.ws-icon-close').first().click();
      await expect(page.locator('.ws-chat-container')).toBeHidden();
    });

    test('Прохождение квиза', async ({ page }) => {
      await page.goto('https://vag.killercb.ru/liza_prod_ru/index.html');

      // Клик по кнопке квиза
      await page.locator('.ws-quiz-btn-el-container.envy-not-scalling').waitFor({ state: 'visible' });
      await page.locator('.ws-quiz-btn-el-container.envy-not-scalling').click();

      // Клик по кнопке "Готово"
      const frame = page.frameLocator('iframe[name="ws-quiz-iframe-78568"]');
      await frame.locator('.btn-start').waitFor({ state: 'visible' });
      await frame.locator('.btn-start').click();

      // Клик по варианту ответа "test"
      await frame.locator('.title-box:has-text("test")').waitFor({ state: 'visible' });
      await frame.locator('.title-box:has-text("test")').first().click();

      // Ввод имени
      await frame.locator('.quiz-name').waitFor({ state: 'visible' });
      await frame.locator('.quiz-name').fill('Liza');

      // Ввод телефона
      await frame.locator('.quiz-phone-input').waitFor({ state: 'visible' });
      await frame.locator('.quiz-phone-input').fill('375259999999');

      // Клик по кнопке отправки
      await frame.locator('.quiz-send-lead-btn:has-text("Получить скидку")').waitFor({ state: 'visible' });
      await frame.locator('.quiz-send-lead-btn:has-text("Получить скидку")').click();

      // Закрыть квиз
      await frame.locator('.close-btn:has-text("закрыть")').waitFor({ state: 'visible' });
      await frame.locator('.close-btn:has-text("закрыть")').first().click();
    });

    test('Заказать звонок в Обратном звонке', async ({ page }) => {
        await page.goto('https://vag.killercb.ru/liza_prod_ru/index.html');

        // Клик по блоку
        await page.locator('.cbk-phone-phone').waitFor({ state: 'visible' });
        await page.locator('.cbk-phone-phone').click();

        // Ввод телефона
        await page.locator('#cbkPhoneInput').waitFor({ state: 'visible' });
        await page.locator('#cbkPhoneInput').fill('375259999999');

        // Клик по кнопке отправки
        await page.locator('#cbkPhoneBtn').waitFor({ state: 'visible' });
        await page.locator('#cbkPhoneBtn').click();

        // Закрытие
        await page.locator('.cbk-close-window').waitFor({ state: 'visible' });
        await page.locator('.cbk-close-window').click();

    });

    test('Навигация', async ({ page }) => {
        await page.goto('https://vag.killercb.ru/liza_prod_ru/index.html');

        // Клик по кнопке Team в меню навигации
        await page.locator('[data-scroll-nav="3"]').waitFor({ state: 'visible' });
        await page.locator('[data-scroll-nav="3"]').click();

    });
});








