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
        stonk: string,
        buyornot: string,
    }
}

export class GainersRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GainersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GainersRequest): GainersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GainersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GainersRequest;
    static deserializeBinaryFromReader(message: GainersRequest, reader: jspb.BinaryReader): GainersRequest;
}

export namespace GainersRequest {
    export type AsObject = {
    }
}

export class GainersResponse extends jspb.Message { 
    getSymbol(): string;
    setSymbol(value: string): GainersResponse;
    getName(): string;
    setName(value: string): GainersResponse;
    getPrice(): string;
    setPrice(value: string): GainersResponse;
    getChange(): string;
    setChange(value: string): GainersResponse;
    getPercentChange(): string;
    setPercentChange(value: string): GainersResponse;
    getVolume(): string;
    setVolume(value: string): GainersResponse;
    getAvgVolume(): string;
    setAvgVolume(value: string): GainersResponse;
    getMarketCap(): string;
    setMarketCap(value: string): GainersResponse;
    getPeRatio(): string;
    setPeRatio(value: string): GainersResponse;
    getWeek52High(): string;
    setWeek52High(value: string): GainersResponse;
    getUnused(): string;
    setUnused(value: string): GainersResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GainersResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GainersResponse): GainersResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GainersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GainersResponse;
    static deserializeBinaryFromReader(message: GainersResponse, reader: jspb.BinaryReader): GainersResponse;
}

export namespace GainersResponse {
    export type AsObject = {
        symbol: string,
        name: string,
        price: string,
        change: string,
        percentChange: string,
        volume: string,
        avgVolume: string,
        marketCap: string,
        peRatio: string,
        week52High: string,
        unused: string,
    }
}

export class LoosersRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LoosersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: LoosersRequest): LoosersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LoosersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LoosersRequest;
    static deserializeBinaryFromReader(message: LoosersRequest, reader: jspb.BinaryReader): LoosersRequest;
}

export namespace LoosersRequest {
    export type AsObject = {
    }
}

export class LoosersResponse extends jspb.Message { 
    getSymbol(): string;
    setSymbol(value: string): LoosersResponse;
    getName(): string;
    setName(value: string): LoosersResponse;
    getPrice(): string;
    setPrice(value: string): LoosersResponse;
    getChange(): string;
    setChange(value: string): LoosersResponse;
    getPercentChange(): string;
    setPercentChange(value: string): LoosersResponse;
    getVolume(): string;
    setVolume(value: string): LoosersResponse;
    getAvgVolume(): string;
    setAvgVolume(value: string): LoosersResponse;
    getMarketCap(): string;
    setMarketCap(value: string): LoosersResponse;
    getPeRatio(): string;
    setPeRatio(value: string): LoosersResponse;
    getWeek52High(): string;
    setWeek52High(value: string): LoosersResponse;
    getUnused(): string;
    setUnused(value: string): LoosersResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LoosersResponse.AsObject;
    static toObject(includeInstance: boolean, msg: LoosersResponse): LoosersResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LoosersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LoosersResponse;
    static deserializeBinaryFromReader(message: LoosersResponse, reader: jspb.BinaryReader): LoosersResponse;
}

export namespace LoosersResponse {
    export type AsObject = {
        symbol: string,
        name: string,
        price: string,
        change: string,
        percentChange: string,
        volume: string,
        avgVolume: string,
        marketCap: string,
        peRatio: string,
        week52High: string,
        unused: string,
    }
}

export class CompareRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CompareRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CompareRequest): CompareRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CompareRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CompareRequest;
    static deserializeBinaryFromReader(message: CompareRequest, reader: jspb.BinaryReader): CompareRequest;
}

export namespace CompareRequest {
    export type AsObject = {
    }
}

export class CompareResponse extends jspb.Message { 
    getStrat(): string;
    setStrat(value: string): CompareResponse;
    getNoStrat(): string;
    setNoStrat(value: string): CompareResponse;
    getGraphLink(): string;
    setGraphLink(value: string): CompareResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CompareResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CompareResponse): CompareResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CompareResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CompareResponse;
    static deserializeBinaryFromReader(message: CompareResponse, reader: jspb.BinaryReader): CompareResponse;
}

export namespace CompareResponse {
    export type AsObject = {
        strat: string,
        noStrat: string,
        graphLink: string,
    }
}
