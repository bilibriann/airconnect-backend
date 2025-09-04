import { Module } from '@nestjs/common';
import { VuelosService } from './vuelos.service';
import { VuelosController } from './vuelos.controller';

import { ReservasModule } from './reservas/reservas.module';


import { AeropuertosModule } from 'src/aeropuertos/aeropuertos.module';

@Module({
  imports: [AeropuertosModule],
  controllers: [VuelosController],
  providers: [VuelosService],
  exports: [VuelosService],

})
export class VuelosModule {}
