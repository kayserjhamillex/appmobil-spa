import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { WorkerService } from 'src/app/services/worker.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  client;
  constructor(
    private router: Router,
    private workerService: WorkerService,
    private toastcontroller: ToastController
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
  ngOnInit() {
    this.workerService.client$.subscribe(
      res => {
        if (res) {
          this.client = res;
          console.log(res);
          
        } else {
          this.client = null;
          this.router.navigate(
            [
              'auth',
              'login'
            ]
          );
        }
      }
    );
  }

}
