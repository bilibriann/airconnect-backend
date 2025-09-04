
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsDateString, IsNumber, Min, IsIn } from 'class-validator';

export class CreateVueloDto {
  @ApiProperty({ example: 'LA401' })
  @IsString()
  numeroVuelo: string;

  @ApiProperty({ example: '2025-09-15' })
  @IsDateString()
  fechaSalida: string;

  @ApiProperty({ example: 9, description: 'Duración en horas' })
  @IsNumber()
  @Min(0.5)
  duracionEstimada: number;

  @ApiProperty({ example: 'Chile', description: 'Ciudad de origen' })
  @IsString()
  origen: string;

  @ApiProperty({ example: 'Puerto Montt' })
  destino: string;

  @ApiProperty({
    example: 'Programado',
    enum: ['Programado', 'En vuelo', 'Aterrizado', 'Cancelado'],
    required: false,
  })
  @IsIn(['Programado', 'En vuelo', 'Aterrizado', 'Cancelado'])
  estado: 'Programado' | 'En vuelo' | 'Aterrizado' | 'Cancelado' = 'Programado';
}
