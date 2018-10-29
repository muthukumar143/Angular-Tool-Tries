import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMaterialTreeStackblitzComponent } from './angular-material-tree-stackblitz.component';

describe('AngularMaterialTreeStackblitzComponent', () => {
  let component: AngularMaterialTreeStackblitzComponent;
  let fixture: ComponentFixture<AngularMaterialTreeStackblitzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularMaterialTreeStackblitzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularMaterialTreeStackblitzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
