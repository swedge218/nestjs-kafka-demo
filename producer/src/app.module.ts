import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'kafkaproducer',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: '1',
            brokers: ['108.161.133.117:29092'],
          },
          consumer: {
            groupId: 'myremoteconsumers',
          },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
