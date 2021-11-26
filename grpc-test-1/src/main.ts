import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  console.log('wasim');
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  Logger.log('Listening at http://localhost:' + 3000 + '/', 'Bootstrap');
}
bootstrap();
