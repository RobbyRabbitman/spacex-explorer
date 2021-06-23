import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaunchOverviewCardComponent } from './launch-overview-card/launch-overview-card.component';

@NgModule({
  declarations: [LaunchOverviewCardComponent],
  imports: [CommonModule],
  exports: [LaunchOverviewCardComponent],
})
export class LaunchOverviewCardModule {}
