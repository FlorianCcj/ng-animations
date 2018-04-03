import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Section5BeginComponent } from './section5-begin.component';

describe('Section5BeginComponent', () => {
  let component: Section5BeginComponent;
  let fixture: ComponentFixture<Section5BeginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Section5BeginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Section5BeginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
