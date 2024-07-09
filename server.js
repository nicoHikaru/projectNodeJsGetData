import puppeteer from 'puppeteer';

(async () => {
    // Launch the browser and open a new blank page
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();

    // Navigate the page to a URL
    await page.goto('https://www.google.com/',{waitUntil: "networkidle0", timeout: 90000});

    const element = await page.waitForSelector('#L2AGLb');//accepter conditio utilisateur
    
    await element.click(); 

    await page.evaluate(() => {
        document.querySelector(".gLFyf").value = "plomberie toulon";//champs recherche
    });

    await page.waitForSelector('.gLFyf');
    await page.click(".gLFyf");

    
    const searchResultSelector = '.gNO89b';// class css button lancer la recherche
    
    await page.waitForSelector(searchResultSelector);
    await page.click(searchResultSelector);

    await page.waitForSelector('.gLFyf');

    await page.waitForSelector('.sVXRqc');
    const hrefs = await page.$$eval(
        ".sVXRqc",
        els => els.map(el => el.href)
      );
    
    console.log(hrefs);
    console.log("fini");

    //await browser.close();
})();