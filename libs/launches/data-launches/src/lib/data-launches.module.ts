import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { LaunchesState } from './state/launches.state';

@NgModule({
  imports: [NgxsModule.forFeature([LaunchesState])],
})
export class DataLaunchesModule {}
