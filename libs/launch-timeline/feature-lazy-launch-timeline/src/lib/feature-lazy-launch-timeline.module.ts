import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { UiLaunchesModule } from '@spacex/launches/ui-launches';
import { UiCommonModule } from '@spacex/shared/ui-common';
import { LaunchTimelineComponent } from './pages/launch-timeline/launch-timeline.component';

@NgModule({
  imports: [
    CommonModule,
    MatSelectModule,
    MatToolbarModule,
    MatFormFieldModule,
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
  declarations: [LaunchTimelineComponent],
})
export class FeatureLazyLaunchTimelineModule {}
