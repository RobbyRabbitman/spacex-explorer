import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  inject,
  OnInit,
  Output,
} from '@angular/core';

@Directive({
  selector: '[uiSpacexImageLoaded]',
  exportAs: 'uiSpacexImageLoaded',
})
export class ImageLoadedDirective implements OnInit {
  protected readonly elementRef: ElementRef<HTMLImageElement> =
    inject(ElementRef);

  public get complete() {
    return this.elementRef.nativeElement.complete;
  }

  @Output()
  public readonly loaded = new EventEmitter();

  @HostListener('load')
  protected onLoad() {
    this.loaded.emit();
  }

  public ngOnInit(): void {
    if (this.complete) {
      this.loaded.emit();
    }
  }
}
