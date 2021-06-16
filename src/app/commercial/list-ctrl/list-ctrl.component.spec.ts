import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCtrlComponent } from './list-ctrl.component';

describe('ListCtrlComponent', () => {
  let component: ListCtrlComponent;
  let fixture: ComponentFixture<ListCtrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCtrlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCtrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
