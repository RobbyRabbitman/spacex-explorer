import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RocketDetailComponent } from './rocket-detail/rocket-detail.component';
import { RocketDetailRoutingModule } from './routes/rocket-detail-routing.module';

@NgModule({
  declarations: [RocketDetailComponent],
  imports: [CommonModule, RocketDetailRoutingModule],
})
export class RocketDetailModule {}
