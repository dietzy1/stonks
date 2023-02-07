generate:
	@echo "Generating..."


 npx grpc_tools_node_protoc \
    --js_out=import_style=commonjs,binary:./dist/adapters/grpc/proto/stonk/v1 \
    --ts_out=generate_package_definition:./pkg/adapters/grpc/proto/stonk/v1 \
    --grpc_out=grpc_js:./dist/adapters/grpc/proto/stonk/v1 \
    -I ./pkg/adapters/grpc/proto/stonk/v1/ \
   stonk_service.proto 



    npx grpc_tools_node_protoc \
    --js_out=import_style=nodenext,binary:./dist/adapters/grpc/proto/stonk/v1 \
    --ts_out=generate_package_definition:./pkg/adapters/grpc/proto/stonk/v1 \
    --grpc_out=grpc_js:./dist/adapters/grpc/proto/stonk/v1 \
    -I ./pkg/adapters/grpc/proto/stonk/v1/ \
   stonk_service.proto 


   grpc_tools_node_protoc 
   --js_out=import_style="commonjs,binary":./dist/js/ 
   --grpc_out=grpc_js:./dist/js/ 
   --proto_path=./proto ./proto/*.proto
