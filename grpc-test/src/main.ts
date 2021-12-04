import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';
const logger = new Logger('Main');
console.log(join(__dirname, 'multiplication.proto'));
const microserviceOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'test.multiplication',
    protoPath: join(__dirname, '../src/multiplication.proto'),
  },
};

async function bootstrap() {
  console.log(microserviceOptions);
  const app = await NestFactory.createMicroservice(
    AppModule,
    microserviceOptions,
  );
  app.listen();
  logger.log('Microservice listening ...');
}
bootstrap();
