import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketSecondStageCardComponent } from './rocket-second-stage-card.component';

describe('RocketSecondStageCardComponent', () => {
  let component: RocketSecondStageCardComponent;
  let fixture: ComponentFixture<RocketSecondStageCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RocketSecondStageCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketSecondStageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
