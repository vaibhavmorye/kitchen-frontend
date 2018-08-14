import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderUpdaterComponent } from './order-updater.component';

describe('OrderUpdaterComponent', () => {
  let component: OrderUpdaterComponent;
  let fixture: ComponentFixture<OrderUpdaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderUpdaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderUpdaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
