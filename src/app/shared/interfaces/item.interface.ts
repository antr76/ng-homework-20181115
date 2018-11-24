import { WeatherInfo } from './weather-info.interface';
import { SocialInfo } from './social-info.interface';

export type  ItemType = 'all' | 'hotel' | 'fishing' | 'tours';

export interface Item {
    type: ItemType;
    name: string;
    url: string;
    phone: string;
    address: {
        street: string;
        houseNumber: string;
        city: string;
    };
    weather: WeatherInfo;
    social: SocialInfo;
}
