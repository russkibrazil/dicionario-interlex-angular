import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaGenericaComponent } from './busca-generica.component';

describe('BuscaGenericaComponent', () => {
  let component: BuscaGenericaComponent;
  let fixture: ComponentFixture<BuscaGenericaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscaGenericaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscaGenericaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
