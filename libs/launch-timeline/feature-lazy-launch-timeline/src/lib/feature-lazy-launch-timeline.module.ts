import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiLaunchesModule } from '@spacex/launches/ui-launches';
import { LaunchTimelineScrollInitDirective } from './directives/launch-timeline-scroll-init.directive';
import { LaunchTimelineComponent } from './pages/launch-timeline/launch-timeline.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: LaunchTimelineComponent },
      { path: '**', pathMatch: 'full', redirectTo: '' },
    ]),
    UiLaunchesModule,
  ],
  declarations: [LaunchTimelineComponent, LaunchTimelineScrollInitDirective],
})
export class FeatureLazyLaunchTimelineModule {}
