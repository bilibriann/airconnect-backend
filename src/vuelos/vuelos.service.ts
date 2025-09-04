import { Injectable, NotFoundException } from '@nestjs/common';
import { Vuelo } from './entities/vuelo.entity';
import { AeropuertosService } from '../aeropuertos/aeropuertos.service';

@Injectable()
export class VuelosService {
  private vuelos: Vuelo[] = [];
  private contadorId = 1;

  constructor(private readonly aeropuertosService: AeropuertosService) {}

  private verificarAeropuertosExiste(codigo: string) {
    const aeropuerto =
      this.aeropuertosService.findByCodigo?.(codigo) ??
      this.aeropuertosService.obtenerPorCodigo?.(codigo);
    if (!aeropuerto) {
      throw new Error(`Aeropuerto con código ${codigo} no existe`);
    }
  }

  create(dto: CrearVueloDto): Vuelo {
    if (dto.origen === dto.destino) {
      throw new Error(
        'El aeropuerto de origen y destino no pueden ser iguales',
      );
    }
    this.verificarAeropuertosExiste(dto.origen);
    this.verificarAeropuertosExiste(dto.destino);

    const nuevoVuelo: Vuelo = {
      id: this.contadorId++,
      numeroVuelo: dto.numeroVuelo,
      fechaSalida: dto.fechaSalida,
      duracionEstimada: dto.duracionEstimada,
      origen: dto.origen,
      destino: dto.destino,
      estado: dto.estado || 'programado',
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

  actualizarEstado(id: number, dto: ActualizarEstadoVueloDto): Vuelo {
    const vuelo = this.obtenerPorId(id);
    vuelo.estado = dto.estado;
    return vuelo;
  }
}
