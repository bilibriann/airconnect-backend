
import { ApiProperty } from '@nestjs/swagger';

export class CreatePasajeroDto {
  @ApiProperty({ example: 'Brian' })
  nombre: string;

  @ApiProperty({ example: 'Vilches' })
  apellido: string;

  @ApiProperty({ example: 'brian@vilches.com' })
  email: string;
}

