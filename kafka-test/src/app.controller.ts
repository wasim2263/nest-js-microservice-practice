import { Controller, Get } from '@nestjs/common';
import {EventPattern, MessagePattern, Payload} from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('user-topic') // topic name here
  getHello(@Payload() message) {
    const userName = message.value.userName;
    // Plus operator here does string to number conversion on the fly
    return this.appService.helloUser(userName);
  }
  @EventPattern('user-created')
  async userCreatedEvent(data: Record<string, unknown>) {
    console.log('user-created even emitted', data);
  }
}
