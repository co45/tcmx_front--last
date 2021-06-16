import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashcommComponent } from './dashcomm.component';

describe('DashcommComponent', () => {
  let component: DashcommComponent;
  let fixture: ComponentFixture<DashcommComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashcommComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashcommComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
