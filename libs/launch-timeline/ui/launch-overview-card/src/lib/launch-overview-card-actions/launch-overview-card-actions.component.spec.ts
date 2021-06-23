import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchOverviewCardActionsComponent } from './launch-overview-card-actions.component';

describe('LaunchOverviewCardActionsComponent', () => {
  let component: LaunchOverviewCardActionsComponent;
  let fixture: ComponentFixture<LaunchOverviewCardActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunchOverviewCardActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchOverviewCardActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
