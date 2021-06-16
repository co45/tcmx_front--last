import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdtCmdComponent } from './pdt-cmd.component';

describe('PdtCmdComponent', () => {
  let component: PdtCmdComponent;
  let fixture: ComponentFixture<PdtCmdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdtCmdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdtCmdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
