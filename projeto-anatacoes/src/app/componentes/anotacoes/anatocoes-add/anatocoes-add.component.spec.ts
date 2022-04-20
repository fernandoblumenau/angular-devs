import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnatocoesAddComponent } from './anatocoes-add.component';

describe('AnatocoesAddComponent', () => {
  let component: AnatocoesAddComponent;
  let fixture: ComponentFixture<AnatocoesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnatocoesAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnatocoesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
