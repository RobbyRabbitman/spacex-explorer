import { Component, Input } from '@angular/core';
import { Rocket } from '@spacex/shared/types/rocket';

@Component({
  selector: 'rocket-ui-rocket-card',
  templateUrl: './rocket-card.component.html',
  styleUrls: ['./rocket-card.component.scss'],
})
export class RocketCardComponent {
  @Input()
  public rocket: Rocket | undefined;
}
