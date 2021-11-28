import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const logger = new Logger('Main');

async function bootstrap() {
  console.log('wasim');
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  logger.log('Listening at http://localhost:' + 3000 + '/', 'Bootstrap');
}
bootstrap();
