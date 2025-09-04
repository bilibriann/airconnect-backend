import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { VuelosService } from './vuelos.service';
import { CreateVueloDto } from './dto/create-vuelo.dto';
import { Vuelo } from './entities/vuelo.entity';

@ApiTags('vuelos')
@Controller('vuelos')
export class VuelosController {
  constructor(private readonly vuelosService: VuelosService) {}

  @Post()
  create(@Body() dto: CreateVueloDto) {
    return this.vuelosService.create(dto);
  }
  @Get(':id')
  obtenerPorId(@Param('id', ParseIntPipe) id: number) {
    return this.vuelosService.obtenerPorId(id);
  }
  @Get()
  @ApiQuery({ name: 'origen', required: false })
  @ApiQuery({ name: 'estado', required: false, enum: ['Programado'] })
  obtenerTodos(
    @Query('origen') origen: string,
    @Query('estado')
    estado: 'Programado' | ' Aterrizado' | 'En Vuelo' | 'Cancelado',
  ): Vuelo {
    return this.vuelosService.obtenerTodos({ origen, estado });
  }
  @Patch(':id/esado')
  actualizarEstado(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: ActualizarEstadoVueloDto,
  ): Vuelo {
    return this.vuelosService.actualizarEstado(id, dto);
  }
}
