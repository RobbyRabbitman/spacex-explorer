import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketStageCardComponent } from './rocket-stage-card.component';

describe('RocketStageCardComponent', () => {
  let component: RocketStageCardComponent;
  let fixture: ComponentFixture<RocketStageCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RocketStageCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketStageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
