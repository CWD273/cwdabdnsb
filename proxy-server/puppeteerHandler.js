const puppeteer = require('puppeteer');

async function fetchFilteredContent(targetUrl) {
  const browser = await puppeteer.launch({
    headless: false, // Extensions require non-headless mode
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      `--disable-extensions-except=${__dirname}/extension`,
      `--load-extension=${__dirname}/extension`,
    ],
  });

  const page = await browser.newPage();
  await page.goto(targetUrl, { waitUntil: 'networkidle2' });
  const content = await page.content();

  await browser.close();
  return content;
}

module.exports = { fetchFilteredContent };
