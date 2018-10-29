import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JqueryTestComponent } from './jquery-test.component';

describe('JqueryTestComponent', () => {
  let component: JqueryTestComponent;
  let fixture: ComponentFixture<JqueryTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JqueryTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JqueryTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
