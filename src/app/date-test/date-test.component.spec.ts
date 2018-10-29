import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateTestComponent } from './date-test.component';

describe('DateTestComponent', () => {
  let component: DateTestComponent;
  let fixture: ComponentFixture<DateTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
