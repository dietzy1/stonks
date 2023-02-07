// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var stonk_service_pb = require('./stonk_service_pb.js');

function serialize_stonk_v1_GetStonkRequest(arg) {
  if (!(arg instanceof stonk_service_pb.GetStonkRequest)) {
    throw new Error('Expected argument of type stonk.v1.GetStonkRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_stonk_v1_GetStonkRequest(buffer_arg) {
  return stonk_service_pb.GetStonkRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_stonk_v1_GetStonkResponse(arg) {
  if (!(arg instanceof stonk_service_pb.GetStonkResponse)) {
    throw new Error('Expected argument of type stonk.v1.GetStonkResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_stonk_v1_GetStonkResponse(buffer_arg) {
  return stonk_service_pb.GetStonkResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var StonkServiceService = exports.StonkServiceService = {
  getStonk: {
    path: '/stonk.v1.StonkService/GetStonk',
    requestStream: false,
    responseStream: false,
    requestType: stonk_service_pb.GetStonkRequest,
    responseType: stonk_service_pb.GetStonkResponse,
    requestSerialize: serialize_stonk_v1_GetStonkRequest,
    requestDeserialize: deserialize_stonk_v1_GetStonkRequest,
    responseSerialize: serialize_stonk_v1_GetStonkResponse,
    responseDeserialize: deserialize_stonk_v1_GetStonkResponse,
  },
};

exports.StonkServiceClient = grpc.makeGenericClientConstructor(StonkServiceService);
