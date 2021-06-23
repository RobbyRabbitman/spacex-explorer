import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchOverviewCardComponent } from './launch-overview-card.component';

describe('LaunchOverviewCardComponent', () => {
  let component: LaunchOverviewCardComponent;
  let fixture: ComponentFixture<LaunchOverviewCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunchOverviewCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchOverviewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
