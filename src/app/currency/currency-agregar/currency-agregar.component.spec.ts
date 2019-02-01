import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyAgregarComponent } from './currency-agregar.component';

describe('CurrencyAgregarComponent', () => {
  let component: CurrencyAgregarComponent;
  let fixture: ComponentFixture<CurrencyAgregarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyAgregarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
