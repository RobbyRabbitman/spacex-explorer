import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RocketDetailComponent } from '../rocket-detail/rocket-detail.component';
import { PAGE_ROCKET_DETAIL } from './routes';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: PAGE_ROCKET_DETAIL, component: RocketDetailComponent },
    ]),
  ],
  exports: [RouterModule],
})
export class RocketDetailRoutingModule {}
