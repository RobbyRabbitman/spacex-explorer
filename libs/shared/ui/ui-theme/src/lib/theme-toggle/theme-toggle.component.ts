import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Theme } from '@spacex/shared/types/common';
@Component({
  selector: 'spacex-ui-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss'],
})
export class ThemeToggleComponent {
  private _icon: string | undefined;
  public get icon(): string | undefined {
    return this._icon;
  }

  private _selected: Theme | undefined;
  public get selected(): Theme | undefined {
    return this._selected;
  }

  @Input()
  public set selected(value: Theme | undefined) {
    this._icon = (value === Theme.LIGHT ? Theme.DARK : Theme.LIGHT) + '_mode';
    this._selected = value;
  }
  @Output()
  private readonly valueChanged = new EventEmitter<Theme>();

  public toggle(selected: Theme): void {
    this.valueChanged.emit(selected === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  }
}
