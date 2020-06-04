import { Title } from '@angular/platform-browser';

export interface Booking {
    id?: number,
    FechaReserva?: Date,
    Estado?: string,
    AdminSId?: number,
    ClienteSId?: number,
    ServicioSId?: number,
    HorarioSId?: number
}
