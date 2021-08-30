import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketStagesCardTableComponent } from './rocket-stages-card-table.component';

describe('RocketStagesCardTableComponent', () => {
  let component: RocketStagesCardTableComponent;
  let fixture: ComponentFixture<RocketStagesCardTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RocketStagesCardTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketStagesCardTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
