import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularDocsComponent } from './angular-docs.component';

describe('AngularDocsComponent', () => {
  let component: AngularDocsComponent;
  let fixture: ComponentFixture<AngularDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularDocsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
