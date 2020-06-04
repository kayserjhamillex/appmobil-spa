import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClientsanotherPage } from './clientsanother.page';

describe('ClientsanotherPage', () => {
  let component: ClientsanotherPage;
  let fixture: ComponentFixture<ClientsanotherPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientsanotherPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClientsanotherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
