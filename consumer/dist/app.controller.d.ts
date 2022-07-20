import { AppService } from './app.service';
import { KafkaContext } from '@nestjs/microservices';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    readMessage(message: any, context: KafkaContext): string;
}
