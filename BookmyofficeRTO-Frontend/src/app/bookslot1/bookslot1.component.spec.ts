import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bookslot1Component } from './bookslot1.component';

describe('Bookslot1Component', () => {
  let component: Bookslot1Component;
  let fixture: ComponentFixture<Bookslot1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bookslot1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bookslot1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
