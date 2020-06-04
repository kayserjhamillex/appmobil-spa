import { Router } from '@angular/router';
import { Worker } from 'src/app/models/worker';
import { ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { WorkerService } from 'src/app/services/worker.service';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-clientsanother',
  templateUrl: './clientsanother.page.html',
  styleUrls: ['./clientsanother.page.scss'],
})
export class ClientsanotherPage implements OnInit {
  parametros = {
    date: new Date()
  };
  valor = {
    date: ''
  };
  bookings: any = [];
  bookingsfilter: any = [];
  worker: Worker = {
    id: 0,
    Fullname: '',
    Fechana: new Date(),
    Genero: '',
    Celular: '',
    Email: '',
    ImagenMasajista: '',
    Password: '',
    Facebook: '',
    Instagram: '',
    Twitter: ''
  };
  codigoworker;
  view = false;
  constructor(
    private router: Router,
    private workerService: WorkerService,
    private toastcontroller: ToastController,
    private customerService: CustomersService,
  ) { }
  home() {
    this.router.navigate(
      [
        'worker',
        'home'
      ]
    );
  }
  perfil() {
    this.router.navigate(
      [
        'worker',
        'profile'
      ]
    );
  }
  day() {
    this.router.navigate(
      [
        'worker',
        'customersday'
      ]
    );
  }
  another() {
    this.router.navigate(
      [
        'worker',
        'clientsanother'
      ]
    );
  }
  async nohayreservas() {
    const toast = await this.toastcontroller.create({
      message: 'no hay reservas para el dia seleccionado',
      duration: 1500,
      animated: true,
      color: 'tertiary',
      position: 'top'
    });
    toast.present();
  }
  async tieneclientes() {
    const toast = await this.toastcontroller.create({
      message: 'tiene clientes para el dia seleccionado',
      duration: 1500,
      animated: true,
      color: 'success',
      position: 'top'
    });
    toast.present();
  }
  ngOnInit() {
    this.workerService.client$.subscribe(
      res => {
        if (res) {
          this.worker = res;
          this.codigoworker = this.worker.id;
          console.log(this.worker);
        }
      }
    );
    const codigo = this.codigoworker.toString();
    this.customerService.getBookings(codigo).subscribe(
      res => {
        this.bookings = res;
      }
    );
  }
  selectday(day) {
    console.log(day);
    const wasa = new Date(day).getTime();
    console.log(wasa);
    console.log(this.bookings);
    const array = this.bookings;
    const filtro: any = [];
    const fecha = wasa;
    for (const obj of array) {
      const fechas = new Date(obj.FechaReserva).getTime();
      if (fecha === fechas) {
        // console.log('coincidencia de fechas');
        filtro.push(obj);
        this.view = true;
        this.bookingsfilter = filtro;
      }
    }
    if (this.view === true) {
      this.tieneclientes();
    } else {
      this.nohayreservas();
    }
  }
}
