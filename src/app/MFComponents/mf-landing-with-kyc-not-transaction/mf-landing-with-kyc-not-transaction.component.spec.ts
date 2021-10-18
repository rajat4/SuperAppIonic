import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MfLandingWithKYCNotTransactionComponent } from './mf-landing-with-kyc-not-transaction.component';

describe('MfLandingWithKYCNotTransactionComponent', () => {
  let component: MfLandingWithKYCNotTransactionComponent;
  let fixture: ComponentFixture<MfLandingWithKYCNotTransactionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MfLandingWithKYCNotTransactionComponent ],
      // imports: [IonicModule.forRoot()]
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(MfLandingWithKYCNotTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
