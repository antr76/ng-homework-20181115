import { Component, Input } from '@angular/core';

@Component({
  selector: 'course-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent {

  @Input() url: string;

}
