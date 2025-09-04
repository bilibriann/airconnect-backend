import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VuelosModule } from './vuelos/vuelos.module';

@Module({
  imports: [VuelosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
