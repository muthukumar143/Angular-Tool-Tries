import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChilltheLionComponent } from './chillthe-lion.component';

describe('ChilltheLionComponent', () => {
  let component: ChilltheLionComponent;
  let fixture: ComponentFixture<ChilltheLionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChilltheLionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChilltheLionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
