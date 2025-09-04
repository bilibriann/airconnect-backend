
import { UpdatePasajeroDto } from './dto/update-pasajero.dto';
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PasajerosService } from './pasajeros.service';
import { CreatePasajeroDto } from './dto/create-pasajero.dto';
import { Pasajero } from './entities/pasajero.entity';

@ApiTags('pasajeros')

@Controller('pasajeros')
export class PasajerosController {
  constructor(private readonly pasajerosService: PasajerosService) {}

  registrar(@Body() createPasajeroDto: CreatePasajeroDto): Pasajero {
    return this.pasajerosService.create(createPasajeroDto);
  }

  @Get(':id')
  obtenerPorId(@Param('id', ParseIntPipe) id: number): Pasajero {
    return this.pasajerosService.obtenerPorId(id);
  }

  @Get()
  obtenerTodos(): Pasajero[] {
    return this.pasajerosService.obtenerTodos();
  }

  @Delete(':id')
  eliminar(@Param('id', ParseIntPipe) id: number): void {
    this.pasajerosService.eliminar(id);

  }
}
