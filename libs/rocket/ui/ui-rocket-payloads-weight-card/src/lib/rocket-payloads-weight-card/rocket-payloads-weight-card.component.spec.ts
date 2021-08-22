import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketPayloadsWeightCardComponent } from './rocket-payloads-weight-card.component';

describe('RocketPayloadsWeightCardComponent', () => {
  let component: RocketPayloadsWeightCardComponent;
  let fixture: ComponentFixture<RocketPayloadsWeightCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RocketPayloadsWeightCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketPayloadsWeightCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
