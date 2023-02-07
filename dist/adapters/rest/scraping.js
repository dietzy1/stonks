"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scraper = void 0;
//import playwright
const playwright_1 = require("playwright");
const playwright = "playwright";
class Scraper {
    constructor() {
        this.browser = playwright_1.chromium.launch({ headless: false });
    }
    async scrapeGainers() {
        const page = await this.browser.newPage();
        await page.goto("https://finance.yahoo.com/gainers");
        const gainers = await page.$$eval("tr", (rows) => {
            return rows.map((row) => {
                const title = row.querySelector("a")?.textContent;
                const price = row.querySelector(".data-col2")?.textContent;
                const change = row.querySelector(".data-col3")?.textContent;
                const percentChange = row.querySelector(".data-col4")?.textContent;
                return { title, price, change, percentChange };
            });
        });
        console.log(gainers);
    }
}
exports.Scraper = Scraper;
//# sourceMappingURL=scraping.js.map