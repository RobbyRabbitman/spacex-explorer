import { Component } from '@angular/core';
import { GITHUB_ICON } from '../github.module';

@Component({
  selector: 'spacex-github-icon-link',
  templateUrl: './github-icon-link.component.html',
  styleUrls: ['./github-icon-link.component.scss'],
})
export class GithubIconLinkComponent {
  public readonly icon = GITHUB_ICON;
}
