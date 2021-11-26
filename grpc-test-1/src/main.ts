import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {Transport, MicroserviceOptions} from '@nestjs/microservices'
const logger = new Logger('Main');
const microserviceOptions = {
  transport: Transport.TCP,
  options: {
    port: 8877,
    host: '127.0.0.1'
  }

};

async function bootstrap() {
  // console.log('wasim');
  // const app = await NestFactory.create(AppModule);
  // await app.listen(3000);

  // Logger.log('Listening at http://localhost:' + 3000 + '/', 'Bootstrap');
  const app = await NestFactory.createMicroservice(
    AppModule,
    microserviceOptions,
  );
  app.listen();
  logger.log('Microservice listening ...')
}
bootstrap();
