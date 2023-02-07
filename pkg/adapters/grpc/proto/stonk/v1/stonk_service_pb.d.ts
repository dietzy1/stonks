// package: stonk.v1
// file: stonk_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class GetStonkRequest extends jspb.Message { 
    getStonk(): string;
    setStonk(value: string): GetStonkRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetStonkRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetStonkRequest): GetStonkRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetStonkRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetStonkRequest;
    static deserializeBinaryFromReader(message: GetStonkRequest, reader: jspb.BinaryReader): GetStonkRequest;
}

export namespace GetStonkRequest {
    export type AsObject = {
        stonk: string,
    }
}

export class GetStonkResponse extends jspb.Message { 
    getError(): string;
    setError(value: string): GetStonkResponse;
    getStonk(): string;
    setStonk(value: string): GetStonkResponse;
    getBuyornot(): string;
    setBuyornot(value: string): GetStonkResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetStonkResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetStonkResponse): GetStonkResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetStonkResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetStonkResponse;
    static deserializeBinaryFromReader(message: GetStonkResponse, reader: jspb.BinaryReader): GetStonkResponse;
}

export namespace GetStonkResponse {
    export type AsObject = {
        error: string,
        stonk: string,
        buyornot: string,
    }
}
