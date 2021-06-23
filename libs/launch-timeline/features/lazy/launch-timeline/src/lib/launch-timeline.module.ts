import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaunchTimelineComponent } from './pages/launch-timeline/launch-timeline.component';
import { LaunchTimelineRoutingModule } from './routes/launch-timeline-routing.module';
import { LaunchOverviewCardModule } from '@spacex/launch-timeline/ui/launch-overview-card';

@NgModule({
  declarations: [LaunchTimelineComponent],
  imports: [
    CommonModule,
    LaunchTimelineRoutingModule,
    LaunchOverviewCardModule,
  ],
})
export class LaunchTimelineModule {}
