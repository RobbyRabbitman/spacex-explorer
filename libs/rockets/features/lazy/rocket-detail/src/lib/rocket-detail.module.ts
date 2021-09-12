import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RocketDetailRoutingModule } from './routes/rocket-detail-routing.module';
import { UiImageSliderModule } from '@spacex/shared/ui/ui-image-slider';
import { UiRocketEngineCardModule } from '@spacex/rocket/ui/ui-rocket-engine-card';
import { UiRocketPayloadsWeightCardModule } from '@spacex/rocket/ui/ui-rocket-payloads-weight-card';
import { UiRocketStageCardModule } from '@spacex/rocket/ui/ui-rocket-stage-card';
import { UiRocketStagesTableModule } from '@spacex/rocket/ui/ui-rocket-stages-table';
import { RocketDetailComponent } from './pages/rocket-detail/rocket-detail.component';
import { UiUnitModule } from '@spacex/shared/ui/ui-unit';
@NgModule({
  declarations: [RocketDetailComponent],
  imports: [
    CommonModule,
    RocketDetailRoutingModule,
    UiImageSliderModule,
    UiUnitModule,
    UiRocketEngineCardModule,
    UiRocketStageCardModule,
    UiRocketPayloadsWeightCardModule,
    UiRocketStagesTableModule,
  ],
})
export class RocketDetailModule {}
