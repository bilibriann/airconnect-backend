import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PasajerosModule } from './pasajeros/pasajeros.module';
import { VuelosModule } from './vuelos/vuelos.module';
import { AeropuertosModule } from './aeropuertos/aeropuertos.module';

@Module({
  imports: [PasajerosModule, VuelosModule, AeropuertosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
