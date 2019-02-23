import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaOrdenarComponent } from './tabela-ordenar.component';

describe('TabelaOrdenarComponent', () => {
  let component: TabelaOrdenarComponent;
  let fixture: ComponentFixture<TabelaOrdenarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelaOrdenarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaOrdenarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
