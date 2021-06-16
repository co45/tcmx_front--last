import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControleProduitComponent } from './controle-produit.component';

describe('ControleProduitComponent', () => {
  let component: ControleProduitComponent;
  let fixture: ComponentFixture<ControleProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControleProduitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControleProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
