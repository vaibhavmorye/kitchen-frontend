import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchendisplayComponent } from './kitchendisplay.component';

describe('KitchendisplayComponent', () => {
  let component: KitchendisplayComponent;
  let fixture: ComponentFixture<KitchendisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitchendisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitchendisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
