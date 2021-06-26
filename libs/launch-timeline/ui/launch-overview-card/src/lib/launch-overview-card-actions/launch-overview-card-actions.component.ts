import { Component, Input } from '@angular/core';

@Component({
  selector: 'launch-timeline-ui-launch-overview-card-actions',
  templateUrl: './launch-overview-card-actions.component.html',
  styleUrls: ['./launch-overview-card-actions.component.scss'],
})
export class LaunchOverviewCardActionsComponent {
  @Input()
  public align: 'start' | 'end' = 'end';
}
