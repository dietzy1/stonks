//implement the server with express here

import express from "express";
import { stock, scraperStock, recommendation } from "../../domain/domain";

interface domain {
  getStonk(ticker: string): Promise<recommendation | undefined>;
  getGainers(): Promise<scraperStock[]>;
  getLoosers(): Promise<scraperStock[]>;
  compare(): Promise<void>;
}

class Server {
  private app: express.Application;
  private port: number;
  private d: domain;
  constructor(d: domain) {
    this.d = d;
    this.app = express();
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));

    this.port = parseInt(process.env.PORT) || 3000;

    this.app.listen(this.port, () => {
      console.log(`Server listening on port ${this.port}`);
    });
  }

  //entry point for the getStonk REST method
  async getStonk(req: express.Request, res: express.Response) {
    console.log("getStonk called");
    //Call domain method
    this.d.getStonk(req.body.ticker).then((stock: recommendation) => {
      if (stock) {
        res.send(stock);
      }
    });
  }

  //entry point for the Gainers REST method
  async gainers(req: express.Request, res: express.Response) {
    console.log("Gainers called");
    this.d.getGainers().then((stock: scraperStock[]) => {
      if (stock) {
        res.send(stock);
      }
    });
  }

  //entry point for the Loosers REST method
  async loosers(req: express.Request, res: express.Response) {
    console.log("Loosers called");
    this.d.getLoosers().then((stock: scraperStock[]) => {
      if (stock) {
        res.send(stock);
      }
    });
  }
}
