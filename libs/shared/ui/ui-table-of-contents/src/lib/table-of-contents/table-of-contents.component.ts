import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'spacex-ui-table-of-contents',
  templateUrl: './table-of-contents.component.html',
  styleUrls: ['./table-of-contents.component.scss'],
})
export class TableOfContentsComponent {
  @Input()
  public contents: Array<string | number> | undefined;
  @Input()
  public active: string | number | undefined;
  @Input()
  public header: string | number | undefined;
  @Output()
  public readonly contentClicked = new EventEmitter<string | number>();
}
