import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { LaunchState } from './state/launch.state';

@NgModule({
  imports: [NgxsModule.forFeature([LaunchState])],
})
export class DataLaunchModule {}
