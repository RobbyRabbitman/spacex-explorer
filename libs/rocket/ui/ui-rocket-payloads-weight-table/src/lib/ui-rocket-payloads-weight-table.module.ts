import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { RocketPayloadsWeightTableComponent } from './rocket-payloads-weight-table/rocket-payloads-weight-table.component';
import { UiUnitModule } from '@spacex/shared/ui/ui-unit';

@NgModule({
  imports: [CommonModule, MatTableModule, UiUnitModule],
  declarations: [RocketPayloadsWeightTableComponent],
  exports: [RocketPayloadsWeightTableComponent],
})
export class UiRocketPayloadsWeightTableModule {}
