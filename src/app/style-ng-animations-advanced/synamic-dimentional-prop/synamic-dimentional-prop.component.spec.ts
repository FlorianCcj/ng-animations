import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SynamicDimentionalPropComponent } from './synamic-dimentional-prop.component';

describe('SynamicDimentionalPropComponent', () => {
  let component: SynamicDimentionalPropComponent;
  let fixture: ComponentFixture<SynamicDimentionalPropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SynamicDimentionalPropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SynamicDimentionalPropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
