import { Worker } from '../models/worker';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkerService {
  client = new BehaviorSubject<any>(null);
  client$ = this.client.asObservable();

  apiUrl = 'https://obscure-island-00733.herokuapp.com/spa/masajista';
  constructor(
    private http: HttpClient
  ) { }

  loggin(client) {
    const cli = JSON.stringify(client);
    this.client.next(client);
    localStorage.setItem('worker', cli);
  }
  loggout() {
    this.client.next(null);
    localStorage.removeItem('worker');
  }
  isLoggedIn(): boolean {
    if (localStorage.getItem('worker')) {
      console.log('hay worker');
      return true;
    } else {
      console.log('¿no hay worker');
      return false;
    }
  }

  getWorker(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  getSearch(correo: string) {
    return this.http.get(`${this.apiUrl}/search/${correo}`);
  }

  getLogin(correo: string, contra: string) {
    return this.http.get(`${this.apiUrl}/login/${correo}/${contra}`);
  }

  updateWorker(id: string|number, updatedWorker: Worker): Observable<Worker> {
    return this.http.put(`${this.apiUrl}/update/${id}`, updatedWorker);
  }
}
