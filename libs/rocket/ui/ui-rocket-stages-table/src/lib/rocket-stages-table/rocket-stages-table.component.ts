import { Component, Input } from '@angular/core';
import { RocketSecondStage, RocketStage } from '@spacex/shared/types/rocket';

function isRocketSecondStage(stage: RocketStage): stage is RocketSecondStage {
  return 'payloads' in stage;
}

interface RocketStageData extends RocketStage {
  number: number;
}

@Component({
  selector: 'rocket-ui-rocket-stages-table',
  templateUrl: './rocket-stages-table.component.html',
  styleUrls: ['./rocket-stages-table.component.scss'],
})
export class RocketStagesTableComponent {
  public data: Array<RocketStageData> | undefined;
  public readonly columns: Array<string> = [
    'number',
    'engines',
    'fuel',
    'burnTime',
    'resuable',
  ];

  @Input()
  public set stages(value: Array<RocketStage>) {
    this.data = value.map((stage) => ({
      ...stage,
      number: isRocketSecondStage(stage) ? 2 : 1,
    }));
  }
}
