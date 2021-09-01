import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SelectUnitModule } from '@spacex/shared/features/select-unit';
import { ThemeModule } from '@spacex/shared/features/theme';
import { GithubModule } from '@spacex/shared/features/github';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ShellComponent } from './shell/shell.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    SelectUnitModule,
    ThemeModule,
    MatMenuModule,
    GithubModule,
  ],
  declarations: [ShellComponent],
  exports: [ShellComponent],
})
export class ShellModule {}
