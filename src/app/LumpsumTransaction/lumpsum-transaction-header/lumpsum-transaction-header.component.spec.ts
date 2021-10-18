import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LumpsumTransactionHeaderComponent } from './lumpsum-transaction-header.component';

describe('LumpsumTransactionHeaderComponent', () => {
  let component: LumpsumTransactionHeaderComponent;
  let fixture: ComponentFixture<LumpsumTransactionHeaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LumpsumTransactionHeaderComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LumpsumTransactionHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
