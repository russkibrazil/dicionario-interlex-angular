import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FraseologiaComponent } from './fraseologia.component';

describe('FraseologiaComponent', () => {
  let component: FraseologiaComponent;
  let fixture: ComponentFixture<FraseologiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FraseologiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FraseologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
