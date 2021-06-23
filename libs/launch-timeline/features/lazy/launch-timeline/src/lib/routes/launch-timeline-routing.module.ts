import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LaunchTimelineComponent } from '../pages/launch-timeline/launch-timeline.component';
import { PAGE_LAUNCH_TIMELINE } from './routes';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: PAGE_LAUNCH_TIMELINE, component: LaunchTimelineComponent },
      { path: '**', redirectTo: PAGE_LAUNCH_TIMELINE, pathMatch: 'full' },
    ]),
  ],
  exports: [RouterModule],
})
export class LaunchTimelineRoutingModule {}
