import {Builder, until, By} from "selenium-webdriver";

// Функция для фиксированных задержек
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

describe('BBC test', () => {
  let driver;
  before(async () => {
    driver = new Builder().forBrowser('chrome').build();
    await driver.manage().window().maximize();
  })

  it('should interact with BBC elements using CSS', async () => {
    await driver.get('https://www.bbc.com/');
    
    // Поиск с вводом текста и закрытием меню
    const searchButton = await driver.wait(until.elementLocated(By.css('[aria-label="Search BBC"]')), 10000);
    await searchButton.click();
    
    const searchInput = await driver.wait(until.elementLocated(By.css('[data-testid="search-input-field"]')), 10000);
    await searchInput.sendKeys('Hello, Liza!');
    
    const closeMenuButton = await driver.findElement(By.css('[aria-label="Close menu"]'));
    await delay(2000); // Замена driver.sleep(2000)
  
    await driver.wait(until.elementIsEnabled(closeMenuButton), 1000);//+ ожидание кликабельности
    await closeMenuButton.click();
    
    // Навигация по разделам
    const menuInput = await driver.wait(until.elementLocated(By.css('[data-testid="mainNavigationLink"]')), 10000);
    await delay(2000); 
    await menuInput.click();
    
    // Метка времени1
    const metkaTime1 = await driver.wait(until.elementLocated(By.css('[data-testid="card-metadata-lastupdated"]')), 10000);
    await delay(2000); 
    await metkaTime1.click();
    
    // Основной блок новости
    const mainImage = await driver.wait(until.elementLocated(By.css('[data-testid="card-media-wrapper"]')), 10000);
    await delay(2000); 
    await mainImage.click();
    
    // Метка времени2
    const metkaTime2 = await driver.wait(until.elementLocated(By.css('[data-testid="card-metadata-lastupdated"]')), 10000);
    await delay(2000); 
    await metkaTime2.click();
    
    // Заголовок
    const carTech = await driver.wait(until.elementLocated(By.css('[data-testid="card-headline"]')), 10000);
    await delay(2000); 
    await carTech.click();
  })

  after(async () => {
    await driver.quit();
  })
});