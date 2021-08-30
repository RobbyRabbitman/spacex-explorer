import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ThemeToggleComponent } from './theme-toggle/theme-toggle.component';

@NgModule({
  imports: [CommonModule, MatIconModule, MatButtonModule],
  declarations: [ThemeToggleComponent],
  exports: [ThemeToggleComponent],
})
export class UiThemeModule {}
