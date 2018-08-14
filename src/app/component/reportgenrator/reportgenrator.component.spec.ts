import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportgenratorComponent } from './reportgenrator.component';

describe('ReportgenratorComponent', () => {
  let component: ReportgenratorComponent;
  let fixture: ComponentFixture<ReportgenratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportgenratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportgenratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
