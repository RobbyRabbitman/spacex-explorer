import { HttpClient } from '@angular/common/http';
import { inject, InjectionToken } from '@angular/core';
import { Identifiable } from '@spacex/shared/types-common';
import { Observable } from 'rxjs';
import { Resource } from '../types/Resource';

export const SPACEX_API = new InjectionToken<string>('spacex api');

export abstract class SpacexApi<T extends Identifiable> {
  protected readonly client = inject(HttpClient);
  protected readonly api = inject(SPACEX_API);
  protected abstract readonly resource: Resource;

  public all(): Observable<T[]> {
    return this.client.get<T[]>(`${this.api}/${this.resource}`);
  }

  public one(id: string): Observable<T> {
    return this.client.get<T>(`${this.api}/${this.resource}/${id}`);
  }

  public query<R>(body: { query: any; options: any }): Observable<R> {
    return this.client.post<R>(`${this.api}/${this.resource}/query`, body);
  }
}
