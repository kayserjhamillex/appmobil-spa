import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WorkerPage } from './worker.page';

describe('WorkerPage', () => {
  let component: WorkerPage;
  let fixture: ComponentFixture<WorkerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WorkerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
