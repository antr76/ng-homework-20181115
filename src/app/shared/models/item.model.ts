import { ItemInfo } from './item-info.model';
import { WeatherInfo } from './weather-info.model';
import { SocialInfo } from './social-info.model';

export interface Item {
    item: ItemInfo;
    weather: WeatherInfo;
    social: SocialInfo;
}
