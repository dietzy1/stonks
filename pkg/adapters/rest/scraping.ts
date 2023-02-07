//import playwright
import { Browser, chromium } from "playwright";
const playwright = "playwright";

export class Scraper {
  private browser: any;
  constructor() {
    this.browser = chromium.launch({ headless: false });
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
