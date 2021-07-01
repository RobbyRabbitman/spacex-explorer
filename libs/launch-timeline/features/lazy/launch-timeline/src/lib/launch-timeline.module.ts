import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { LaunchTimelineComponent } from './pages/launch-timeline/launch-timeline.component';
import { LaunchTimelineRoutingModule } from './routes/launch-timeline-routing.module';
import { LaunchOverviewCardModule } from '@spacex/launch-timeline/ui/launch-overview-card';
import { LaunchDetailComponent } from './pages/launch-detail/launch-detail.component';
import { UiTableOfContentsModule } from '@spacex/shared/ui/ui-table-of-contents';

@NgModule({
  declarations: [LaunchTimelineComponent, LaunchDetailComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    LaunchTimelineRoutingModule,
    LaunchOverviewCardModule,
    UiTableOfContentsModule,
  ],
})
export class LaunchTimelineModule {}
