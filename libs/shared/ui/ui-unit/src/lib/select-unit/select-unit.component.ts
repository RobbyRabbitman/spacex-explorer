import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Unit } from '@spacex/shared/types/common';

@Component({
  selector: 'spacex-ui-select-unit',
  templateUrl: './select-unit.component.html',
  styleUrls: ['./select-unit.component.scss'],
})
export class SelectUnitComponent {
  @Input()
  public values: Array<Unit> | undefined;
  @Input()
  public selected: Unit | undefined;
  @Output()
  public readonly valueChanged: EventEmitter<Unit> = new EventEmitter<Unit>();
}
