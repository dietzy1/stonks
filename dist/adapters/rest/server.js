"use strict";
//implement the server with express here
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class Server {
    constructor(d) {
        this.d = d;
        this.app = (0, express_1.default)();
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.port = parseInt(process.env.PORT) || 3000;
        this.app.listen(this.port, () => {
            console.log(`Server listening on port ${this.port}`);
        });
    }
    //entry point for the getStonk REST method
    async getStonk(req, res) {
        console.log("getStonk called");
        try {
            const stock = await this.d.getStonk(req.body.ticker);
            if (stock) {
                res.status(200).send(stock);
            }
        }
        catch (err) {
            console.error(err);
            res.status(400).send(err);
        }
    }
    //entry point for the Gainers REST method
    async gainers(req, res) {
        console.log("Gainers called");
        try {
            this.d.getGainers().then((stock) => {
                if (stock) {
                    res.send(stock);
                }
            });
        }
        catch (err) {
            console.error(err);
            res.send(err);
        }
    }
    //entry point for the Loosers REST method
    async loosers(req, res) {
        console.log("Loosers called");
        this.d.getLoosers().then((stock) => {
            if (stock) {
                res.send(stock);
            }
        });
    }
}
//# sourceMappingURL=server.js.map