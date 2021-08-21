import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RocketEngineCardComponent } from './rocket-engine-card/rocket-engine-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { UiUnitModule } from '@spacex/shared/ui/ui-unit';

@NgModule({
  imports: [CommonModule, MatCardModule, MatListModule, UiUnitModule],
  declarations: [RocketEngineCardComponent],
  exports: [RocketEngineCardComponent],
})
export class UiRocketEngineCardModule {}
