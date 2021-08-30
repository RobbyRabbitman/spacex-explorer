import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiThemeModule } from '@spacex/shared/ui/ui-theme';
import { ThemeToggleComponent } from './theme-toggle/theme-toggle.component';

@NgModule({
  imports: [CommonModule, UiThemeModule],
  declarations: [ThemeToggleComponent],
  exports: [ThemeToggleComponent],
})
export class ThemeModule {}
