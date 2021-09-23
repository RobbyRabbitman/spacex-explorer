import { Component, Input } from '@angular/core';

@Component({
  selector: 'spacex-ui-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss'],
})
export class ImageSliderComponent {
  @Input()
  public images: Array<[string, string]> | undefined;
  @Input()
  public selected = 0;
  @Input()
  public height: number | undefined;
}
