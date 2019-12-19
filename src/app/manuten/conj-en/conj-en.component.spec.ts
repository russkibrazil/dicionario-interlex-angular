import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConjEnComponent } from './conj-en.component';

describe('ConjEnComponent', () => {
  let component: ConjEnComponent;
  let fixture: ComponentFixture<ConjEnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConjEnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConjEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
