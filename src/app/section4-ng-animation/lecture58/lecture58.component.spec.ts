import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture58Component } from './lecture58.component';

describe('Lecture58Component', () => {
  let component: Lecture58Component;
  let fixture: ComponentFixture<Lecture58Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lecture58Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lecture58Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
