import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCtrlComponent } from './view-ctrl.component';

describe('ViewCtrlComponent', () => {
  let component: ViewCtrlComponent;
  let fixture: ComponentFixture<ViewCtrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCtrlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCtrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
