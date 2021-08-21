import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { RocketState } from './state/RocketState';

@NgModule({
  imports: [NgxsModule.forFeature([RocketState])],
})
export class DataRocketModule {}
