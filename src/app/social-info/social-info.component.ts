import { Component, Input } from '@angular/core';
import { SocialInfo } from '../shared/interfaces/social-info.interface';

@Component({
  selector: 'course-social-info',
  templateUrl: './social-info.component.html',
  styleUrls: ['./social-info.component.scss']
})
export class SocialInfoComponent {

  @Input() social: SocialInfo;

}
