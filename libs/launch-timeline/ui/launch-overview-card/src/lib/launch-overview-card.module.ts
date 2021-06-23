import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaunchOverviewCardComponent } from './launch-overview-card/launch-overview-card.component';
import { MatCardModule } from '@angular/material/card';
import { LaunchOverviewCardActionsComponent } from './launch-overview-card-actions/launch-overview-card-actions.component';
@NgModule({
  declarations: [
    LaunchOverviewCardComponent,
    LaunchOverviewCardActionsComponent,
  ],
  imports: [CommonModule, MatCardModule],
  exports: [LaunchOverviewCardComponent, LaunchOverviewCardActionsComponent],
})
export class LaunchOverviewCardModule {}
