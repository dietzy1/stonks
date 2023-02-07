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
const client_js_1 = require("./adapters/rest/client.js");
const repo_js_1 = require("./adapters/repository/repo.js");
const domain_js_1 = require("./domain/domain.js");
const server_js_1 = require("./adapters/grpc/server.js");
const server_js_2 = require("./adapters/grpc/server.js");
const dotenv = __importStar(require("dotenv")); // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
/* require("dotenv").config(); */
main();
function main() {
    console.log("Hello, world!");
    const result = dotenv.config();
    if (result.error) {
        throw result.error;
    }
    //Initiate fetch client
    const client = new client_js_1.Client();
    const repo = new repo_js_1.Repo();
    const domain = new domain_js_1.Domain(client, repo);
    const server = new server_js_1.Server(domain);
    (0, server_js_2.startServer)(server);
}
//# sourceMappingURL=index.js.map