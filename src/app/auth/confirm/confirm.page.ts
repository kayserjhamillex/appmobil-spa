import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { WorkerService } from 'src/app/services/worker.service';
import { Worker } from 'src/app/models/worker';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.page.html',
  styleUrls: ['./confirm.page.scss'],
})
export class ConfirmPage implements OnInit {
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
    correo: ''
  };
  constructor(
    private router: Router,
    private workerService: WorkerService,
    private toastcontroller: ToastController
  ) { }
  async correcto() {
    const toast = await this.toastcontroller.create(
      {
        message: 'Proceed to update your password',
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
        message: 'You are not a member of the company',
        duration: 1500,
        animated: true,
        color: 'danger',
        position: 'top'
      }
    );
    toast.present();
  }
  async rellenar() {
    const toast = await this.toastcontroller.create(
      {
        message: 'please fill in the email',
        duration: 1500,
        animated: true,
        color: 'danger',
        position: 'top'
      }
    );
    toast.present();
  }
  confirm() {
    console.log(this.parametros);
    if (this.parametros.correo === '') {
      this.rellenar();
    } else {
      const correo = this.parametros.correo;
      this.workerService.getSearch(correo).subscribe(
        res => {
          if (res) {
            this.worker = res;
            this.correcto();
            const codigo = this.worker.id;
            this.router.navigate(
              [
                'auth',
                'recover',
                codigo
              ]
            );
          } else {
            this.incorrecto();
          }
        }
      );
    }
  }
  ngOnInit() {
  }

}
