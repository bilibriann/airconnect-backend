
export class Vuelo {
  id: number;
  numeroVuelo: string;
  fechaSalida: string;
  duracionEstimada: number;
  origen: string;
  destino: string;
  estado: 'Programado' | 'En vuelo' | 'Aterrizado' | 'Cancelado';
}

