import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getMultiplication(data: number[]): number {
    return (data || []).reduce((acc, data) => acc * data);
  }
}
