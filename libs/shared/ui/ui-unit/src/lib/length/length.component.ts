import { Component, Input } from '@angular/core';
import { Length } from '@spacex/shared/types/common';

@Component({
  selector: 'spacex-ui-length',
  templateUrl: './length.component.html',
  styleUrls: ['./length.component.scss'],
})
export class LengthComponent {
  @Input()
  public length: Length | undefined;
}
