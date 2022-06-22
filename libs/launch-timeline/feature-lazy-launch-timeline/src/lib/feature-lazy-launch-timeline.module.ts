import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { UiLaunchesModule } from '@spacex/launches/ui-launches';
import { UiCommonModule } from '@spacex/shared/ui-common';
import { LaunchTimelineScrollInitDirective } from './directives/launch-timeline-scroll-init.directive';
import { LaunchTimelineComponent } from './pages/launch-timeline/launch-timeline.component';

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatExpansionModule,
    MatButtonModule,
    MatIconModule,
    RouterModule.forChild([
      { path: '', component: LaunchTimelineComponent },
      { path: '**', pathMatch: 'full', redirectTo: '' },
    ]),
    UiLaunchesModule,
    UiCommonModule,
  ],
  declarations: [LaunchTimelineComponent, LaunchTimelineScrollInitDirective],
})
export class FeatureLazyLaunchTimelineModule {}
