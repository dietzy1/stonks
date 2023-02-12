import * as grpc from "@grpc/grpc-js";
import {
  StonkServiceService,
  StonkServiceClient,
} from "./proto/stonk/v1/stonk_service_grpc_pb.js";

import { stock, scraperStock, recommendation } from "../../domain/domain";

import {
  GetStonkRequest,
  GetStonkResponse,
  GainersRequest,
  GainersResponse,
  LoosersRequest,
  LoosersResponse,
  CompareRequest,
  CompareResponse,
} from "./proto/stonk/v1/stonk_service_pb.js";

import {
  sendUnaryData,
  ServerUnaryCall,
  UntypedHandleCall,
} from "@grpc/grpc-js";

//I need to define the domain interface and then then the server methods should be able to perform call on the domain methods and return the appropiate response
interface domain {
  getStonk(ticker: string): Promise<recommendation | undefined>;
  getGainers(): Promise<scraperStock[]>;
  getLoosers(): Promise<scraperStock[]>;
  compare(): Promise<void>;
}

export class Server {
  [method: string]: any;

  private d: domain;

  constructor(d: domain) {
    this.d = d;
  }

  //Entry point for the getStonk RPC method
  async getStonk(
    call: ServerUnaryCall<GetStonkRequest, GetStonkResponse>,
    callback: sendUnaryData<GetStonkResponse>
  ): Promise<void> {
    console.log("getStonk called");
    //Create response protobuf object
    const res = new GetStonkResponse();

    //Call domain method
    this.d.getStonk(call.request.getStonk()).then((stock: recommendation) => {
      if (stock) {
        res.setStonk(stock.ticker);
        res.setBuyornot(stock.buyornot);
      }
    });

    res.serializeBinary();
    callback(null, res);
  }

  //Entry point for the Gainers RPC method
  async gainers(
    call: ServerUnaryCall<GainersRequest, GainersResponse>,
    callback: sendUnaryData<GainersResponse>
  ): Promise<void> {
    //Implementation
    console.log("Gainers called");

    const res = new GainersResponse();
    res.setAvgVolume("1");
    res.serializeBinary;
    callback(null, res);
  }

  //entry point for the Losers RPC method
  async loosers(
    call: ServerUnaryCall<LoosersRequest, LoosersResponse>,
    callback: sendUnaryData<LoosersResponse>
  ): Promise<void> {
    //Implementation
    console.log("Loosers called");
    const res = new LoosersResponse();
    res.setAvgVolume("2");
    res.serializeBinary;
    callback(null, res);
  }

  //entry point for the Compare RPC method
  async compare(
    call: ServerUnaryCall<CompareRequest, CompareResponse>,
    callback: sendUnaryData<CompareResponse>
  ): Promise<void> {
    //Implementation
    const res = new CompareResponse();
    res.setStrat("3");
    res.serializeBinary;
    callback(null, res);

    console.log("Compare called");
  }
}

//Needs to accept a server
export function startServer(s: Server) {
  var server = new grpc.Server();
  grpc.setLogVerbosity(grpc.logVerbosity.DEBUG);
  grpc.setLogger(console);

  server.addService(StonkServiceService, s);

  server.bindAsync(
    "0.0.0.0:8000",
    grpc.ServerCredentials.createInsecure(),
    () => {
      server.start();
    }
  );
  console.log("Server running at localhost:8000");
}

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
