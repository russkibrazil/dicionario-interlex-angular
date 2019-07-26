import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaResultadosComponent } from './busca-resultados.component';

describe('BuscaResultadosComponent', () => {
  let component: BuscaResultadosComponent;
  let fixture: ComponentFixture<BuscaResultadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscaResultadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscaResultadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
