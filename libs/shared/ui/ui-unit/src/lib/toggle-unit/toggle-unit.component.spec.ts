import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleUnitComponent } from './toggle-unit.component';

describe('ToggleUnitComponent', () => {
  let component: ToggleUnitComponent;
  let fixture: ComponentFixture<ToggleUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggleUnitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
