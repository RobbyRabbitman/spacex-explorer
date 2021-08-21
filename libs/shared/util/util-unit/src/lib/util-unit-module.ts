import { NgModule } from '@angular/core';
import { ForcePipe } from './pipes/force.pipe';
import { LengthPipe } from './pipes/length.pipe';
import { MassPipe } from './pipes/mass.pipe';

@NgModule({
  declarations: [MassPipe, ForcePipe, LengthPipe],
  exports: [MassPipe, ForcePipe, LengthPipe],
})
export class UtilUnitModule {}
