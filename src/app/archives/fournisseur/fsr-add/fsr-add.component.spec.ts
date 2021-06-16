import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FsrAddComponent } from './fsr-add.component';

describe('FsrAddComponent', () => {
  let component: FsrAddComponent;
  let fixture: ComponentFixture<FsrAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FsrAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FsrAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
