import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Worker } from 'src/app/models/worker';
import { WorkerService } from 'src/app/services/worker.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
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
  parametros = {
    email: '',
    contra: ''
  };
  codigoworker;
  constructor(
    private router: Router,
    private workerService: WorkerService,
    private toastcontroller: ToastController
  ) { }
  async correcto() {
    const toast = await this.toastcontroller.create(
      {
        message: 'bienvenid@',
        duration: 1000,
        animated: true,
        color: 'success',
        position: 'top'
      }
    );
    toast.present();
  }
  async incorrecto() {
    const toast = await this.toastcontroller.create(
      {
        message: 'usuario y contraseña incorrecta',
        duration: 1500,
        animated: true,
        color: 'danger',
        position: 'top'
      }
    );
    toast.present();
  }
  async contra() {
    const toast = await this.toastcontroller.create(
      {
        message: 'confirm email to recover password',
        duration: 1500,
        animated: true,
        color: 'tertiary',
        position: 'top'
      }
    );
    toast.present();
  }
  pass() {
    this.contra();
    this.router.navigate(
      [
        'auth',
        'confirm'
      ]
    );
  }
  login() {
    console.log(this.parametros);
    const usuario = this.parametros.email;
    const pass = this.parametros.contra;
    this.workerService.getLogin(usuario, pass).subscribe(
      res => {
        if (res) {
          this.worker = res;
          this.correcto();
          this.workerService.loggin(res);
          this.codigoworker = this.worker.id;
          this.router.navigate(
            [
              'worker',
              'home'
            ]
          );
        } else {
          this.incorrecto();
        }
      }
    );
  }
  ngOnInit() {
    if (this.workerService.isLoggedIn()) {
      this.router.navigate(
        [
          'worker',
          'home'
        ]
      );
    } else {

    }
    this.workerService.client$.subscribe(res => {
      if (res) {
        this.router.navigate(
          [
            'worker',
            'home'
          ]
        );
      }
    });
  }

}
