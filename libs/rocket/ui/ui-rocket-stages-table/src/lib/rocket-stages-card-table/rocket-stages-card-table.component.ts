import { Component, Input } from '@angular/core';
import { RocketStage } from '@spacex/shared/types/rocket';

@Component({
  selector: 'rocket-ui-rocket-stages-card-table',
  templateUrl: './rocket-stages-card-table.component.html',
  styleUrls: ['./rocket-stages-card-table.component.scss'],
})
export class RocketStagesCardTableComponent {
  @Input()
  public stages: Array<RocketStage> | undefined;
}
