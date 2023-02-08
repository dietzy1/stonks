import { Client } from "./adapters/rest/client.js";
import { Repo } from "./adapters/repository/repo.js";
import { Domain } from "./domain/domain.js";
import { Server } from "./adapters/grpc/server.js";
import { Scraper } from "./adapters/rest/scraping.js";

import { startServer } from "./adapters/grpc/server.js";

import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import

/* require("dotenv").config(); */

main();

function main() {
  console.log("Hello, world!");

  const result = dotenv.config();

  if (result.error) {
    throw result.error;
  }

  //Initiate scraper client
  const scraper = new Scraper();
  //Initiate fetch client
  const client = new Client();

  //Initiate repository
  const repo = new Repo();

  //Initiate domain
  const domain = new Domain(client, repo, scraper);

  //Initiate GRPC server
  const server = new Server(domain);

  //Start GRPC server
  startServer(server);
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

//Function that decides wether or not friday or monday should be the basis
function chooseDay() {
  const day = new Date().getDay() - 1;

  // within certain intervals you gotta choose data from the previous week
  if (day >= 0 && day <= 3) {
    return "Monday";
  }

  if (day >= 4 && day <= 6) {
    return "Friday";
  }
}

//TODO:THESIS

//if thursday is higher than friday what does that say about the following monday

//if tuesday is lower than monday what does that say about the following wednesday

//im only able to actract open prices from the prior day

//I could write a service that looks for stocks with massive price changes in % from the prior day
