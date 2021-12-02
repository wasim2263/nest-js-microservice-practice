import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getFullName(data: string[]): string {
    return (data || []).reduce((acc, data) => acc + ' ' + data) + ' test';
  }
}
