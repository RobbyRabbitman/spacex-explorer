import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RocketsOverviewComponent } from './pages/rockets-overview/rockets-overview.component';
import { RocketsOverviewRoutingModule } from './routes/launch-timeline-routing.module';

@NgModule({
  declarations: [RocketsOverviewComponent],
  imports: [CommonModule, RocketsOverviewRoutingModule],
})
export class RocketsOverviewModule {}
