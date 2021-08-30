import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Theme } from '@spacex/shared/types/common';
@Component({
  selector: 'spacex-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss'],
})
export class ThemeToggleComponent {
  public readonly values = Object.values(Theme);
  @Input()
  public selected: Theme | undefined;
  @Output()
  private readonly valueChanged = new EventEmitter<Theme>();

  public toggle(selected: Theme): void {
    this.valueChanged.emit(selected === Theme.LIGHT ? Theme.DARK : selected);
  }
}
