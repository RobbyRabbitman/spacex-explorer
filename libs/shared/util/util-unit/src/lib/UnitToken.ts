import { InjectionToken } from '@angular/core';
import { Unit } from '@spacex/shared/types/common';
import { Observable } from 'rxjs';

export const UNIT$: InjectionToken<Observable<Unit>> = new InjectionToken<
  Observable<string>
>('');
