import { ApiProperty } from '@nestjs/swagger';

export class CreateReservaDto {
  @ApiProperty({
    description: 'Código único de la reserva',
    example: 'ABC123',
  })
  codigoReserva: string;

  @ApiProperty({
    description: 'Fecha de inicio de la reserva',
    example: 'confirmada',
    enum: ['Confirmada', 'Cancelada', 'Pendiente'],
  })
  fechaInicio: Date;
  @ApiProperty({
    description: 'Estado de la reserva',
    example: 'confirmada',
    enum: ['Confirmada', 'Cancelada', 'Pendiente'],
  })
  estado: 'Confirmada' | 'Cancelada' | 'Pendiente';
  @ApiProperty({
    description: 'ID del pasajero asociado a la reserva',
    example: 1,
  })
  pasajeroId: number;
  @ApiProperty({
    description: 'ID del vuelo asociado a la reserva',
    example: 10,
  })
  vueloId: number;
}
