import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForceComponent } from './force/force.component';
import { LengthComponent } from './length/length.component';
import { MassComponent } from './mass/mass.component';
import { UtilUnitModule } from '@spacex/shared/util/util-unit';

@NgModule({
  imports: [CommonModule, UtilUnitModule],
  declarations: [MassComponent, LengthComponent, ForceComponent],
  exports: [MassComponent, LengthComponent, ForceComponent],
})
export class UiUnitModule {}
