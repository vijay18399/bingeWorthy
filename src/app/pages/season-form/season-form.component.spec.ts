import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonFormComponent } from './season-form.component';

describe('SeasonFormComponent', () => {
  let component: SeasonFormComponent;
  let fixture: ComponentFixture<SeasonFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeasonFormComponent]
    });
    fixture = TestBed.createComponent(SeasonFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
