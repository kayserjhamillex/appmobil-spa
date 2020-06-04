import { Router } from '@angular/router';
import { Worker } from 'src/app/models/worker';
import { Booking } from 'src/app/models/booking';
import { Component, OnInit } from '@angular/core';
import { Bookingdetail } from 'src/app/models/bookingdetail';
import { WorkerService } from 'src/app/services/worker.service';
import { CustomersService } from 'src/app/services/customers.service';
import { ToastController, ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-customersday',
  templateUrl: './customersday.page.html',
  styleUrls: ['./customersday.page.scss'],
})
export class CustomersdayPage implements OnInit {
  hoy: Date = new Date();
  lafechasa;
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
  bandera = false;
  booking: Booking = {
    id: 0,
    FechaReserva: new Date(),
    Estado: '',
    AdminSId: 0,
    ClienteSId: 0,
    ServicioSId: 0,
    HorarioSId: 0
  };
  booking1: Booking = {
    id: 0,
    FechaReserva: new Date(),
    Estado: '',
    AdminSId: 0,
    ClienteSId: 0,
    ServicioSId: 0,
    HorarioSId: 0
  };
  reserva: Bookingdetail = {
    id: 0,
    FechaReserva: new Date(),
    Estado: '',
    AdminSId: 0,
    ClienteSId: 0,
    ServicioSId: 0,
    HorarioSId: 0,
    admin: {
      id: 0,
      Fullname: '',
      Correo: '',
    },
    cliente: {
      id: 0,
      Fullname: '',
      Numerodocumento: '',
      Email: '',
    },
    servicio: {
      id: 0,
      Name: '',
      Resumen: '',
      Monto: ''
    },
    horario: {
      id: 0,
      Dia: '',
      MasajistaId: 0,
      HoraId: 0,
      hora: {
        id: 0,
        Horainicio: '',
        Horafin: '',
      },
      masajista: {
        id: 0,
        Fullname: '',
        Genero: '',
        Celular: '',
        Email: '',
        ImagenMasajista: '',
      },
    }
  };
  ticket: any = this.reserva;
  respuesta1;
  respuesta2;
  constructor(
    private router: Router,
    private workerService: WorkerService,
    private toastcontroller: ToastController,
    private customerService: CustomersService,
    public actionSheetController: ActionSheetController,
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
  fechadeldia() {
    const d = this.hoy.getDate();
    const m = this.hoy.getMonth() + 1;
    const yyyy = this.hoy.getFullYear();
    let dd: any;
    let mm: any;
    let pinshifecha: string;
    if (d < 10) {
      dd = '0' + d;
    } else {
      dd = d;
    }
    if (m < 10) {
      mm = '0' + m;
    } else {
      mm = m;
    }
    const cadena = yyyy + '-' + mm + '-' + 21;
    pinshifecha = cadena.toString();
    // console.log(cadena);
    console.log(pinshifecha);
    const a2 = new Date(pinshifecha).getTime();
    console.log(a2);
    this.lafechasa = a2;
  }
  async atendido() {
    const toast = await this.toastcontroller.create({
      message: 'reserva atendido',
      duration: 1500,
      animated: true,
      color: 'primary',
      position: 'top'
    });
    toast.present();
  }
  async nollego() {
    const toast = await this.toastcontroller.create({
      message: 'el cliente no llego',
      duration: 1500,
      animated: true,
      color: 'danger',
      position: 'top'
    });
    toast.present();
  }
  async nohayreservas() {
    const toast = await this.toastcontroller.create({
      message: 'no hay reservas para hoy',
      duration: 1500,
      animated: true,
      color: 'tertiary',
      position: 'top'
    });
    toast.present();
  }
  async tieneclientes() {
    const toast = await this.toastcontroller.create({
      message: 'tiene clientes para hoy',
      duration: 1500,
      animated: true,
      color: 'success',
      position: 'top'
    });
    toast.present();
  }
  async accion(wasa) {
    const actionSheet = await this.actionSheetController.create(
      {
        header: 'Accion',
        buttons: [
          {
            text: 'Atendido',
            icon: 'checkmark-outline',
            handler: () => {
              console.log(wasa);
              this.customerService.getBooking(wasa).subscribe(
                res => {
                  this.booking = res;
                  const estado = 'atendido';
                  this.booking.Estado = estado;
                  console.log(this.booking);
                  const codigo = wasa;
                  this.customerService.updateReserva(codigo, this.booking).subscribe(
                    // tslint:disable-next-line: no-shadowed-variable
                    res => {
                      this.respuesta1 = res;
                      console.log(this.respuesta1);
                      this.atendido();
                      this.ngOnInit();
                    }
                  );
                }
              );
            }
          },
          {
            text: 'No vino',
            icon: 'alert-outline',
            handler: () => {
              console.log(wasa);
              this.customerService.getBooking(wasa).subscribe(
                res => {
                  this.booking = res;
                  const estado = 'no vino';
                  this.booking.Estado = estado;
                  console.log(this.booking);
                  const codigo = wasa;
                  this.customerService.updateReserva(codigo, this.booking).subscribe(
                    // tslint:disable-next-line: no-shadowed-variable
                    res => {
                      this.respuesta1 = res;
                      console.log(this.respuesta1);
                      this.nollego();
                      this.ngOnInit();
                    }
                  );
                }
              );
            }
          },
          {
            text: 'Cancel',
            icon: 'close',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          }
        ]
      }
    );
    await actionSheet.present();
  }
  ngOnInit() {
    this.fechadeldia();
    this.workerService.client$.subscribe(
      res => {
        if (res) {
          this.worker = res;
          this.codigoworker = this.worker.id;
          console.log(this.worker);
          // console.log(this.lafechasa);
        }
      }
    );
    console.log(this.lafechasa);
    console.log(this.codigoworker);
    const codigo = this.codigoworker.toString();
    this.customerService.getBookings(codigo).subscribe(
      res => {
        this.bookings = res;
        console.log(this.bookings);
        const array1 = this.bookings;
        const filtro: any = [];
        const fecha = this.lafechasa;
        for (const obj of array1) {
          const fechas = new Date(obj.FechaReserva).getTime();
          console.log(fechas);
          console.log(fecha);
          if (fechas === fecha) {
            console.log('coincidencia de fechas');
            filtro.push(obj);
            this.bandera = true;
            this.bookingsfilter = filtro;
          }
        }
        if (this.bandera === true) {
          this.tieneclientes();
        } else {
          this.nohayreservas();
        }
      }
    );
  }
  modificar(wasa) {
    this.accion(wasa);
  }
}
