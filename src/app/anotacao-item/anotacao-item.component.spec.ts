import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotacaoItemComponent } from './anotacao-item.component';

describe('AnotacaoItemComponent', () => {
  let component: AnotacaoItemComponent;
  let fixture: ComponentFixture<AnotacaoItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnotacaoItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotacaoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
