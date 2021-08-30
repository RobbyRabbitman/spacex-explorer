import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RocketStagesTableComponent } from './rocket-stages-table/rocket-stages-table.component';
import { RocketStagesCardTableComponent } from './rocket-stages-card-table/rocket-stages-card-table.component';

@NgModule({
  imports: [CommonModule, MatTableModule, MatIconModule, MatCardModule],
  declarations: [RocketStagesTableComponent, RocketStagesCardTableComponent],
  exports: [RocketStagesTableComponent, RocketStagesCardTableComponent],
})
export class UiRocketStagesTableModule {}
