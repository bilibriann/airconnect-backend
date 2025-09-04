export class Reserva {
  id: number;
  codigoReserva: string;
  fechaReserva: Date;
  estado: 'Confirmada' | 'Cancelada' | 'Pendiente';
  pasajeroId: number;
  vueloId: number;
}
