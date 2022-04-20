import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnatocoesListComponent } from './anatocoes-list.component';

describe('AnatocoesListComponent', () => {
  let component: AnatocoesListComponent;
  let fixture: ComponentFixture<AnatocoesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnatocoesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnatocoesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
