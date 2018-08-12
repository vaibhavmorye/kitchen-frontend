import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderComponentComponent } from './order-component.component';

describe('OrderComponentComponent', () => {
  let component: OrderComponentComponent;
  let fixture: ComponentFixture<OrderComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
