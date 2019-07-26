import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaCaixaComponent } from './buscaCaixa.component';

describe('BuscaCaixaComponent', () => {
  let component: BuscaCaixaComponent;
  let fixture: ComponentFixture<BuscaCaixaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscaCaixaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscaCaixaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
