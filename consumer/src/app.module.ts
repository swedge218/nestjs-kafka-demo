import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';


@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'kafkaconsumer',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'any_client_id_i_want',
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
