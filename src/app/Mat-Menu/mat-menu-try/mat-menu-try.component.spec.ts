import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatMenuTryComponent } from './mat-menu-try.component';

describe('MatMenuTryComponent', () => {
  let component: MatMenuTryComponent;
  let fixture: ComponentFixture<MatMenuTryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatMenuTryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatMenuTryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
