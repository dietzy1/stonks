import { getStockData } from "./adapters/rest/client.js";

import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import

/* require("dotenv").config(); */

main();

function main() {
  console.log("Hello, world!");

  const result = dotenv.config();

  if (result.error) {
    throw result.error;
  }

  console.log(result.parsed);

  getStockData("2023-01-23", "SPY").then((data) => {
    console.log(data);
  });

  //console.log(getStockData("2021-01-01", "SPY"));
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

//I need to write a function that looks at what day it is and looks for the prior 5 weekdays
function getPriorWeekdays() {}
