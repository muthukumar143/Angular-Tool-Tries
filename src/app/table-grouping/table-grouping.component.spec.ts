import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableGroupingComponent } from './table-grouping.component';

describe('TableGroupingComponent', () => {
  let component: TableGroupingComponent;
  let fixture: ComponentFixture<TableGroupingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableGroupingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableGroupingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
