import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchTimelineComponent } from './launch-timeline.component';

describe('LaunchTimelineComponent', () => {
  let component: LaunchTimelineComponent;
  let fixture: ComponentFixture<LaunchTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LaunchTimelineComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LaunchTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
