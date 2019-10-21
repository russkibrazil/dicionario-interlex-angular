import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotoesControleComponent } from './botoes-controle.component';

describe('BotoesControleComponent', () => {
  let component: BotoesControleComponent;
  let fixture: ComponentFixture<BotoesControleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotoesControleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotoesControleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
