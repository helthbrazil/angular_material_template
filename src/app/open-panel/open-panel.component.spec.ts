import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenPanelComponent } from './open-panel.component';

describe('OpenPanelComponent', () => {
  let component: OpenPanelComponent;
  let fixture: ComponentFixture<OpenPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
