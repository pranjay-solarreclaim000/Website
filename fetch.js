import puppeteer from 'puppeteer';
import fs from 'fs';

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  
  page.on('response', async (response) => {
    const url = response.url();
    if (url.includes('supabase') && url.includes('shared_code')) {
      try {
        const text = await response.text();
        if (text && text.length > 100) {
          fs.writeFileSync('target-code.json', text);
          console.log("Saved to target-code.json with length " + text.length);
        }
      } catch (e) {}
    }
  });

  await page.goto('https://renewable-energy-90.aura.build/', { waitUntil: 'networkidle0' });
  await browser.close();
})();
