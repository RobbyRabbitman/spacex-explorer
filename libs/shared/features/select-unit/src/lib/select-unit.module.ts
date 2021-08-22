import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiUnitModule } from '@spacex/shared/ui/ui-unit';
import { SelectUnitComponent } from './select-unit/select-unit.component';

@NgModule({
  imports: [CommonModule, UiUnitModule],
  declarations: [SelectUnitComponent],
  exports: [SelectUnitComponent],
})
export class SelectUnitModule {}
