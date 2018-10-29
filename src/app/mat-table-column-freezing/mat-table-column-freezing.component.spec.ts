import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTableColumnFreezingComponent } from './mat-table-column-freezing.component';

describe('MatTableColumnFreezingComponent', () => {
  let component: MatTableColumnFreezingComponent;
  let fixture: ComponentFixture<MatTableColumnFreezingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatTableColumnFreezingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatTableColumnFreezingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
