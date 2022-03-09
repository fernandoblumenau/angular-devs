import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentColumnsComponent } from './content-columns.component';

describe('ContentColumnsComponent', () => {
  let component: ContentColumnsComponent;
  let fixture: ComponentFixture<ContentColumnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentColumnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
