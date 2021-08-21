import { Component, Input } from '@angular/core';
import { Force } from '@spacex/shared/types/common';

@Component({
  selector: 'spacex-ui-force',
  templateUrl: './force.component.html',
  styleUrls: ['./force.component.scss'],
})
export class ForceComponent {
  @Input()
  public force: Force | undefined;
}
