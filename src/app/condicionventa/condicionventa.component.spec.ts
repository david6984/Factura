import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CondicionventaComponent } from './condicionventa.component';

describe('CondicionventaComponent', () => {
  let component: CondicionventaComponent;
  let fixture: ComponentFixture<CondicionventaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CondicionventaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CondicionventaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
