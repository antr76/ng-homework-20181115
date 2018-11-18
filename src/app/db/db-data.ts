import { Observable, of } from 'rxjs';

import { Item } from '../models/item.model';

const items: Item[] = [
    {
        item: {
            name: 'Hotel 1',
            type: 'hotel',
            phone: '+1285 968 685',
            url: 'assets/img/1.jpg',
            address: {
                street: 'street',
                houseNumber: '2',
                city: 'city'
            }
        },
        social: {
            name: 'Nam libero voluptatem',
            followers: 2850,
            following: 675,
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
            name: 'Fishing 1',
            type: 'fishing',
            phone: '+1285 968 686',
            url: 'assets/img/1.jpg',
            address: {
                street: 'Munic street',
                houseNumber: '3',
                city: 'Munic'
            }
        },
        social: {
            name: 'Nam libero voluptatem1',
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
            name: 'Fishing 2',
            type: 'fishing',
            phone: '+1285 968 687',
            url: 'assets/img/1.jpg',
            address: {
                street: 'Munic street1',
                houseNumber: '4',
                city: 'Munic'
            }
        },
        social: {
            name: 'Nam libero voluptatem2',
            followers: 2852,
            following: 677,
            url: 'assets/img/b1.jpg'
        },
        weather: {
            name: 'Et harum quidem',
            waterTemperature: 17,
            temperature: 28,
            url: ''
        }
    },
    {
        item: {
            name: 'Tours 1',
            type: 'tours',
            phone: '+1285 968 688',
            url: 'assets/img/1.jpg',
            address: {
                street: 'Pforzheim street1',
                houseNumber: '34',
                city: 'Pforzheim'
            }
        },
        social: {
            name: 'Nam libero voluptatem3',
            followers: 2853,
            following: 678,
            url: 'assets/img/b1.jpg'
        },
        weather: {
            name: 'Et harum quidem2',
            waterTemperature: 18,
            temperature: 29,
            url: ''
        }
    }];

export const items$: Observable<Item[]> = of(items);

items$.subscribe();

