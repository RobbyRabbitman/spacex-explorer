import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketsOverviewComponent } from './rockets-overview.component';

describe('RocketsOverviewComponent', () => {
  let component: RocketsOverviewComponent;
  let fixture: ComponentFixture<RocketsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RocketsOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
