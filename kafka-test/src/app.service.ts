import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  helloUser(name: string) {
    return 'Hello ' + name;
  }
}
