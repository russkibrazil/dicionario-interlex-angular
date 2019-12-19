import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConjPtComponent } from './conj-pt.component';

describe('ConjPtComponent', () => {
  let component: ConjPtComponent;
  let fixture: ComponentFixture<ConjPtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConjPtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConjPtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
