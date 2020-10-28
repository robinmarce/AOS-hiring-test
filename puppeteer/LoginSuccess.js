const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:3000');

    await page.waitForSelector('input[type=email');
    const emailInput = await page.$('input[type=email]');
    await emailInput.type('robin.marce@hotmail.fr');
    
    await page.waitForSelector('input[type=password');
    const passwordInput = await page.$('input[type=password]');
    await passwordInput.type('aqszed');
    
    await page.waitForSelector('button[type=submit');
    const submitElement = await page.$('button[type=submit]');
    await submitElement.click();

    await page.waitForNavigation({ waitUntil: 'networkidle0' });
    if (page.url() === 'http://localhost:3000/success') {
        console.log("Test success!");
    } else {
        throw new Error('Test fail!');
    }
        
    await browser.close();

})();