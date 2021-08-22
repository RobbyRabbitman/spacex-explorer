import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { UiRocketPayloadsWeightTableModule } from '@spacex/rocket/ui/ui-rocket-payloads-weight-table';
import { RocketPayloadsWeightCardComponent } from './rocket-payloads-weight-card/rocket-payloads-weight-card.component';
@NgModule({
  imports: [CommonModule, MatCardModule, UiRocketPayloadsWeightTableModule],
  declarations: [
    RocketPayloadsWeightCardComponent
  ],
  exports: [
    RocketPayloadsWeightCardComponent
  ],
})
export class UiRocketPayloadsWeightCardModule {}
