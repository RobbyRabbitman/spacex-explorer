import { Component, Input } from '@angular/core';
import { RocketStage } from '@spacex/shared/types/rocket';

@Component({
  selector: 'rocket-ui-rocket-stage-card',
  templateUrl: './rocket-stage-card.component.html',
  styleUrls: ['./rocket-stage-card.component.scss'],
})
export class RocketStageCardComponent {
  @Input()
  public name: string | undefined;
  @Input()
  public stage: RocketStage | undefined;
}
