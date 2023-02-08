// package: stonk.v1
// file: stonk_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as stonk_service_pb from "./stonk_service_pb";

interface IStonkServiceService
  extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getStonk: IStonkServiceService_IGetStonk;
  gainers: IStonkServiceService_IGainers;
  loosers: IStonkServiceService_ILoosers;
  compare: IStonkServiceService_ICompare;
}

interface IStonkServiceService_IGetStonk
  extends grpc.MethodDefinition<
    stonk_service_pb.GetStonkRequest,
    stonk_service_pb.GetStonkResponse
  > {
  path: "/stonk.v1.StonkService/GetStonk";
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<stonk_service_pb.GetStonkRequest>;
  requestDeserialize: grpc.deserialize<stonk_service_pb.GetStonkRequest>;
  responseSerialize: grpc.serialize<stonk_service_pb.GetStonkResponse>;
  responseDeserialize: grpc.deserialize<stonk_service_pb.GetStonkResponse>;
}
interface IStonkServiceService_IGainers
  extends grpc.MethodDefinition<
    stonk_service_pb.GainersRequest,
    stonk_service_pb.GainersResponse
  > {
  path: "/stonk.v1.StonkService/Gainers";
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<stonk_service_pb.GainersRequest>;
  requestDeserialize: grpc.deserialize<stonk_service_pb.GainersRequest>;
  responseSerialize: grpc.serialize<stonk_service_pb.GainersResponse>;
  responseDeserialize: grpc.deserialize<stonk_service_pb.GainersResponse>;
}
interface IStonkServiceService_ILoosers
  extends grpc.MethodDefinition<
    stonk_service_pb.LoosersRequest,
    stonk_service_pb.LoosersResponse
  > {
  path: "/stonk.v1.StonkService/Loosers";
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<stonk_service_pb.LoosersRequest>;
  requestDeserialize: grpc.deserialize<stonk_service_pb.LoosersRequest>;
  responseSerialize: grpc.serialize<stonk_service_pb.LoosersResponse>;
  responseDeserialize: grpc.deserialize<stonk_service_pb.LoosersResponse>;
}
interface IStonkServiceService_ICompare
  extends grpc.MethodDefinition<
    stonk_service_pb.CompareRequest,
    stonk_service_pb.CompareResponse
  > {
  path: "/stonk.v1.StonkService/Compare";
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<stonk_service_pb.CompareRequest>;
  requestDeserialize: grpc.deserialize<stonk_service_pb.CompareRequest>;
  responseSerialize: grpc.serialize<stonk_service_pb.CompareResponse>;
  responseDeserialize: grpc.deserialize<stonk_service_pb.CompareResponse>;
}

export const StonkServiceService: IStonkServiceService;

export interface IStonkServiceServer extends grpc.UntypedServiceImplementation {
  getStonk: grpc.handleUnaryCall<
    stonk_service_pb.GetStonkRequest,
    stonk_service_pb.GetStonkResponse
  >;
  gainers: grpc.handleUnaryCall<
    stonk_service_pb.GainersRequest,
    stonk_service_pb.GainersResponse
  >;
  loosers: grpc.handleUnaryCall<
    stonk_service_pb.LoosersRequest,
    stonk_service_pb.LoosersResponse
  >;
  compare: grpc.handleUnaryCall<
    stonk_service_pb.CompareRequest,
    stonk_service_pb.CompareResponse
  >;
}

export interface IStonkServiceClient {
  getStonk(
    request: stonk_service_pb.GetStonkRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: stonk_service_pb.GetStonkResponse
    ) => void
  ): grpc.ClientUnaryCall;
  getStonk(
    request: stonk_service_pb.GetStonkRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: stonk_service_pb.GetStonkResponse
    ) => void
  ): grpc.ClientUnaryCall;
  getStonk(
    request: stonk_service_pb.GetStonkRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: stonk_service_pb.GetStonkResponse
    ) => void
  ): grpc.ClientUnaryCall;
  gainers(
    request: stonk_service_pb.GainersRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: stonk_service_pb.GainersResponse
    ) => void
  ): grpc.ClientUnaryCall;
  gainers(
    request: stonk_service_pb.GainersRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: stonk_service_pb.GainersResponse
    ) => void
  ): grpc.ClientUnaryCall;
  gainers(
    request: stonk_service_pb.GainersRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: stonk_service_pb.GainersResponse
    ) => void
  ): grpc.ClientUnaryCall;
  loosers(
    request: stonk_service_pb.LoosersRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: stonk_service_pb.LoosersResponse
    ) => void
  ): grpc.ClientUnaryCall;
  loosers(
    request: stonk_service_pb.LoosersRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: stonk_service_pb.LoosersResponse
    ) => void
  ): grpc.ClientUnaryCall;
  loosers(
    request: stonk_service_pb.LoosersRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: stonk_service_pb.LoosersResponse
    ) => void
  ): grpc.ClientUnaryCall;
  compare(
    request: stonk_service_pb.CompareRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: stonk_service_pb.CompareResponse
    ) => void
  ): grpc.ClientUnaryCall;
  compare(
    request: stonk_service_pb.CompareRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: stonk_service_pb.CompareResponse
    ) => void
  ): grpc.ClientUnaryCall;
  compare(
    request: stonk_service_pb.CompareRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: stonk_service_pb.CompareResponse
    ) => void
  ): grpc.ClientUnaryCall;
}

export class StonkServiceClient
  extends grpc.Client
  implements IStonkServiceClient
{
  constructor(
    address: string,
    credentials: grpc.ChannelCredentials,
    options?: Partial<grpc.ClientOptions>
  );
  public getStonk(
    request: stonk_service_pb.GetStonkRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: stonk_service_pb.GetStonkResponse
    ) => void
  ): grpc.ClientUnaryCall;
  public getStonk(
    request: stonk_service_pb.GetStonkRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: stonk_service_pb.GetStonkResponse
    ) => void
  ): grpc.ClientUnaryCall;
  public getStonk(
    request: stonk_service_pb.GetStonkRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: stonk_service_pb.GetStonkResponse
    ) => void
  ): grpc.ClientUnaryCall;
  public gainers(
    request: stonk_service_pb.GainersRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: stonk_service_pb.GainersResponse
    ) => void
  ): grpc.ClientUnaryCall;
  public gainers(
    request: stonk_service_pb.GainersRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: stonk_service_pb.GainersResponse
    ) => void
  ): grpc.ClientUnaryCall;
  public gainers(
    request: stonk_service_pb.GainersRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: stonk_service_pb.GainersResponse
    ) => void
  ): grpc.ClientUnaryCall;
  public loosers(
    request: stonk_service_pb.LoosersRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: stonk_service_pb.LoosersResponse
    ) => void
  ): grpc.ClientUnaryCall;
  public loosers(
    request: stonk_service_pb.LoosersRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: stonk_service_pb.LoosersResponse
    ) => void
  ): grpc.ClientUnaryCall;
  public loosers(
    request: stonk_service_pb.LoosersRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: stonk_service_pb.LoosersResponse
    ) => void
  ): grpc.ClientUnaryCall;
  public compare(
    request: stonk_service_pb.CompareRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: stonk_service_pb.CompareResponse
    ) => void
  ): grpc.ClientUnaryCall;
  public compare(
    request: stonk_service_pb.CompareRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: stonk_service_pb.CompareResponse
    ) => void
  ): grpc.ClientUnaryCall;
  public compare(
    request: stonk_service_pb.CompareRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: stonk_service_pb.CompareResponse
    ) => void
  ): grpc.ClientUnaryCall;
}
