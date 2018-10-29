import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VariableDeclerationsComponent } from './variable-declerations.component';

describe('VariableDeclerationsComponent', () => {
  let component: VariableDeclerationsComponent;
  let fixture: ComponentFixture<VariableDeclerationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VariableDeclerationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VariableDeclerationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
