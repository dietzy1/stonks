"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const scraping_js_1 = require("./adapters/rest/scraping.js");
const dotenv = __importStar(require("dotenv")); // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
/* require("dotenv").config(); */
main();
function main() {
    console.log("Hello, world!");
    const result = dotenv.config();
    if (result.error) {
        throw result.error;
    }
    /*  const ok = chooseDay();
    console.log(ok); */
    /*  const ok = getDate();
    console.log(ok); */
    //initiate scraper client
    const scraper = new scraping_js_1.Scraper();
    scraper.scrapeGainers();
    //Initiate fetch client
    /*   const client = new Client();
  
    const repo = new Repo();
  
    const domain = new Domain(client, repo);
  
    const server = new Server(domain);
  
    startServer(server); */
}
function getDate() {
    const d = new Date();
    const date = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
    console.log(date);
    console.log(d.getDay());
    for (let i = 0; i < 5; i++) {
        const n = new Date(d);
        n.setDate(n.getDate() - i);
        const prior = n.getFullYear() + "-" + (n.getMonth() + 1) + "-" + n.getDate();
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
const day = new Date().getDay();
//use a hashmap to find out what day of the week it is
const map1 = new Map();
//fill out the map
//TODO:THESIS
//if thursday is higher than friday what does that say about the following monday
//if tuesday is lower than monday what does that say about the following wednesday
//im only able to actract open prices from the prior day
//I could write a service that looks for stocks with massive price changes in % from the prior day
//# sourceMappingURL=index.js.map