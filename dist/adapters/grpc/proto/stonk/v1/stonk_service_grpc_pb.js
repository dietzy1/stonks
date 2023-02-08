// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var stonk_service_pb = require('./stonk_service_pb.js');

function serialize_stonk_v1_CompareRequest(arg) {
  if (!(arg instanceof stonk_service_pb.CompareRequest)) {
    throw new Error('Expected argument of type stonk.v1.CompareRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_stonk_v1_CompareRequest(buffer_arg) {
  return stonk_service_pb.CompareRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_stonk_v1_CompareResponse(arg) {
  if (!(arg instanceof stonk_service_pb.CompareResponse)) {
    throw new Error('Expected argument of type stonk.v1.CompareResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_stonk_v1_CompareResponse(buffer_arg) {
  return stonk_service_pb.CompareResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_stonk_v1_GainersRequest(arg) {
  if (!(arg instanceof stonk_service_pb.GainersRequest)) {
    throw new Error('Expected argument of type stonk.v1.GainersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_stonk_v1_GainersRequest(buffer_arg) {
  return stonk_service_pb.GainersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_stonk_v1_GainersResponse(arg) {
  if (!(arg instanceof stonk_service_pb.GainersResponse)) {
    throw new Error('Expected argument of type stonk.v1.GainersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_stonk_v1_GainersResponse(buffer_arg) {
  return stonk_service_pb.GainersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

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

function serialize_stonk_v1_LoosersRequest(arg) {
  if (!(arg instanceof stonk_service_pb.LoosersRequest)) {
    throw new Error('Expected argument of type stonk.v1.LoosersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_stonk_v1_LoosersRequest(buffer_arg) {
  return stonk_service_pb.LoosersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_stonk_v1_LoosersResponse(arg) {
  if (!(arg instanceof stonk_service_pb.LoosersResponse)) {
    throw new Error('Expected argument of type stonk.v1.LoosersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_stonk_v1_LoosersResponse(buffer_arg) {
  return stonk_service_pb.LoosersResponse.deserializeBinary(new Uint8Array(buffer_arg));
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
  gainers: {
    path: '/stonk.v1.StonkService/Gainers',
    requestStream: false,
    responseStream: false,
    requestType: stonk_service_pb.GainersRequest,
    responseType: stonk_service_pb.GainersResponse,
    requestSerialize: serialize_stonk_v1_GainersRequest,
    requestDeserialize: deserialize_stonk_v1_GainersRequest,
    responseSerialize: serialize_stonk_v1_GainersResponse,
    responseDeserialize: deserialize_stonk_v1_GainersResponse,
  },
  loosers: {
    path: '/stonk.v1.StonkService/Loosers',
    requestStream: false,
    responseStream: false,
    requestType: stonk_service_pb.LoosersRequest,
    responseType: stonk_service_pb.LoosersResponse,
    requestSerialize: serialize_stonk_v1_LoosersRequest,
    requestDeserialize: deserialize_stonk_v1_LoosersRequest,
    responseSerialize: serialize_stonk_v1_LoosersResponse,
    responseDeserialize: deserialize_stonk_v1_LoosersResponse,
  },
  compare: {
    path: '/stonk.v1.StonkService/Compare',
    requestStream: false,
    responseStream: false,
    requestType: stonk_service_pb.CompareRequest,
    responseType: stonk_service_pb.CompareResponse,
    requestSerialize: serialize_stonk_v1_CompareRequest,
    requestDeserialize: deserialize_stonk_v1_CompareRequest,
    responseSerialize: serialize_stonk_v1_CompareResponse,
    responseDeserialize: deserialize_stonk_v1_CompareResponse,
  },
};

exports.StonkServiceClient = grpc.makeGenericClientConstructor(StonkServiceService);
