import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { url } from 'inspector';
const logger = new Logger('Main');
const microserviceOptions = {
  transport: Transport.REDIS,
  options: {
    url: 'redis://localhost:6379',
  },
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
  logger.log('Microservice listening ...');
}
bootstrap();
