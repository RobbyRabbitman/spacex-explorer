import { Component, Input } from '@angular/core';
import { RocketEngine } from '@spacex/shared/types/rocket';
@Component({
  selector: 'rocket-ui-rocket-engine-card',
  templateUrl: './rocket-engine-card.component.html',
  styleUrls: ['./rocket-engine-card.component.scss'],
})
export class RocketEngineCardComponent {
  @Input()
  public engine: RocketEngine | undefined;
}
