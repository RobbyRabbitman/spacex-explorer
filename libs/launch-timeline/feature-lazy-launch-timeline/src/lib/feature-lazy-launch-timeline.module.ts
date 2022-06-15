import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiLaunchesModule } from '@spacex/launches/ui-launches';
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
  declarations: [LaunchTimelineComponent],
})
export class FeatureLazyLaunchTimelineModule {}
