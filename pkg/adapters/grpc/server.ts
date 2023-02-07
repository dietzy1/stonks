import * as grpc from "@grpc/grpc-js";
import { ServerUnaryCallImpl } from "@grpc/grpc-js/build/src/server-call.js";
import { StonkServiceService } from "./proto/stonk/v1/stonk_service_grpc_pb.js";

//immport stock from domain folder
import { stock } from "../../domain/domain";

import {
  GetStonkRequest,
  GetStonkResponse,
} from "./proto/stonk/v1/stonk_service_pb.js";

import {
  sendUnaryData,
  ServerDuplexStream,
  ServerReadableStream,
  ServerUnaryCall,
  ServerWritableStream,
  status,
  UntypedHandleCall,
} from "@grpc/grpc-js";

//I need to define the domain interface and then then the server methods should be able to perform call on the domain methods and return the appropiate response
interface domain {
  getStonk(stonk: stock): void;
}

export class Server {
  [key: string]: any;

  private d: domain;

  constructor(d: domain) {
    this.d = d;
  }

  getStonk(
    call: ServerUnaryCall<GetStonkRequest, GetStonkResponse>,
    callback: sendUnaryData<GetStonkResponse>
  ) {
    const res = new GetStonkResponse();
    console.log(call.request.getStonk());
    res.setError("nope");
    res.setStonk("SPY");
    res.setBuyornot("BUY");
    res.serializeBinary();
    callback(null, res);
  }
}

//Needs to accept a server
export function startServer(s: Server) {
  var server = new grpc.Server();

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
