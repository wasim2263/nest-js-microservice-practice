import { AppService } from './app.service';
import { Body, Logger, Post, Controller, Get } from '@nestjs/common';
import { GrpcMethod, MessagePattern } from '@nestjs/microservices';
interface INumberArray {
  data: number[];
}
interface IMultiplicationOfNumberArray {
  multiplication: number;
}
@Controller()
export class AppController {
  private logger = new Logger();
  constructor(private readonly appService: AppService) {}

  @GrpcMethod('AppController', 'GetMultiplication')
  getGrpcMultiplication(data: INumberArray, metadata:any): IMultiplicationOfNumberArray {
    const result =  { multiplication: this.appService.getMultiplication(data.data) }
   console.log(result);
    return result;
  }
}
