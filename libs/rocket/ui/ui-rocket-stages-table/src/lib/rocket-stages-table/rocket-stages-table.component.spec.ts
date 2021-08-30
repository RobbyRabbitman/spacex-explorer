import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketStagesTableComponent } from './rocket-stages-table.component';

describe('RocketStagesTableComponent', () => {
  let component: RocketStagesTableComponent;
  let fixture: ComponentFixture<RocketStagesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RocketStagesTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketStagesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
