import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RocketsOverviewComponent } from './pages/rockets-overview/rockets-overview.component';
import { RocketsOverviewRoutingModule } from './routes/launch-timeline-routing.module';
import { UiRocketCardModule } from '@spacex/rocket/ui/ui-rocket-card';

@NgModule({
  declarations: [RocketsOverviewComponent],
  imports: [CommonModule, RocketsOverviewRoutingModule, UiRocketCardModule],
})
export class RocketsOverviewModule {}
