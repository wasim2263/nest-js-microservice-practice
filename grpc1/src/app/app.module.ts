import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'circle',
      password: 'circle123456789',
      database: 'ucb_payment',
      entities: [],
      synchronize: true,
    }),
    PassportModule,
  ],
  // exports: [HttpService]
})
export class AppModule {
  // constructor(private readonly http: HttpService) {
  //   console.log(http)
  // }
}
