import * as grpc from "@grpc/grpc-js";
import { GreeterServiceService } from "./proto/stonk/v1/stonk_service_grpc_pb.js";
import { SayHelloResponse, } from "./proto/stonk/v1/stonk_service_pb.js";
export class Server {
    constructor(parameters) { }
}
//I need to rewrite some logic so the generated js filed are going to DIST folder instead of the stonk/v1 folder
//Implement the SayHelloRequest method.
function sayHello(call, callback) {
    var reply = new SayHelloResponse();
    reply.setMessage("Hello " + call.request.getName());
    callback(null, reply);
}
export function startServer() {
    var server = new grpc.Server();
    server.addService(GreeterServiceService, { SayHelloRequest: sayHello });
    server.bindAsync("0.0.0.0:50051", grpc.ServerCredentials.createInsecure(), () => {
        server.start();
    });
}
//navigate from root to v1 folder
//I need to navigate backwards to the root folder for the js files
/* npx grpc_tools_node_protoc \
    --js_out=import_style=commonjs,binary:./dist/adapters/grpc/proto/stonk/v1 \
    --ts_out=generate_package_definition:./pkg/adapters/grpc/proto/stonk/v1 \
    --grpc_out=grpc_js:./dist/adapters/grpc/proto/stonk/v1 \
    -I ./pkg/adapters/grpc/proto/stonk/v1/ \
   stonk_service.proto */
//# sourceMappingURL=server.js.map