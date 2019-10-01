import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PalavraGuiaComponent } from './palavra-guia.component';

describe('PalavraGuiaComponent', () => {
  let component: PalavraGuiaComponent;
  let fixture: ComponentFixture<PalavraGuiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PalavraGuiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalavraGuiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
