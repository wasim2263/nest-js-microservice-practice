import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppGrpcService } from './app.grpc.service';
import { AppService } from './app.service';
import { BullModule } from '@nestjs/bull';
import { KafkaService } from './kafka.service';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService, AppGrpcService, KafkaService],
})
export class AppModule {}
