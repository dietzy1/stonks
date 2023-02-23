"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
//Optional SQL repository for storing data
class sqlrepo {
    constructor() {
        this.tables = [
            stockTable,
            gainerTable,
            looserTable, //loosers table
        ];
        this.client = this.connectDb();
        for (const table of this.tables) {
            this.createTable(table);
        }
    }
    async getStockData(date, ticker) {
        try {
            await this.client.query("SELECT * FROM stocks WHERE date = ? AND ticker = ?", [date, ticker], (err, result) => {
                if (err)
                    throw err;
                return result;
            });
        }
        catch (err) {
            console.error(err);
            return undefined;
        }
    }
    async insertStockData(data) {
        try {
            await this.client.query(
            //write some sql that is non injectable and inserts the data
            "INSERT INTO stocks (afterHours, close, from, high, low, open, preMarket, status, symbol, volume) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [
                data.afterHours,
                data.close,
                data.from,
                data.high,
                data.low,
                data.open,
                data.preMarket,
                data.status,
                data.symbol,
                data.volume,
            ], (err, result) => {
                if (err)
                    throw err;
                console.log("Inserted stock data" + result);
            });
        }
        catch (err) {
            console.error(err);
        }
    }
    async insertGainerData(data) {
        try {
            for (let i = 0; i < data.length; i++) {
                await this.client.query(
                //write some sql that is non injectable and inserts the data
                "insert into gainers (symbol, name, price, change, percentChange, volume, avgVolume, marketCap, peRatio, week52High, unused ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [
                    data[i].symbol,
                    data[i].name,
                    data[i].price,
                    data[i].change,
                    data[i].percentChange,
                    data[i].volume,
                    data[i].avgVolume,
                    data[i].marketCap,
                    data[i].peRatio,
                    data[i].week52High,
                    data[i].unused,
                ], (err, result) => {
                    if (err)
                        throw err;
                    console.log("Inserted gainer data" + result);
                });
            }
        }
        catch (err) {
            console.error(err);
        }
    }
    async insertLooserData(data) {
        try {
            for (let i = 0; i < data.length; i++) {
                await this.client.query(
                //write some sql that is non injectable and inserts the data
                "insert into loosers (symbol, name, price, change, percentChange, volume, avgVolume, marketCap, peRatio, week52High, unused ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [
                    data[i].symbol,
                    data[i].name,
                    data[i].price,
                    data[i].change,
                    data[i].percentChange,
                    data[i].volume,
                    data[i].avgVolume,
                    data[i].marketCap,
                    data[i].peRatio,
                    data[i].week52High,
                    data[i].unused,
                ], (err, result) => {
                    if (err)
                        throw err;
                    console.log("Inserted looser data" + result);
                });
            }
        }
        catch (err) {
            console.error(err);
        }
    }
    createDatabase() {
        try {
            this.client.query("CREATE DATABASE mydb", (err, result) => {
                if (err)
                    throw err;
                console.log("Created database" + result);
            });
        }
        catch (err) {
            console.error(err);
            throw err;
        }
    }
    //I need to figure out how to pass in a table name
    createTable(table) {
        try {
            this.client.query("CREATE TABLE ?", [table], (err, result) => {
                if (err)
                    throw err;
                console.log("Created table" + result);
            });
        }
        catch (err) {
            console.error(err);
            throw err;
        }
    }
    connectDb() {
        try {
            const con = mysql_1.default.createConnection({
                host: process.env.MYSQL_HOST,
                user: process.env.MYSQL_USER,
                password: process.env.MYSQL_PASSWORD,
                database: "mydb",
            });
            con.connect(function (err) {
                if (err)
                    throw err;
                console.log("Connected to mysql");
            });
            return con;
        }
        catch (err) {
            console.log(err);
            throw err;
        }
    }
}
//SQL table string that can be passed into createTable()
//Should mimic stock type
const stockTable = `CREATE TABLE stocks (
    afterHours VARCHAR(255),
    close VARCHAR(255),
    from VARCHAR(255),
    high VARCHAR(255),
    low VARCHAR(255),
    open VARCHAR(255),
    preMarket VARCHAR(255),
    status VARCHAR(255),
    symbol VARCHAR(255),
    volume VARCHAR(255)
  )`;
const gainerTable = `CREATE TABLE gainers (
    symbol VARCHAR(255),
    name VARCHAR(255),
    price VARCHAR(255),
    change VARCHAR(255),
    percentChange VARCHAR(255),
    volume VARCHAR(255),
    avgVolume VARCHAR(255),
    marketCap VARCHAR(255),
    peRatio VARCHAR(255),
    week52High VARCHAR(255),
    unused VARCHAR(255)
  )`;
const looserTable = `CREATE TABLE loosers (
    symbol VARCHAR(255),
    name VARCHAR(255),
    price VARCHAR(255),
    change VARCHAR(255),
    percentChange VARCHAR(255),
    volume VARCHAR(255),
    avgVolume VARCHAR(255),
    marketCap VARCHAR(255),
    peRatio VARCHAR(255),
    week52High VARCHAR(255),
    unused VARCHAR(255)
  )`;
//# sourceMappingURL=sql.js.map