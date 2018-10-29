import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChillTheLionComponent } from './chill-the-lion.component';

describe('ChillTheLionComponent', () => {
  let component: ChillTheLionComponent;
  let fixture: ComponentFixture<ChillTheLionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChillTheLionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChillTheLionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
