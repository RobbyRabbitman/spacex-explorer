import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LaunchDetailComponent } from '../pages/launch-detail/launch-detail.component';
import { LaunchTimelineComponent } from '../pages/launch-timeline/launch-timeline.component';
import { PAGE_LAUNCH_TIMELINE, PAGE_LAUNCH_DETAIL } from './routes';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: PAGE_LAUNCH_TIMELINE, component: LaunchTimelineComponent },
      { path: PAGE_LAUNCH_DETAIL, component: LaunchDetailComponent },
      { path: '**', redirectTo: PAGE_LAUNCH_TIMELINE, pathMatch: 'full' },
    ]),
  ],
  exports: [RouterModule],
})
export class LaunchTimelineRoutingModule {}
