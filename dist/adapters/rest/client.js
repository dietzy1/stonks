"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
//client
class Client {
    //Method
    async getStockData(date, ticker) {
        try {
            const res = await fetch(
            //`https://api.polygon.io/v1/open-close/SPY/2023-01-23?adjusted=false&apiKey=${process.env}`,
            `https://api.polygon.io/v1/open-close/${ticker}/${date}?adjusted=false&apiKey=${process.env.KEY}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await res.json();
            return data;
        }
        catch (err) {
            console.error(err);
        }
    }
}
exports.Client = Client;
//async function that scrapes https://finance.yahoo.com/gainers and returns the top 10 gainers
//# sourceMappingURL=client.js.map