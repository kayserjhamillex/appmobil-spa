import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomersdayPage } from './customersday.page';

describe('CustomersdayPage', () => {
  let component: CustomersdayPage;
  let fixture: ComponentFixture<CustomersdayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomersdayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomersdayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
