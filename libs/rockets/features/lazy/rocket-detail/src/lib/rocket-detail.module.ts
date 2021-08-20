import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RocketDetailComponent } from './rocket-detail/rocket-detail.component';
import { RocketDetailRoutingModule } from './routes/rocket-detail-routing.module';
import { UiImageSliderModule } from '@spacex/shared/ui/ui-image-slider';

@NgModule({
  declarations: [RocketDetailComponent],
  imports: [CommonModule, RocketDetailRoutingModule, UiImageSliderModule],
})
export class RocketDetailModule {}
