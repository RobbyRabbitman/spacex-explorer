import { Component, Inject } from '@angular/core';
import { ShellConfig } from '../ShellConfig';
import { SHELL_CONFIG } from '../ShellConfigToken';

@Component({
  selector: 'spacex-ui-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent {
  public get config(): ShellConfig {
    return this._config;
  }

  constructor(
    @Inject(SHELL_CONFIG)
    private _config: ShellConfig
  ) {}
}
