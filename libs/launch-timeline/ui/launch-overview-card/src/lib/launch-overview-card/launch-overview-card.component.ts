import { Component, Input } from '@angular/core';
import { Launch } from '@spacex/shared/types/launch';

@Component({
  selector: 'launch-timeline-ui-launch-overview-card',
  templateUrl: './launch-overview-card.component.html',
  styleUrls: ['./launch-overview-card.component.scss'],
})
export class LaunchOverviewCardComponent {
  @Input()
  public launch: Launch | undefined;
}
