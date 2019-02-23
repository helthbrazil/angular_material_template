import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaPaginacaoComponent } from './tabela-paginacao.component';

describe('TabelaPaginacaoComponent', () => {
  let component: TabelaPaginacaoComponent;
  let fixture: ComponentFixture<TabelaPaginacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelaPaginacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaPaginacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
