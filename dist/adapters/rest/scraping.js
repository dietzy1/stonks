"use strict";
//@ts-check
// ...
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scraper = void 0;
const playwright_1 = require("playwright");
class Scraper {
    constructor() { }
    //Function that scrapes yahoo finance and returns the top 10 gainers
    async scrapeGainers() {
        try {
            const browser = await playwright_1.chromium.launch({ headless: false });
            const context = await browser.newContext();
            const page = await context.newPage();
            await context.route("**.jpg", (route) => route.abort());
            await page.goto("https://finance.yahoo.com/gainers");
            await page.waitForTimeout(this.randomTime());
            //bypass the cookie consent
            await page.locator(".btn").first().click();
            await page.waitForTimeout(this.randomTime());
            //scrape the table
            const gainers = await page.$eval("#fin-scr-res-table tbody", (tableBody) => {
                let all = [];
                for (let i = 0, row; (row = tableBody.rows[i]); i++) {
                    let stock = [];
                    for (let j = 0, col; (col = row.cells[j]); j++) {
                        stock.push(row.cells[j].innerText);
                    }
                    all.push(stock);
                }
                return all;
            });
            //convert mostActive into a scraperStock type
            const jsonData = this.convertToScraperStock(gainers);
            /*    const jsonData = gainers.map((stock) => {
              return {
                symbyl: stock[0],
                name: stock[1],
                price: stock[2],
                change: stock[3],
                percentChange: stock[4],
                volume: stock[5],
                avgVolume: stock[6],
                marketCap: stock[7],
                peRatio: stock[8],
                week52High: stock[9],
                unused: stock[10],
              };
            }); */
            await page.waitForTimeout(this.randomTime());
            await browser.close();
            return jsonData;
        }
        catch (err) {
            console.error(err);
            return [];
        }
    }
    //Function that scrapes yahoo finance and returns the top 10 losers
    async scrapeLoosers() {
        const browser = await playwright_1.chromium.launch({ headless: false });
        const context = await browser.newContext();
        const page = await context.newPage();
        await context.route("**.jpg", (route) => route.abort());
        await page.goto("https://finance.yahoo.com/gainers");
        await page.waitForTimeout(this.randomTime());
        //bypass the cookie consent
        await page.locator(".btn").first().click();
        await page.waitForTimeout(this.randomTime());
        //scrape the table
        const gainers = await page.$eval("#fin-scr-res-table tbody", (tableBody) => {
            let all = [];
            for (let i = 0, row; (row = tableBody.rows[i]); i++) {
                let stock = [];
                for (let j = 0, col; (col = row.cells[j]); j++) {
                    stock.push(row.cells[j].innerText);
                }
                all.push(stock);
            }
            return all;
        });
        //convert mostActive into a scraperStock type
        const jsonData = this.convertToScraperStock(gainers);
        await page.waitForTimeout(this.randomTime());
        await browser.close();
        return jsonData;
    }
    catch(err) {
        console.error(err);
        return [];
    }
    //Helper function that returns a random time between 5 and 10 seconds
    randomTime() {
        const min = 5000;
        const max = 10000;
        const random = Math.random() * (max - min) + min;
        return random;
    }
    //function that takes in json data and returns a scraperStock type
    convertToScraperStock(jsonData) {
        jsonData.map((stock) => {
            return {
                symbyl: stock[0],
                name: stock[1],
                price: stock[2],
                change: stock[3],
                percentChange: stock[4],
                volume: stock[5],
                avgVolume: stock[6],
                marketCap: stock[7],
                peRatio: stock[8],
                week52High: stock[9],
                unused: stock[10],
            };
        });
        return jsonData;
    }
}
exports.Scraper = Scraper;
//# sourceMappingURL=scraping.js.map