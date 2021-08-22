import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketPayloadsWeightTableComponent } from './rocket-payloads-weight-table.component';

describe('RocketPayloadsWeightTableComponent', () => {
  let component: RocketPayloadsWeightTableComponent;
  let fixture: ComponentFixture<RocketPayloadsWeightTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RocketPayloadsWeightTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketPayloadsWeightTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
