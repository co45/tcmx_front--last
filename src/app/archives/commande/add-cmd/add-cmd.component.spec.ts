import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCmdComponent } from './add-cmd.component';

describe('AddCmdComponent', () => {
  let component: AddCmdComponent;
  let fixture: ComponentFixture<AddCmdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCmdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCmdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
