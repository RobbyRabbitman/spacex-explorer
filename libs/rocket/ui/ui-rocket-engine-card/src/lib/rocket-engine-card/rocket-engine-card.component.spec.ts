import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketEngineCardComponent } from './rocket-engine-card.component';

describe('RocketEngineCardComponent', () => {
  let component: RocketEngineCardComponent;
  let fixture: ComponentFixture<RocketEngineCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RocketEngineCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketEngineCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
