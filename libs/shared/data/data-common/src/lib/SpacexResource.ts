import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Entity, UUID } from '@spacex/shared/types/common';
import { Endpoint } from './Endpoint';
/**
 *  common resources pattern: GET /<route>, GET /<route>/:id, POST /<route>/query
 */
export abstract class SpacexResource<E extends Entity> extends Endpoint {
  constructor(
    baseUrl: string,
    route: string,
    protected readonly http: HttpClient
  ) {
    super(baseUrl, route);
  }

  public fetchEntities(): Observable<Array<E>> {
    return this.http.get<Array<E>>(this.endpoint);
  }

  public fetch(id: UUID): Observable<E> {
    return this.http.get<E>(`${this.endpoint}/${id}`);
  }
}
