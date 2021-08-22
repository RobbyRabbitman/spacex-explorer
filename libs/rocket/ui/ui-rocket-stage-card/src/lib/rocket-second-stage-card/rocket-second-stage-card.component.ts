import { Component, Input } from '@angular/core';
import { RocketSecondStage } from '@spacex/shared/types/rocket';

@Component({
  selector: 'rocket-ui-rocket-second-stage-card',
  templateUrl: './rocket-second-stage-card.component.html',
  styleUrls: ['./rocket-second-stage-card.component.scss'],
})
export class RocketSecondStageCardComponent {
  @Input()
  public stage: RocketSecondStage | undefined;
}
