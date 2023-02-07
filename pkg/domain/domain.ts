export type stock = {
  low: number;
  open: number;
  close: number;
  high: number;
  date: string;
};

export interface client {
  getStockData(date: string, ticker: string): Promise<stock | undefined>;
}

export interface scraper {
  getStonk(stonk: stock): void;
}

export interface repo {
  getStockData(date: string, ticker: string): Promise<stock | undefined>;
  insertStockData(data: stock): Promise<void>;
}

export class Domain {
  constructor(c: client, r: repo) {
    this.c = c;
    this.r = r;
  }

  private c: client;
  private r: repo;

  getStonk(stonk: stock): void {
    console.log("stonk");
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
