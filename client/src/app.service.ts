import { Injectable, Logger } from '@nestjs/common';
import {
  Transport,
  ClientProxyFactory,
  ClientProxy,
} from '@nestjs/microservices';
const logger = new Logger('Main');

@Injectable()
export class AppService {
  private clientProxy: ClientProxy;
  constructor() {
    this.clientProxy = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        port: 8877,
        host: '127.0.0.1',
      },
    });
  }
  getFullName(data: string[]) {
    // return (data || []).reduce((acc, data) => acc + ' ' + data) + ' test';
    return this.clientProxy.send<string, string[]>('full-name', data)
  }
}
