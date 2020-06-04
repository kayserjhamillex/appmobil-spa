import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { WorkerService } from 'src/app/services/worker.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  client;
  constructor(
    private router: Router,
    private workerService: WorkerService,
    private toastcontroller: ToastController
  ) { }
  // el ruteo de los tabs
  logout() {
    this.workerService.loggout();
  }
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
    this.workerService.client$.subscribe(res => {
      if (res) {
        this.client = res;
      } else {
        this.client = null;
        this.router.navigate(
          [
            'auth',
            'login'
          ]
          );
      }
      // console.log(res);

    });
    if (this.workerService.isLoggedIn()) {
      const client = JSON.parse(localStorage.getItem('worker'));
      console.log(client);
      this.workerService.loggin(client);
      this.router.navigate(
        [
          'worker',
          'home'
        ]
      );
    } else {
      this.router.navigate(
        [
          'auth',
          'login'
        ]
      );
    }
  }

}
