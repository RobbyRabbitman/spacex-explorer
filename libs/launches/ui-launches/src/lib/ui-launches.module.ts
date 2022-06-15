import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { LaunchCardComponent } from './components/launch-card/launch-card.component';

@NgModule({
  imports: [CommonModule, MatCardModule],
  declarations: [LaunchCardComponent],
  exports: [LaunchCardComponent],
})
export class UiLaunchesModule {}
