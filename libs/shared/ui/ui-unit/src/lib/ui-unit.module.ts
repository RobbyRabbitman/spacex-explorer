import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ForceComponent } from './force/force.component';
import { LengthComponent } from './length/length.component';
import { MassComponent } from './mass/mass.component';
import { UtilUnitModule } from '@spacex/shared/util/util-unit';
import { SelectUnitComponent } from './select-unit/select-unit.component';

@NgModule({
  imports: [CommonModule, UtilUnitModule, MatSelectModule, MatFormFieldModule],
  declarations: [
    MassComponent,
    LengthComponent,
    ForceComponent,
    SelectUnitComponent,
  ],
  exports: [
    MassComponent,
    LengthComponent,
    ForceComponent,
    SelectUnitComponent,
  ],
})
export class UiUnitModule {}
