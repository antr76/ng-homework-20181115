import { Component, Input } from '@angular/core';
import { WeatherInfo } from '../shared/models/weather-info.model';

@Component({
  selector: 'course-weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.scss']
})
export class WeatherInfoComponent {

  @Input() weather: WeatherInfo;

}
