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

export interface repo {}

export class Domain {
  constructor(c: client, r: repo) {
    this.c = c;
    this.r = r;
  }

  private c: client;
  private r: repo;

  getStonk(stonk: stock): void {}
}

/* function getDate() {
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
} */
