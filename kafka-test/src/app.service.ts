import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  findUserByUserId(id : number) {
    return "wasim"+id.toString();
  }
}