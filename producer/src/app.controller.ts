import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientKafka } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('kafkaproducer') private readonly client: ClientKafka
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  async onModuleInit() {
    ['kafka.test'].forEach((key) => this.client.subscribeToResponseOf(`${key}`));
    await this.client.connect();
  }

  async onModuleDestroy() {
    await this.client.close();
  }

  @Get('kafka-test')
  testKafka(){
    return this.client.emit('kafka.test', {message:'this is the message', date: new Date().toString()})
  }


  @Get('kafka-test-with-response')
  testKafkaWithResponse(){
    return this.client.send('kafka.test', { message:'this is the reply', data: new Date().toString()})
  }

  
}
