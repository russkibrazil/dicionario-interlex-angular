import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquivalenteComponent } from './equivalente.component';

describe('EquivalenteComponent', () => {
  let component: EquivalenteComponent;
  let fixture: ComponentFixture<EquivalenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquivalenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquivalenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
