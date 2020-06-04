import { Component, OnInit } from '@angular/core';
import { WorkerService } from '../services/worker.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.page.html',
  styleUrls: ['./worker.page.scss'],
})
export class WorkerPage implements OnInit {
  client;
  constructor(
    private router: Router,
    private workerService: WorkerService,
  ) { }

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
      console.log(res);

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
