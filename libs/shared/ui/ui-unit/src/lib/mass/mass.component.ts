import { Component, Input } from '@angular/core';
import { Mass } from '@spacex/shared/types/common';

@Component({
  selector: 'spacex-ui-mass',
  templateUrl: './mass.component.html',
  styleUrls: ['./mass.component.scss'],
})
export class MassComponent {
  @Input()
  public mass: Mass | undefined;
}
