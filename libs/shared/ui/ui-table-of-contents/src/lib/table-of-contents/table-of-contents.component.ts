import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'spacex-ui-table-of-contents',
  templateUrl: './table-of-contents.component.html',
  styleUrls: ['./table-of-contents.component.scss'],
})
export class TableOfContentsComponent {
  @Input()
  public contents: Iterable<string> | undefined;
  @Input()
  public active: string | undefined;
  @Input()
  public header: string | undefined;
  @Output()
  public readonly contentClicked = new EventEmitter<string>();
}
