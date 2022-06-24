import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MonthPipe } from './pipes/month.pipe';
import { ImageLoadedDirective } from './directives/image-loaded.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [MonthPipe, ImageLoadedDirective],
  exports: [MonthPipe, ImageLoadedDirective],
})
export class UiCommonModule {}
