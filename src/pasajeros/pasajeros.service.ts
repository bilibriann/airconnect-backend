import { Injectable } from '@nestjs/common';
import { Pasajero } from './entities/pasajero.entity';
import { CreatePasajeroDto } from './dto/create-pasajero.dto';

@Injectable()
export class PasajerosService {
  private pasajeros: Pasajero[] = [];
  private seq = 1;

  create(dot: CreatePasajeroDto): Pasajero {
    const existe = this.pasajeros.some(
      (pasajero) => pasajero.email === dot.email,
    );
    if (existe) {
      throw new Error('El pasajero ya existe');
    }
    const pasajero: Pasajero = {
      id: this.seq++,
      ...dot,
    };
    this.pasajeros.push(pasajero);
    return pasajero;
  }

  obtenerPorId(id: number): Pasajero {
    const pasajero = this.pasajeros.find((p) => p.id === id);
    if (!pasajero) {
      throw new Error('Pasajero no encontrado');
    }
    return pasajero;
  }

  obtenerTodos(): Pasajero[] {
    return this.pasajeros;
  }

  eliminar(id: number): boolean {
    const index = this.pasajeros.findIndex((p) => p.id === id);
    if (index === -1) {
      throw new Error('Pasajero no encontrado');
    }
    this.pasajeros.splice(index, 1);
    return true;
  }
}
