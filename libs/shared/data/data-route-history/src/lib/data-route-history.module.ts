import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { RouteHistoryState } from './state/RouteHistoryState';

@NgModule({
  imports: [NgxsModule.forFeature([RouteHistoryState])],
})
export class DataRouteHistoryModule {}
