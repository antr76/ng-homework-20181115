import { Component, OnInit, Input } from '@angular/core';
import { SocialInfo } from '../models/social-info.model';

@Component({
  selector: 'course-social-info',
  templateUrl: './social-info.component.html',
  styleUrls: ['./social-info.component.scss']
})
export class SocialInfoComponent implements OnInit {

  @Input() social: SocialInfo;

  constructor() {}

  ngOnInit() {
  }

}
