import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { RouteHistoryState } from './state/route-history.state';

@NgModule({
  imports: [NgxsModule.forFeature([RouteHistoryState])],
})
export class DataRouteHistoryModule {}
