import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getMultiplication(data: number[]): number {
    console.log(data);
    console.log(data.reduce((acc, data) => acc * data));
    return (data || []).reduce((acc, data) => acc * data);
  }
}
