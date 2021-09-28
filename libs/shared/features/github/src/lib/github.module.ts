import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { GithubIconLinkComponent } from './github-icon-link/github-icon-link.component';
import { DomSanitizer } from '@angular/platform-browser';
export const GITHUB_ICON = 'github';

@NgModule({
  imports: [CommonModule, MatIconModule, MatButtonModule],
  declarations: [GithubIconLinkComponent],
  exports: [GithubIconLinkComponent],
})
export class GithubModule {
  private static INITIALIZE = true;

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    if (GithubModule.INITIALIZE) {
      this.init();
      GithubModule.INITIALIZE = false;
    }
  }

  private init(): void {
    this.matIconRegistry.addSvgIcon(
      GITHUB_ICON,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        `assets/icons/${GITHUB_ICON}.svg`
      )
    );
  }
}
