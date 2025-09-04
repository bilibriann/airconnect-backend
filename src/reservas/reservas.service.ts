import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Reserva } from './entities/reserva.entity';
import { VuelosService } from 'src/vuelos/vuelos.service';
import { PasajerosService } from 'src/pasajeros/pasajeros.service';
import { CreateReservaDto } from './dto/create-reserva.dto';
import { UpdateReservaDto } from './dto/update-reserva.dto';

@Injectable()
export class ReservasService {
  private reservas: Reserva[] = [];
  private nextId = 1;

  constructor(
    private readonly vuelosService: VuelosService,
    private readonly pasajerosService: PasajerosService,
  ) {}
  create(dto: CreateReservaDto): Reserva {
    this.vuelosService.obtenerPorId(dto.vueloId);
    this.pasajerosService.obtenerPorId(dto.pasajeroId);

    const nuevaReserva: Reserva = {
      id: this.nextId++,
      codigoReserva: dto.codigoReserva,
      fechaReserva: new Date(),
      estado: dto.estado,
      pasajeroId: dto.pasajeroId,
      vueloId: dto.vueloId,
    };
    this.reservas.push(nuevaReserva);
    return nuevaReserva;
  }
  obtenerPorId(reservaId: number): Reserva {
    const reserva = this.reservas.find((r) => r.id === reservaId);
    if (!reserva) {
      throw new HttpException(
        {
          message: `Reserva id ${reservaId} no encontrada`,
        },
        HttpStatus.NOT_FOUND,
      );
    }
    return reserva;
  }
  obtenerTodas(pasajeroId?: number): Reserva[] {
    if (typeof pasajeroId === 'number') {
      return this.reservas.filter((r) => r.pasajeroId === pasajeroId);
    }
    return this.reservas;
  }
  modifiacarEstado(id: number, dto: UpdateReservaDto): Reserva {
    const idx = this.reservas.findIndex((r) => r.id === id);
    if (idx === -1) {
      throw new HttpException(
        {
          message: `Reserva id ${id} no encontrada`,
        },
        HttpStatus.NOT_FOUND,
      );
    }
    this.reservas[idx].estado = dto.estado;
    return this.reservas[idx];
  }
  eliminar(id: number): void {
    const idx = this.reservas.findIndex((r) => r.id === id);
    if (idx === -1) {
      throw new HttpException(
        {
          message: `Reserva id ${id} no encontrada`,
        },
        HttpStatus.NOT_FOUND,
      );
    }
    this.reservas.splice(idx, 1);
  }
}
