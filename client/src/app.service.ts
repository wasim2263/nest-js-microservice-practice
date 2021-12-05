import { Injectable, Logger } from '@nestjs/common';
import {
  Transport,
  ClientProxyFactory,
  ClientProxy,
} from '@nestjs/microservices';
const logger = new Logger('Main');

@Injectable()
export class AppService {
  private tcpClientProxy: ClientProxy;
  private redisClientProxy: ClientProxy;

  constructor() {
    this.tcpClientProxy = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        port: 8877,
        host: '127.0.0.1',
      },
    });
    this.redisClientProxy = ClientProxyFactory.create({
      transport: Transport.REDIS,
      options: {
        url: 'redis://localhost:6379',
      },
    });
  }
  getFullName(data: string[]) {
    // return (data || []).reduce((acc, data) => acc + ' ' + data) + ' test';
    return this.tcpClientProxy.send<string, string[]>('full-name', data);
  }

  getSummation(data: number[]) {
    // return (data || []).reduce((acc, data) => acc + ' ' + data) + ' test';
    const result = this.redisClientProxy.send<number, number[]>(
      'summation',
      data,
    );
    console.log(result);
    return result;
  }
}
