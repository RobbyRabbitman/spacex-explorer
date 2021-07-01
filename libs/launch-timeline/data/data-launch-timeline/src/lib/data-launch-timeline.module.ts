import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { LaunchTimelineState } from './state/launch-timeline.state';

@NgModule({
  imports: [NgxsModule.forFeature([LaunchTimelineState])],
})
export class DatadataLaunchTimelineModule {}
