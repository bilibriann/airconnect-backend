import { ApiProperty } from '@nestjs/swagger';
import { IsIn } from 'class-validator';

export class UpdateEstadoVueloDto {
  @ApiProperty({ enum: ['Programado', 'En vuelo', 'Aterrizado', 'Cancelado'] })
  @IsIn(['Programado', 'En vuelo', 'Aterrizado', 'Cancelado'])
  estado: 'Programado' | 'En vuelo' | 'Aterrizado' | 'Cancelado';
}
