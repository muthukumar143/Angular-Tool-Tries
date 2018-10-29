import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlunkrTableRowNavigationComponent } from './plunkr-table-row-navigation.component';

describe('PlunkrTableRowNavigationComponent', () => {
  let component: PlunkrTableRowNavigationComponent;
  let fixture: ComponentFixture<PlunkrTableRowNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlunkrTableRowNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlunkrTableRowNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
