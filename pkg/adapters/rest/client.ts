import { stock } from "../../domain/domain.js";

interface client {
  getStockData(date: string, ticker: string): Promise<stock | undefined>;
}

class Client implements client {}

export const ok = new Client();

ok.getStockData;

export async function getStockData(
  date: string,
  ticker: string
): Promise<stock | undefined> {
  try {
    const res = await fetch(
      //`https://api.polygon.io/v1/open-close/SPY/2023-01-23?adjusted=false&apiKey=${process.env}`,
      `https://api.polygon.io/v1/open-close/${ticker}/${date}?adjusted=false&apiKey=${process.env.KEY}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data: stock = await res.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}
