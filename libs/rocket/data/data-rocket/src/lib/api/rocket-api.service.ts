import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  SPACEX_API_BASE_URL,
  SpacexResource,
} from '@spacex/shared/data/data-common';
import { Rocket } from '@spacex/shared/types/rocket';

@Injectable({
  providedIn: 'root',
})
export class RocketApiService extends SpacexResource<Rocket> {
  constructor(@Inject(SPACEX_API_BASE_URL) baseUrl: string, http: HttpClient) {
    super(baseUrl, 'rockets', http);
  }
}
