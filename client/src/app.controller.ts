import { AppService } from './app.service';
import { Body, Logger, Post, Controller, Get } from '@nestjs/common';
import { AppGrpcService } from './app.grpc.service';
@Controller()
export class AppController {
  private logger = new Logger();
  constructor(private readonly appService: AppService,
    private readonly appGrpcService: AppGrpcService) {}
  @Post('full-name')
  async getFullName(@Body('data') data: string[]) {
    this.logger.log('adding', data[0]);
    this.logger.log('adding', data[1]);
    return this.appService.getFullName(data);
  }
  @Post('summation')
  async getSummation(@Body('data') data: number[]) {
    this.logger.log('adding 1', data[0]);
    this.logger.log('adding 2', data[1]);
    return this.appService.getSummation(data);
  }
  @Post('multiplication')
  getMultiplication(@Body('data') data: number[]) {
    return this.appGrpcService.getMultiplication(data);
  }
}
