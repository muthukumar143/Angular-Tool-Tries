import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortingNKComponent } from './sorting-nk.component';

describe('SortingNKComponent', () => {
  let component: SortingNKComponent;
  let fixture: ComponentFixture<SortingNKComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortingNKComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortingNKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
