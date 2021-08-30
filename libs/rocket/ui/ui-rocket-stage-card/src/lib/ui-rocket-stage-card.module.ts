import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { UiUnitModule } from '@spacex/shared/ui/ui-unit';
import { RocketFirstStageCardComponent } from './rocket-first-stage-card/rocket-first-stage-card.component';
import { RocketSecondStageCardComponent } from './rocket-second-stage-card/rocket-second-stage-card.component';
import { RocketStageCardComponent } from './rocket-stage-card/rocket-stage-card.component';

@NgModule({
  imports: [CommonModule, MatListModule, MatCardModule, UiUnitModule],
  declarations: [
    RocketFirstStageCardComponent,
    RocketSecondStageCardComponent,
    RocketStageCardComponent,
  ],
  exports: [RocketFirstStageCardComponent, RocketSecondStageCardComponent],
})
export class UiRocketStageCardModule {}
