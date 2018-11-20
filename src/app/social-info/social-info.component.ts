import { Component, Input } from '@angular/core';
import { SocialInfo } from '../shared/models/social-info.model';

@Component({
  selector: 'course-social-info',
  templateUrl: './social-info.component.html',
  styleUrls: ['./social-info.component.scss']
})
export class SocialInfoComponent {

  @Input() social: SocialInfo;

}
