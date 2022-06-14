import { Injectable } from '@angular/core';
import { Resource, SpacexApi } from '@spacex/shared/data-common';
import { Launch } from '@spacex/shared/types-common';

@Injectable({
  providedIn: 'root',
})
export class LaunchesApi extends SpacexApi<Launch> {
  protected readonly resource: Resource = 'launches';
}
