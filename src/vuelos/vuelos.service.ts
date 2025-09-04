import { Injectable } from '@nestjs/common';
import { CreateVueloDto } from './dto/create-vuelo.dto';
import { UpdateVueloDto } from './dto/update-vuelo.dto';

@Injectable()
export class VuelosService {
  obtenerPorId(vueloId: number) {
    throw new Error('Method not implemented.');
  }
  create(createVueloDto: CreateVueloDto) {
    return 'This action adds a new vuelo';
  }

  findAll() {
    return `This action returns all vuelos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} vuelo`;
  }

  update(id: number, updateVueloDto: UpdateVueloDto) {
    return `This action updates a #${id} vuelo`;
  }

  remove(id: number) {
    return `This action removes a #${id} vuelo`;
  }
}
