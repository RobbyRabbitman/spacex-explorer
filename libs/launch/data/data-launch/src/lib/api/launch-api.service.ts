import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import {
  SPACEX_API_BASE_URL,
  SpacexResource,
} from '@spacex/shared/data/data-common';
import { Launch } from '@spacex/shared/types/launch';

@Injectable({
  providedIn: 'root',
})
export class LaunchApiService extends SpacexResource<Launch> {
  constructor(@Inject(SPACEX_API_BASE_URL) baseUrl: string, http: HttpClient) {
    super(baseUrl, 'launches', http);
  }
}
