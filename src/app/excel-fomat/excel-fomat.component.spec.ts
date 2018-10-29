import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelFomatComponent } from './excel-fomat.component';

describe('ExcelFomatComponent', () => {
  let component: ExcelFomatComponent;
  let fixture: ComponentFixture<ExcelFomatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcelFomatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcelFomatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
