import { AfterViewInit, Directive, ElementRef } from '@angular/core';
import { Store } from '@ngxs/store';
import { LAUNCHES_STATE } from '@spacex/launches/data-launches';
import { LaunchCardComponent } from '@spacex/launches/ui-launches';

@Directive({
  selector: '[launchTimelineScrollInit]',
})
export class LaunchTimelineScrollInitDirective implements AfterViewInit {
  public constructor(
    protected elementRef: ElementRef<HTMLElement>,
    protected readonly store: Store,
    protected readonly host: LaunchCardComponent
  ) {}

  public ngAfterViewInit(): void {
    if (
      this.host.launch?.id ===
      this.store.selectSnapshot(LAUNCHES_STATE).latest?.id
    )
      this.elementRef.nativeElement.scrollIntoView();
  }
}
