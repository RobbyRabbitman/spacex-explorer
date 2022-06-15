import { Injectable } from '@angular/core';
import { Resource, SpacexApi } from '@spacex/shared/data-common';
import { Launch } from '@spacex/shared/types-common';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LaunchesApi extends SpacexApi<Launch> {
  protected readonly resource: Resource = 'launches';

  public latest(): Observable<Launch> {
    return this.client.get<Launch>(`${this.path}/latest`);
  }
}
