import { AppService } from './app.service';
import { Body, Logger, Post, Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
@Controller()
export class AppController {
  private logger = new Logger();
  constructor(private readonly appService: AppService) {}


  @MessagePattern('summation')
  async getRedisSummation(data: number[]) {
    this.logger.log('adding', data[0]);
    this.logger.log('adding', data[1]);
    return this.appService.getSummation(data);
  }
}
