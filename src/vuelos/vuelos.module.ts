import { Module } from '@nestjs/common';
import { VuelosService } from './vuelos.service';
import { VuelosController } from './vuelos.controller';
import { AeropuertosModule } from 'src/aeropuertos/aeropuertos.module';

@Module({
  imports: [AeropuertosModule],
  controllers: [VuelosController],
  providers: [VuelosService],
  exports: [VuelosService],
})
export class VuelosModule {}
