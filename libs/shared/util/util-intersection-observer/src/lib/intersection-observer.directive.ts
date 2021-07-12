import {
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  Type,
} from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { fromIntersectionObserver } from './fromIntersectionObserver';
import { IntersectionStatus } from './IntersectionStatus';

@Directive({
  selector: '[spacexUtilIntersectionObserver]',
})
export class IntersectionObserverDirective implements OnInit, OnDestroy {
  @Input()
  intersectionDebounce = 0;
  @Input()
  intersectionRootMargin = '0px';
  @Input()
  intersectionRoot: HTMLElement | undefined;
  @Input()
  intersectionThreshold: number | number[] = 0;
  @Input()
  intersectionObserverFor: Type<unknown> | undefined;

  @Output() visibilityChange = new EventEmitter<IntersectionStatus>();

  private destroy$ = new Subject();

  constructor(private readonly element: ElementRef) {}

  ngOnInit() {
    const element = this.element.nativeElement;
    const config = {
      root: this.intersectionRoot,
      rootMargin: this.intersectionRootMargin,
      threshold: this.intersectionThreshold,
    };

    fromIntersectionObserver(element, config, this.intersectionDebounce)
      .pipe(takeUntil(this.destroy$))
      .subscribe((status) => {
        this.visibilityChange.emit(status);
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
  }
}
