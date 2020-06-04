import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Booking } from '../models/booking';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  apiUrl = 'https://obscure-island-00733.herokuapp.com/spa/reserva';
  constructor(
    private http: HttpClient
  ) { }

  getBooking(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  getBookings(worker: string) {
    return this.http.get(`${this.apiUrl}/search/home/${worker}`);
  }

  updateReserva(id: string|number, updatedReserva: Booking): Observable<Booking> {
    return this.http.put(`${this.apiUrl}/update/${id}`, updatedReserva);
  }

}
