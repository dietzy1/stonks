// package: stonk.v1
// file: stonk_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as stonk_service_pb from "./stonk_service_pb.js";

interface IGreeterServiceService
  extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  sayHello: IGreeterServiceService_ISayHello;
}

interface IGreeterServiceService_ISayHello
  extends grpc.MethodDefinition<
    stonk_service_pb.SayHelloRequest,
    stonk_service_pb.SayHelloResponse
  > {
  path: "/stonk.v1.GreeterService/SayHello";
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<stonk_service_pb.SayHelloRequest>;
  requestDeserialize: grpc.deserialize<stonk_service_pb.SayHelloRequest>;
  responseSerialize: grpc.serialize<stonk_service_pb.SayHelloResponse>;
  responseDeserialize: grpc.deserialize<stonk_service_pb.SayHelloResponse>;
}

export const GreeterServiceService: IGreeterServiceService;

export interface IGreeterServiceServer
  extends grpc.UntypedServiceImplementation {
  sayHello: grpc.handleUnaryCall<
    stonk_service_pb.SayHelloRequest,
    stonk_service_pb.SayHelloResponse
  >;
}

export interface IGreeterServiceClient {
  sayHello(
    request: stonk_service_pb.SayHelloRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: stonk_service_pb.SayHelloResponse
    ) => void
  ): grpc.ClientUnaryCall;
  sayHello(
    request: stonk_service_pb.SayHelloRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: stonk_service_pb.SayHelloResponse
    ) => void
  ): grpc.ClientUnaryCall;
  sayHello(
    request: stonk_service_pb.SayHelloRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: stonk_service_pb.SayHelloResponse
    ) => void
  ): grpc.ClientUnaryCall;
}

export class GreeterServiceClient
  extends grpc.Client
  implements IGreeterServiceClient
{
  constructor(
    address: string,
    credentials: grpc.ChannelCredentials,
    options?: Partial<grpc.ClientOptions>
  );
  public sayHello(
    request: stonk_service_pb.SayHelloRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: stonk_service_pb.SayHelloResponse
    ) => void
  ): grpc.ClientUnaryCall;
  public sayHello(
    request: stonk_service_pb.SayHelloRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: stonk_service_pb.SayHelloResponse
    ) => void
  ): grpc.ClientUnaryCall;
  public sayHello(
    request: stonk_service_pb.SayHelloRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: stonk_service_pb.SayHelloResponse
    ) => void
  ): grpc.ClientUnaryCall;
}
