import puppeteer from 'puppeteer';

(async () => {
    // Launch the browser and open a new blank page
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();

    // Navigate the page to a URL
    await page.goto('https://www.google.com/');

    // Query for an element handle.
    const element = await page.waitForSelector('#L2AGLb');

    // Do something with element...
    await element.click(); // Just an example.

    await page.evaluate(() => {
        document.querySelector(".gLFyf").value = "restaurant japonais à paris";
    });

    await page.waitForSelector('.gLFyf'); // <-- wait until it exists
    await page.click(".gLFyf");  

    const searchResultSelector = '.gNO89b';
    console.log('buton valide recherche',searchResultSelector);
    const button = await page.waitForSelector(searchResultSelector);
    console.log('buton valide recherche',button);
    await page.click(searchResultSelector);

    await page.waitForSelector('.gLFyf'); // <-- wait until it exists

    await page.waitForSelector('.sVXRqc'); // <-- wait until it exists
    const hrefs = await page.$$eval(
        ".sVXRqc",
        els => els.map(el => el.href)
      );
    console.log(hrefs);
    console.log("fini");

    await browser.close();
})();