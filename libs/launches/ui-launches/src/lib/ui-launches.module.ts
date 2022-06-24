import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { UiCommonModule } from '@spacex/shared/ui-common';
import { LaunchCardComponent } from './components/launch-card/launch-card.component';

@NgModule({
  imports: [
    CommonModule,
    UiCommonModule,
    MatCardModule,
    MatProgressSpinnerModule,
  ],
  declarations: [LaunchCardComponent],
  exports: [LaunchCardComponent],
})
export class UiLaunchesModule {}
