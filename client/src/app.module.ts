import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppGrpcService } from './app.grpc.service';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, AppGrpcService],
})
export class AppModule {}
