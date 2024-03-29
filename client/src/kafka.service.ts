import { Injectable } from '@nestjs/common';
import { Client, ClientKafka, Transport } from '@nestjs/microservices';

@Injectable()
export class KafkaService {
  @Client({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'user',
        brokers: ['localhost:9092'],
      },
      consumer: {
        groupId: 'user-consumer', // consumer same as in micro service
      },
    },
  })
  client: ClientKafka;

  async onModuleInit() {
    /**
     * Here We need to subscribe to topic,
     * so that we get response back
     */
    this.client.subscribeToResponseOf('user-topic');
    await this.client.connect();
  }

  getUserInfo(name: string) {
    return this.client.send('user-topic', { userName: name });
  }
  async publishEvent() {
    console.log('publish event service');
    this.client.emit('user-created', {
      bookName: 'The Way Of Kings',
      author: 'Brandon Sanderson',
    });
  }
}
