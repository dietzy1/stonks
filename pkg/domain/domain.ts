export type stock = {
  low: number;
  open: number;
  close: number;
  high: number;
  date: string;
};

export type recommendation = {
  ticker: string;
  buyornot: string;
};

export type scraperStock = {
  symbyl: string;
  name: string;
  price: string;
  change: string;
  percentChange: string;
  volume: string;
  avgVolume: string;
  marketCap: string;
  peRatio: string;
  week52High: string;
  unused: string;
};

export interface client {
  getStockData(date: string, ticker: string): Promise<stock | undefined>;
}

export interface scraper {
  scrapeGainers(): Promise<scraperStock[]>;
  scrapeLoosers(): Promise<scraperStock[]>;
}

export interface repo {
  getStockData(date: string, ticker: string): Promise<stock | undefined>;
  insertStockData(data: stock): Promise<void>;
}

export class Domain {
  constructor(c: client, r: repo, s: scraper) {
    this.c = c;
    this.r = r;
    this.s = s;
  }

  private c: client;
  private r: repo;
  private s: scraper;

  async getStonk(ticker: string): Promise<recommendation | undefined> {
    //find out what date it is here

    //Get stock data
    await this.c.getStockData("", ticker);

    const rec: recommendation = {
      ticker: ticker,
      buyornot: "Buy",
    };

    return rec;
  }

  async getGainers(): Promise<scraperStock[]> {
    //Implementation
    return await this.s.scrapeGainers();
  }

  async getLoosers(): Promise<scraperStock[]> {
    //Implementation
    return await this.s.scrapeLoosers();
  }

  async compare() {
    //Implementation
  }
}

function getDate() {
  const d = new Date();
  const date = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
  console.log(date);

  console.log(d.getDay());

  for (let i = 0; i < 5; i++) {
    const n = new Date(d);
    n.setDate(n.getDate() - i);

    const prior =
      n.getFullYear() + "-" + (n.getMonth() + 1) + "-" + n.getDate();
    console.log(prior);
  }
}
