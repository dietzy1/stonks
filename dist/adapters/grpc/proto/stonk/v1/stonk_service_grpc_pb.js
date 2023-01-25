// GENERATED CODE -- DO NOT EDIT!

"use strict";
var grpc = require("@grpc/grpc-js");
var stonk_service_pb = require("./stonk_service_pb.js");

function serialize_stonk_v1_SayHelloRequest(arg) {
  if (!(arg instanceof stonk_service_pb.SayHelloRequest)) {
    throw new Error("Expected argument of type stonk.v1.SayHelloRequest");
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_stonk_v1_SayHelloRequest(buffer_arg) {
  return stonk_service_pb.SayHelloRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_stonk_v1_SayHelloResponse(arg) {
  if (!(arg instanceof stonk_service_pb.SayHelloResponse)) {
    throw new Error("Expected argument of type stonk.v1.SayHelloResponse");
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_stonk_v1_SayHelloResponse(buffer_arg) {
  return stonk_service_pb.SayHelloResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

// The greeting service definition.
var GreeterServiceService = (exports.GreeterServiceService = {
  // Sends a greeting
  sayHello: {
    path: "/stonk.v1.GreeterService/SayHello",
    requestStream: false,
    responseStream: false,
    requestType: stonk_service_pb.SayHelloRequest,
    responseType: stonk_service_pb.SayHelloResponse,
    requestSerialize: serialize_stonk_v1_SayHelloRequest,
    requestDeserialize: deserialize_stonk_v1_SayHelloRequest,
    responseSerialize: serialize_stonk_v1_SayHelloResponse,
    responseDeserialize: deserialize_stonk_v1_SayHelloResponse,
  },
});

exports.GreeterServiceClient = grpc.makeGenericClientConstructor(
  GreeterServiceService
);
