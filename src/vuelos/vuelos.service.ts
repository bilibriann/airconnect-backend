


import { Vuelo } from './entities/vuelo.entity';
import { AeropuertosService } from '../aeropuertos/aeropuertos.service';
import { CreateVueloDto } from './dto/create-vuelo.dto';
import { UpdateEstadoVueloDto } from './dto/update-estado-vuelo.dto';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

@Injectable()
export class VuelosService {
  private vuelos: Vuelo[] = [];
  private contadorId = 1;

  constructor(private readonly aeropuertosService: AeropuertosService) {}

  private verificarAeropuertoExiste(codigo: string) {
    const aeropuerto = this.aeropuertosService
      .obtenerTodosLosAeropuertos()
      .find((a) => a.codigo === codigo);
    if (!aeropuerto) {
      throw new NotFoundException(`Aeropuerto con código ${codigo} no existe`);
    }
  }

  create(dto: CreateVueloDto): Vuelo {
    if (dto.origen === dto.destino) {
      throw new BadRequestException(
        'El aeropuerto de origen y destino no pueden ser iguales',
      );
    }
    this.verificarAeropuertoExiste(dto.origen);
    this.verificarAeropuertoExiste(dto.destino);

    const nuevoVuelo: Vuelo = {
      id: this.contadorId++,
      numeroVuelo: dto.numeroVuelo,
      fechaSalida: dto.fechaSalida,
      duracionEstimada: dto.duracionEstimada,
      origen: dto.origen,
      destino: dto.destino,
      estado: dto.estado || 'Programado',
    };
    this.vuelos.push(nuevoVuelo);
    return nuevoVuelo;
  }
  obtenerPorId(id: number): Vuelo {
    const vuelo = this.vuelos.find((v) => v.id === id);
    if (!vuelo) {
      throw new NotFoundException(`Vuelo con ID ${id} no encontrado`);
    }
    return vuelo;
  }

  obtenerTodos(filtros?: {
    origen?: string;
    estado?: Vuelo['estado'];
  }): Vuelo[] {
    const { origen, estado } = filtros ?? {};
    return this.vuelos.filter((vuelo) => {
      const coincideorigen = origen ? vuelo.origen === origen : true;
      const coincideestado = estado ? vuelo.estado === estado : true;
      return coincideorigen && coincideestado;
    });
  }

  actualizarEstado(id: number, dto: UpdateEstadoVueloDto): Vuelo {
    const vuelo = this.obtenerPorId(id);
    vuelo.estado = dto.estado;
    return vuelo;

  }
}
