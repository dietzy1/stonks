import { MongoClient } from "mongodb";
export class Repo {
    constructor() {
        this.client = connectDb();
    }
    //needs to be tested
    async getStockData(date, ticker) {
        try {
            const db = this.client.db("stocks");
            const collection = db.collection("stocks");
            const data = await collection.findOne({ date: date, ticker: ticker });
            return data;
        }
        catch (err) {
            console.error(err);
        }
    }
    //Needs to be tested
    async insertStockData(data) {
        try {
            const db = this.client.db("stocks");
            const collection = db.collection("stocks");
            await collection.insertOne(data);
        }
        catch (err) {
            console.error(err);
        }
    }
}
function connectDb() {
    try {
        const client = new MongoClient(process.env.MONGO_URI);
        return client;
    }
    catch (err) {
        console.log(err);
        throw err;
    }
}
//# sourceMappingURL=repo.js.map