import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketFirstStageCardComponent } from './rocket-first-stage-card.component';

describe('RocketFirstStageCardComponent', () => {
  let component: RocketFirstStageCardComponent;
  let fixture: ComponentFixture<RocketFirstStageCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RocketFirstStageCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketFirstStageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
