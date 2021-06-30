import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableOfContentsComponent } from './table-of-contents/table-of-contents.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [CommonModule, MatButtonModule],
  declarations: [TableOfContentsComponent],
  exports: [TableOfContentsComponent],
})
export class UiTableOfContentsModule {}
