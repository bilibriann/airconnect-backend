import { ApiProperty } from '@nestjs/swagger';

export class UpdateReservaDto {
  @ApiProperty({
    description: 'Estado actualizado de la reserva',
    example: 'Confirmada',
    enum: ['Confirmada', 'Cancelada', 'Pendiente'],
  })
  estado: 'Confirmada' | 'Cancelada' | 'Pendiente';
}
