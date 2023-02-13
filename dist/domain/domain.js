"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Domain = void 0;
class Domain {
    constructor(c, r, s) {
        this.c = c;
        this.r = r;
        this.s = s;
    }
    //Returns a recommendation
    async getStonk(ticker) {
        //find out what date it is here
        //Get stock data
        const data = await this.c.getStockData("", ticker);
        if (!data) {
            throw new Error("No data");
        }
        const rec = {
            ticker: ticker,
            buyornot: "Buy",
        };
        return rec;
    }
    //Returns top 10 gainers of the day
    async getGainers() {
        const data = await this.s.scrapeGainers();
        //check if data is empty
        if (!data || !data.length) {
            throw new Error("No data");
        }
        //Serialize the data to the database
        await this.r.insertGainerData(data);
        //Return the data back to the calling server
        return data;
    }
    //Returns top 10 loosers of the day
    async getLoosers() {
        const data = await this.s.scrapeLoosers();
        //check if data is empty
        if (!data || !data.length) {
            throw new Error("No data");
        }
        //Serialize the data to the database
        await this.r.insertLooserData(data);
        //return the data back to the calling server
        return data;
    }
    //Not ready to be implemented yet
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