import { Observable, of } from 'rxjs';

import { Item } from '../models/item.model';
import { delay } from 'rxjs/operators';

const items: Item[] = [
    {
        item: {
            name: 'Jumeirah Emirates Towers',
            type: 'hotel',
            phone: '128596832',
            url: 'assets/img/Jumeirah_Emirates_Towers.jpg',
            address: {
                street: 'Sheikh Zayed Road',
                houseNumber: '',
                city: 'Dubai'
            }
        },
        social: {
            name: 'Nam libero voluptatem',
            followers: 7850,
            following: 1675,
            url: 'assets/img/b1.jpg'
        },
        weather: {
            name: 'Et harum quidem',
            waterTemperature: 25,
            temperature: 39,
            url: ''
        }
    },
    {
        item: {
            name: 'Park Hotel',
            type: 'hotel',
            phone: '49859680',
            url: 'assets/img/park-hotel.jpg',
            address: {
                street: 'Richard-Wagner-Straße',
                houseNumber: '',
                city: 'Leipzig'
            }
        },
        social: {
            name: 'Nam libero voluptatem',
            followers: 1850,
            following: 575,
            url: 'assets/img/b1.jpg'
        },
        weather: {
            name: 'Et harum quidem',
            waterTemperature: 12,
            temperature: 21,
            url: ''
        }
    },
    {
        item: {
            name: 'Black Marlin',
            type: 'fishing',
            phone: '12859686',
            url: 'assets/img/lizard-island.jpg',
            address: {
                street: 'Lizard Island Australia',
                houseNumber: '',
                city: ''
            }
        },
        social: {
            name: 'Nam libero voluptatem',
            followers: 2851,
            following: 676,
            url: 'assets/img/b1.jpg'
        },
        weather: {
            name: 'Et harum quidem',
            waterTemperature: 16,
            temperature: 27,
            url: ''
        }
    },
    {
        item: {
            name: 'Lake Alan Henry',
            type: 'fishing',
            phone: '188594869',
            url: 'assets/img/lake-alan-henry.jpg',
            address: {
                street: 'Lake Alan Road',
                houseNumber: '',
                city: 'Texas'
            }
        },
        social: {
            name: 'Nam libero voluptatem',
            followers: 4252,
            following: 927,
            url: 'assets/img/b1.jpg'
        },
        weather: {
            name: 'Et harum quidem',
            waterTemperature: 19,
            temperature: 27,
            url: ''
        }
    },
    {
        item: {
            name: 'Haggis Adventures',
            type: 'tours',
            phone: '16859686',
            url: 'assets/img/Haggis_Adventures.jpg',
            address: {
                street: 'Adventures Road',
                houseNumber: '',
                city: 'Scotland'
            }
        },
        social: {
            name: 'Nam libero voluptatem',
            followers: 1853,
            following: 878,
            url: 'assets/img/b1.jpg'
        },
        weather: {
            name: 'Et harum quidem',
            waterTemperature: 14,
            temperature: 20,
            url: ''
        }
    },
    {
        item: {
            name: 'Busabout',
            type: 'tours',
            phone: '11554686',
            url: 'assets/img/Busabout.jpg',
            address: {
                street: 'Busabout Street',
                houseNumber: '',
                city: 'Guernsey'
            }
        },
        social: {
            name: 'Nam libero voluptatem',
            followers: 7853,
            following: 1278,
            url: 'assets/img/b1.jpg'
        },
        weather: {
            name: 'Et harum quidem',
            waterTemperature: 20,
            temperature: 28,
            url: ''
        }
    }];

export const allItems$: Observable<Item[]> = of(items);
    // .pipe(delay(0));
