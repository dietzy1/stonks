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
    //Entry point for the getStonk RPC method
    async getStonk(call, callback) {
        console.log("getStonk called");
        //Create response protobuf object
        const res = new stonk_service_pb_js_1.GetStonkResponse();
        //Call domain method
        this.d.getStonk(call.request.getStonk()).then((stock) => {
            if (stock) {
                res.setStonk(stock.ticker);
                res.setBuyornot(stock.buyornot);
            }
        });
        res.serializeBinary();
        callback(null, res);
    }
    //Entry point for the Gainers RPC method
    async gainers(call, callback) {
        //Implementation
        console.log("Gainers called");
        const res = new stonk_service_pb_js_1.GainersResponse();
        res.setAvgVolume("1");
        res.serializeBinary;
        callback(null, res);
    }
    //entry point for the Losers RPC method
    async loosers(call, callback) {
        //Implementation
        console.log("Loosers called");
        const res = new stonk_service_pb_js_1.LoosersResponse();
        res.setAvgVolume("2");
        res.serializeBinary;
        callback(null, res);
    }
    //entry point for the Compare RPC method
    async compare(call, callback) {
        //Implementation
        const res = new stonk_service_pb_js_1.CompareResponse();
        res.setStrat("3");
        res.serializeBinary;
        callback(null, res);
        console.log("Compare called");
    }
}
exports.Server = Server;
//Needs to accept a server
function startServer(s) {
    var server = new grpc.Server();
    grpc.setLogVerbosity(grpc.logVerbosity.DEBUG);
    grpc.setLogger(console);
    server.addService(stonk_service_grpc_pb_js_1.StonkServiceService, s);
    server.bindAsync("0.0.0.0:8000", grpc.ServerCredentials.createInsecure(), () => {
        server.start();
    });
    console.log("Server running at localhost:8000");
}
exports.startServer = startServer;
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