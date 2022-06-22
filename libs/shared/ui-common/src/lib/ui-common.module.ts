import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MonthPipe } from './pipes/month.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [MonthPipe],
  exports: [MonthPipe],
})
export class UiCommonModule {}
