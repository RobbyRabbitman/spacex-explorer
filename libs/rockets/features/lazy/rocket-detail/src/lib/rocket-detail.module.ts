import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RocketDetailComponent } from './rocket-detail/rocket-detail.component';
import { RocketDetailRoutingModule } from './routes/rocket-detail-routing.module';
import { UiImageSliderModule } from '@spacex/shared/ui/ui-image-slider';
import { UiRocketEngineCardModule } from '@spacex/rocket/ui/ui-rocket-engine-card';
@NgModule({
  declarations: [RocketDetailComponent],
  imports: [
    CommonModule,
    RocketDetailRoutingModule,
    UiImageSliderModule,
    UiRocketEngineCardModule,
  ],
})
export class RocketDetailModule {}
