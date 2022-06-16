import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  InjectionToken,
  Input,
} from '@angular/core';
import { Launch } from '@spacex/shared/types-common';

export const LAUNCH_CARD_DUMMY_IMAGE_SRC = new InjectionToken('', {
  providedIn: 'root',
  factory: () => 'assets/launches/dummy_rocket.svg',
});

@Component({
  selector: 'ui-launches-launch-card',
  templateUrl: './launch-card.component.html',
  styleUrls: ['./launch-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LaunchCardComponent {
  @Input()
  public launch?: Launch;
  @Input()
  public imageLoading: 'lazy' | 'eager' = 'lazy';
  @Input()
  public dummyImage = true;
  @Input()
  public dummyImageSrc = inject(LAUNCH_CARD_DUMMY_IMAGE_SRC);
  public constructor(public readonly elementRef: ElementRef<HTMLElement>) {}
}
