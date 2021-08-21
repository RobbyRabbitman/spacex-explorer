import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { UnitState } from './state/unit.state';

@NgModule({
  imports: [NgxsModule.forFeature([UnitState])],
})
export class DataUnitModule {}
