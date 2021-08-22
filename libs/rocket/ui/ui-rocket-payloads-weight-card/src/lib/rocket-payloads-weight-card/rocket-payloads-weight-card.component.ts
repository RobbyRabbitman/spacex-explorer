import { Component, Input } from '@angular/core';
import { RocketPayloadWeight } from '@spacex/shared/types/rocket';
@Component({
  selector: 'rocket-ui-rocket-payloads-weight-card',
  templateUrl: './rocket-payloads-weight-card.component.html',
  styleUrls: ['./rocket-payloads-weight-card.component.scss'],
})
export class RocketPayloadsWeightCardComponent {
  @Input()
  public payloads: Array<RocketPayloadWeight> | undefined;
}
