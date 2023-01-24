import { MongoClient } from "mongodb";

import { stock } from "../../domain/domain.js";

export class Repo {
  constructor() {
    this.client = connectDb();
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
  async insertStockData(data: stock): Promise<void> {
    try {
      const db = this.client.db("stocks");
      const collection = db.collection<stock>("stocks");
      await collection.insertOne(data);
    } catch (err) {
      console.error(err);
    }
  }
}

function connectDb(): MongoClient {
  try {
    const client = new MongoClient(process.env.MONGO_URI);
    return client;
  } catch (err) {
    console.log(err);
    throw err;
  }
}
