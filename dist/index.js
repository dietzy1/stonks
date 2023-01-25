import { Client } from "./adapters/rest/client.js";
import { Repo } from "./adapters/repository/repo.js";
import { Domain } from "./domain/domain.js";
import { Server } from "./adapters/grpc/server.js";
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
    //Initiate fetch client
    const client = new Client();
    const repo = new Repo();
    const domain = new Domain(client, repo);
    const server = new Server(domain);
    startServer();
}
//# sourceMappingURL=index.js.map