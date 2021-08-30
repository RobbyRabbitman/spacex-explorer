import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { ThemeState } from './state/ThemeState';

@NgModule({
  imports: [CommonModule, NgxsModule.forFeature([ThemeState])],
})
export class DataThemeModule {}
