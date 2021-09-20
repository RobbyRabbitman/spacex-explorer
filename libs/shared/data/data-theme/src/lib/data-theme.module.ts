import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { ThemeState } from './state/ThemeState';

@NgModule({
  imports: [NgxsModule.forFeature([ThemeState])],
})
export class DataThemeModule {}
