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
exports.startServer = exports.Server = void 0;
const grpc = __importStar(require("@grpc/grpc-js"));
const stonk_service_grpc_pb_js_1 = require("./proto/stonk/v1/stonk_service_grpc_pb.js");
const stonk_service_pb_js_1 = require("./proto/stonk/v1/stonk_service_pb.js");
class Server {
    constructor(d) {
        this.d = d;
    }
    getStonk(call, callback) {
        const res = new stonk_service_pb_js_1.GetStonkResponse();
        console.log(call.request.getStonk());
        res.setError("nope");
        res.setStonk("SPY");
        res.setBuyornot("BUY");
        res.serializeBinary();
        callback(null, res);
    }
}
exports.Server = Server;
//Needs to accept a server
function startServer(s) {
    var server = new grpc.Server();
    server.addService(stonk_service_grpc_pb_js_1.StonkServiceService, s);
    server.bindAsync("0.0.0.0:8000", grpc.ServerCredentials.createInsecure(), () => {
        server.start();
    });
    console.log("Server running at localhost:8000");
}
exports.startServer = startServer;
//I need to rewrite some logic so the generated js filed are going to DIST folder instead of the stonk/v1 folder
//Implement the SayHelloRequest method.
/* function sayHello(call, callback) {
  var reply = new SayHelloResponse();
  reply.setMessage("Hello " + call.request.getName());
  callback(null, reply);
} */
//public sayHello(call: ServerUnaryCall<HelloRequest, HelloResponse>, callback: sendUnaryData<HelloResponse>): void {
/* function getStonk(
  call: ServerUnaryCall<GetStonkRequest, GetStonkResponse>,
  callback: sendUnaryData<GetStonkResponse>
): void {
  // get the request
  const request = call.request;
  console.log("HEHE");
  const stonk = call.request.getStonk;
} */
//# sourceMappingURL=server.js.map