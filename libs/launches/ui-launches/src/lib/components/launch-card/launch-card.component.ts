import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Launch } from '@spacex/shared/types-common';

@Component({
  selector: 'ui-launches-launch-card',
  templateUrl: './launch-card.component.html',
  styleUrls: ['./launch-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LaunchCardComponent {
  @Input()
  public launch?: Launch;
  @Input()
  public imageLoading: 'lazy' | 'eager' = 'lazy';
}
