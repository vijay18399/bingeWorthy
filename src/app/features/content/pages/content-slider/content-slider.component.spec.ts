import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSliderComponent } from './content-slider.component';

describe('ContentSliderComponent', () => {
  let component: ContentSliderComponent;
  let fixture: ComponentFixture<ContentSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentSliderComponent]
    });
    fixture = TestBed.createComponent(ContentSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
