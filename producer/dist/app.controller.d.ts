import { AppService } from './app.service';
import { ClientKafka } from '@nestjs/microservices';
export declare class AppController {
    private readonly appService;
    private readonly client;
    constructor(appService: AppService, client: ClientKafka);
    getHello(): string;
    onModuleInit(): Promise<void>;
    onModuleDestroy(): Promise<void>;
    testKafka(): import("rxjs").Observable<any>;
    testKafkaWithResponse(): import("rxjs").Observable<any>;
}
