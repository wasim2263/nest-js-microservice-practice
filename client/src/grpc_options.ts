import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const grpcOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'test.multiplication',
    protoPath: join(__dirname, '../src/multiplication.proto'),
  },
};
