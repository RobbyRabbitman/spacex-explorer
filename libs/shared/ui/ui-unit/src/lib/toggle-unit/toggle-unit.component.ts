import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Unit } from '@spacex/shared/types/common';

@Component({
  selector: 'spacex-ui-toggle-unit',
  templateUrl: './toggle-unit.component.html',
  styleUrls: ['./toggle-unit.component.scss'],
})
export class ToggleUnitComponent {
  public readonly values = Object.values(Unit);
  @Input()
  public selected: Unit | undefined;
  @Input()
  public color = '';
  @Output()
  public readonly valueChanged: EventEmitter<Unit> = new EventEmitter<Unit>();

  public toggle(selected: Unit): void {
    this.valueChanged.emit(
      selected === Unit.IMPERIAL ? Unit.METRIC : Unit.IMPERIAL
    );
  }
}
