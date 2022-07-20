import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {
  Ctx,
  KafkaContext,
  MessagePattern,
  Payload
} from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @MessagePattern('kafka.test')
  readMessage(@Payload() message: any, @Ctx() context: KafkaContext) {
    const originalMessage = context.getMessage();
    const response =
      'Receiving a new message from topic: kafka.test: ' +
      JSON.stringify(originalMessage.value);
    console.log(response);
    return response;
  }

}
