import { Component, Input } from '@angular/core';
import { RocketFirstStage } from '@spacex/shared/types/rocket';

@Component({
  selector: 'rocket-ui-rocket-first-stage-card',
  templateUrl: './rocket-first-stage-card.component.html',
  styleUrls: ['./rocket-first-stage-card.component.scss'],
})
export class RocketFirstStageCardComponent {
  @Input()
  public stage: RocketFirstStage | undefined;
}
