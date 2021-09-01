import { Component, OnInit } from '@angular/core';
import { GITHUB_ICON } from '../shared-features-github.module';

@Component({
  selector: 'spacex-github-icon-link',
  templateUrl: './github-icon-link.component.html',
  styleUrls: ['./github-icon-link.component.scss'],
})
export class GithubIconLinkComponent implements OnInit {
  public icon: string | undefined;

  ngOnInit(): void {
    this.icon = GITHUB_ICON;
  }
}
