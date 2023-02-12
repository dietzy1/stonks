"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Domain = void 0;
class Domain {
    constructor(c, r, s) {
        this.c = c;
        this.r = r;
        this.s = s;
    }
    async getStonk(ticker) {
        //find out what date it is here
        //Get stock data
        await this.c.getStockData("", ticker);
        const rec = {
            ticker: ticker,
            buyornot: "Buy",
        };
        return rec;
    }
    async getGainers() {
        //Implementation
        return await this.s.scrapeGainers();
    }
    async getLoosers() {
        //Implementation
        return await this.s.scrapeLoosers();
    }
    async compare() {
        //Implementation
    }
}
exports.Domain = Domain;
function getDate() {
    const d = new Date();
    const date = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
    console.log(date);
    console.log(d.getDay());
    for (let i = 0; i < 5; i++) {
        const n = new Date(d);
        n.setDate(n.getDate() - i);
        const prior = n.getFullYear() + "-" + (n.getMonth() + 1) + "-" + n.getDate();
        console.log(prior);
    }
}
//# sourceMappingURL=domain.js.map