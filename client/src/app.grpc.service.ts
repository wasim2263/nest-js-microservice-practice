import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { grpcOptions } from './grpc_options';
import { IGrpcService, IMultiplicationOfNumberArray } from './grpc_interface';

const logger = new Logger('Main');

@Injectable()
export class AppGrpcService implements OnModuleInit {
  @Client(grpcOptions)
  private client: ClientGrpc;
  private grpcService: IGrpcService;
  onModuleInit() {
    this.grpcService = this.client.getService<IGrpcService>('AppController');
  }
  async getMultiplication(data: number[]): Promise<IMultiplicationOfNumberArray> {
    console.log('getMultiplication', data);
    const result = await this.grpcService
      .getMultiplication({ data })
      .toPromise();
    console.log('getMultiplication result', result);
    console.log(result);
    return result;
  }
}
