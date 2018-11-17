import { Component, OnInit, Input } from '@angular/core';
import { WeatherInfo } from '../models/weather-info.model';

@Component({
  selector: 'course-weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.scss']
})
export class WeatherInfoComponent implements OnInit {

  @Input() weather: WeatherInfo;

  constructor() { }

  ngOnInit() {
  }

}
