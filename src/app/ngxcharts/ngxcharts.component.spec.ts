import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxchartsComponent } from './ngxcharts.component';

describe('NgxchartsComponent', () => {
  let component: NgxchartsComponent;
  let fixture: ComponentFixture<NgxchartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxchartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
