import { Module } from '@nestjs/common';
import { VuelosService } from './vuelos.service';
import { VuelosController } from './vuelos.controller';
import { ReservasModule } from './reservas/reservas.module';

@Module({
  controllers: [VuelosController],
  providers: [VuelosService],
  imports: [ReservasModule],
})
export class VuelosModule {}
