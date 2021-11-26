import { AppService } from './app.service';
import { Body, Logger, Post, Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  private logger = new Logger();

  constructor(private readonly appService: AppService) {}

  @Get('test')
  getHello(): string {
    console.log('new');

    return this.appService.getHello();
  }
  @Post('full-name')
  async getFullName(@Body("data") data: string[],
  ) {
    this.logger.log('adding', data[0]);
    this.logger.log('adding', data[1]);
    return this.appService.getFullName(data);
  }
}
