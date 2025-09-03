import { ApiProperty } from '@nestjs/swagger';

export class CreateAeropuertoDto {
  @ApiProperty({ example: 'Aeropuerto de Santiago' })
  nombre: string;

  @ApiProperty({ example: 'SCL', description: 'Código IATA del aeropuerto' })
  codigo: string;

  @ApiProperty({ example: 'Santiago' })
  ciudad: string;
}
