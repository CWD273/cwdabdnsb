const puppeteer = require('puppeteer');

async function fetchFilteredContent(targetUrl) {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--disable-web-security', '--no-sandbox'],
  });

  const page = await browser.newPage();

  // Load uBlock Origin extension
  await page.goto('chrome-extension://<uBO-extension-id>/dashboard.html'); // preload rules if needed

  await page.goto(targetUrl, { waitUntil: 'networkidle2' });
  const content = await page.content();

  await browser.close();
  return content;
}

module.exports = { fetchFilteredContent };
