const puppeteer = require('puppeteer');

let browser;
let page;

beforeEach(async () => {
  browser = await puppeteer.launch({
    headless: true
  });
  page = await browser.newPage();
  await page.goto('http://localhost:3000');
});

afterEach(async () => {
  if (browser) {
    await browser.close();
    browser = undefined;
  }
});


test('should load the application', async () => {
    const title = await page.title();
    expect(title).toBe('Blog App');
});

