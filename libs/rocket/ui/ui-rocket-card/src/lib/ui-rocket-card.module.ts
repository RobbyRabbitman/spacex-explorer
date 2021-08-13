import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RocketCardComponent } from './rocket-card/rocket-card.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [CommonModule, MatCardModule],
  declarations: [RocketCardComponent],
  exports: [RocketCardComponent],
})
export class UiRocketCardModule {}
