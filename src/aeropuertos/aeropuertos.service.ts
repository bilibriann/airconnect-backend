import { Injectable } from '@nestjs/common';
import { Aeropuerto } from './entities/aeropuerto.entity';
import { CreateAeropuertoDto } from './dto/create-aeropuerto.dto';

@Injectable()
export class AeropuertosService {
  private aeropuertos: Aeropuerto[] = [];
  private seq = 1;

  create(dto: CreateAeropuertoDto): Aeropuerto {
    const existe = this.aeropuertos.some(
      (a) => a.codigo.toUpperCase() === dto.codigo.toUpperCase(),
    );
    if (existe) {
      throw new Error('El aeropuerto ya existe');
    }
    const aeropuerto: Aeropuerto = {
      id: this.seq++,
      codigo: dto.codigo,
      nombre: dto.nombre,
      ciudad: dto.ciudad,
    };
    this.aeropuertos.push(aeropuerto);
    return aeropuerto;
  }
  obtenerAeropuertoPorId(id: number): Aeropuerto | undefined {
    const aeropuerto = this.aeropuertos.find((a) => a.id === id);
    if (!aeropuerto) {
      throw new Error('Aeropuerto no encontrado');
    }
    return aeropuerto;
  }
  obtenerTodosLosAeropuertos(): Aeropuerto[] {
    return this.aeropuertos;
  }

  buscarPorCodigo(codigo: string): Aeropuerto | undefined {
    return this.aeropuertos.find(
      (a) => a.codigo.toUpperCase() === codigo.toUpperCase(),
    );

  }
}
