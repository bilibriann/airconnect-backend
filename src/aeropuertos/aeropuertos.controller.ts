import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AeropuertosService } from './aeropuertos.service';
import { CreateAeropuertoDto } from './dto/create-aeropuerto.dto';

@ApiTags('aeropuertos')
@Controller('aeropuertos')
export class AeropuertosController {
  constructor(private readonly aeropuertosService: AeropuertosService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'Aeropuerto creado exitosamente.' })
  @ApiResponse({ status: 400, description: 'Codigo IATA ya existe.' })
  create(@Body() createAeropuertoDto: CreateAeropuertoDto) {
    return this.aeropuertosService.create(createAeropuertoDto);
  }

  @Get(':id')
  @ApiParam({ name: 'id', type: 'ID del aeropuerto' })
  @ApiResponse({ status: 202 })
  @ApiResponse({ status: 404, description: 'No encontrado.' })
  obtenerAeropuertoPorId(@Param('id') id: string) {
    return this.aeropuertosService.obtenerAeropuertoPorId(+id);
  }

  @Get()
  @ApiResponse({ status: 200, description: 'Lista de aeropuertos.' })
  obtenerTodosLosAeropuertos() {
    return this.aeropuertosService.obtenerTodosLosAeropuertos();
  }
}
