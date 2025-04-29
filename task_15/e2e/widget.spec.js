import { test, expect } from '@playwright/test';
import { Base } from '../page-objects/base';
import { ChatWidget } from '../page-objects/components/ChatWidget';
import { QuizWidget } from '../page-objects/components/QuizWidget';
import { CallbackWidget } from '../page-objects/components/CallbackWidget';
import { Navigation } from '../page-objects/components/Navigation';


test.describe('vag.killercb widgets', () => {
  test.beforeEach(async ({ page }) => {
    const base = new Base (page);
    await base.open();
  });

  test('Send message in chat widget', async ({ page }) => {
    const chat = new ChatWidget(page);
    await chat.openChat();
    await chat.sendMessage('Hello, my autotest');
    await chat.closeChat();
    await chat.chatIsHidden();
  });

  test('Complete quiz widget', async ({ page }) => {
    const quiz = new QuizWidget(page);
    await quiz.startQuiz('Liza', '375259999999');
  });

  test('Order callback', async ({ page }) => {
    const callback = new CallbackWidget(page);
    await callback.orderCall('375259999999');
  });

  test('Scroll to section', async ({ page }) => {
    const nav = new Navigation(page);
    await nav.navigateToSection3();
   
  });


});