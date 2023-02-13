import { MongoClient } from "mongodb";

import { stock, scraperStock } from "../../domain/domain.js";

export class Repo {
  constructor() {
    this.client = this.connectDb();
  }

  private client: MongoClient;

  //needs to be tested
  async getStockData(date: string, ticker: string): Promise<stock | undefined> {
    try {
      const db = this.client.db("stocks");
      const collection = db.collection<stock>("stocks");
      const data = await collection.findOne({ date: date, ticker: ticker });
      return data;
    } catch (err) {
      console.error(err);
    }
  }

  //Needs to be tested
  public async insertStockData(data: stock): Promise<void> {
    try {
      const db = this.client.db("stocks");
      const collection = db.collection<stock>("stocks");
      await collection.insertOne(data);
    } catch (err) {
      console.error(err);
    }
  }
  public async insertGainerData(data: scraperStock[]): Promise<void> {
    try {
      const db = this.client.db("stocks");
      const collection = db.collection<scraperStock>("gainers");
      await collection.insertMany(data);
    } catch (err) {
      console.error(err);
    }
  }
  public async insertLooserData(data: scraperStock[]): Promise<void> {
    try {
      const db = this.client.db("stocks");
      const collection = db.collection<scraperStock>("loosers");
      await collection.insertMany(data);
    } catch (err) {
      console.error(err);
    }
  }

  private connectDb(): MongoClient {
    try {
      const client = new MongoClient(process.env.MONGO_URI);
      return client;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}
