import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ImageSliderComponent } from './image-slider/image-slider.component';

@NgModule({
  imports: [CommonModule, MatIconModule, MatButtonModule],
  declarations: [
    ImageSliderComponent
  ],
  exports: [
    ImageSliderComponent
  ],
})
export class UiImageSliderModule {}
