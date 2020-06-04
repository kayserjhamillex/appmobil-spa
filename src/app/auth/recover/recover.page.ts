import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Worker } from 'src/app/models/worker';
import { WorkerService } from 'src/app/services/worker.service';

@Component({
  selector: 'app-recover',
  templateUrl: './recover.page.html',
  styleUrls: ['./recover.page.scss'],
})
export class RecoverPage implements OnInit {
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
    contra1: '',
    contra2: ''
  };
  codigoworker;
  wasa;
  constructor(
    private router: Router,
    private workerService: WorkerService,
    private activatedRoute: ActivatedRoute,
    private toastcontroller: ToastController
  ) { }
  async correcto() {
    const toast = await this.toastcontroller.create(
      {
        message: 'Password successfully updated',
        duration: 1000,
        animated: true,
        color: 'success',
        position: 'top'
      }
    );
    toast.present();
  }
  async nosepudo() {
    const toast = await this.toastcontroller.create(
      {
        message: 'Could not update password',
        duration: 1000,
        animated: true,
        color: 'warning',
        position: 'top'
      }
    );
    toast.present();
  }
  async incorrecto() {
    const toast = await this.toastcontroller.create(
      {
        message: 'Passwords do not match',
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
        message: 'Please fill in the fields',
        duration: 1500,
        animated: true,
        color: 'warning',
        position: 'top'
      }
    );
    toast.present();
  }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.workerService.getWorker(params.id).subscribe(
        res => {
          console.log(res);
          this.worker = res;
          this.codigoworker = this.worker.id;
        }
      );
    }
  }

  updateworker() {
    console.log(this.parametros);
    if (this.parametros.contra1 === '' || this.parametros.contra2 === '') {
      this.rellenar();
      this.incorrecto();
    } else {
      const contra1 = this.parametros.contra1;
      const codigo = this.codigoworker;
      this.worker.Password = contra1;
      this.workerService.updateWorker(codigo, this.worker).subscribe(
        res => {
          if (res) {
            this.wasa = res;
            this.correcto();
            this.router.navigate(
              [
                'auth',
                'login'
              ]
            );
          } else {
            this.nosepudo();
          }
        }
      );
    }
  }

}
