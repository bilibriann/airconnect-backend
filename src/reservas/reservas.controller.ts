import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('reservas')
@Controller('reservas')
export class ReservasController {}
