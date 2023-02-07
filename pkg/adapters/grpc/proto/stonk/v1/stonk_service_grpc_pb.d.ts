// package: stonk.v1
// file: stonk_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as stonk_service_pb from "./stonk_service_pb";

interface IStonkServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getStonk: IStonkServiceService_IGetStonk;
}

interface IStonkServiceService_IGetStonk extends grpc.MethodDefinition<stonk_service_pb.GetStonkRequest, stonk_service_pb.GetStonkResponse> {
    path: "/stonk.v1.StonkService/GetStonk";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<stonk_service_pb.GetStonkRequest>;
    requestDeserialize: grpc.deserialize<stonk_service_pb.GetStonkRequest>;
    responseSerialize: grpc.serialize<stonk_service_pb.GetStonkResponse>;
    responseDeserialize: grpc.deserialize<stonk_service_pb.GetStonkResponse>;
}

export const StonkServiceService: IStonkServiceService;

export interface IStonkServiceServer extends grpc.UntypedServiceImplementation {
    getStonk: grpc.handleUnaryCall<stonk_service_pb.GetStonkRequest, stonk_service_pb.GetStonkResponse>;
}

export interface IStonkServiceClient {
    getStonk(request: stonk_service_pb.GetStonkRequest, callback: (error: grpc.ServiceError | null, response: stonk_service_pb.GetStonkResponse) => void): grpc.ClientUnaryCall;
    getStonk(request: stonk_service_pb.GetStonkRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: stonk_service_pb.GetStonkResponse) => void): grpc.ClientUnaryCall;
    getStonk(request: stonk_service_pb.GetStonkRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: stonk_service_pb.GetStonkResponse) => void): grpc.ClientUnaryCall;
}

export class StonkServiceClient extends grpc.Client implements IStonkServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getStonk(request: stonk_service_pb.GetStonkRequest, callback: (error: grpc.ServiceError | null, response: stonk_service_pb.GetStonkResponse) => void): grpc.ClientUnaryCall;
    public getStonk(request: stonk_service_pb.GetStonkRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: stonk_service_pb.GetStonkResponse) => void): grpc.ClientUnaryCall;
    public getStonk(request: stonk_service_pb.GetStonkRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: stonk_service_pb.GetStonkResponse) => void): grpc.ClientUnaryCall;
}
