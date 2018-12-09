import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

import { Item } from '../interfaces/item.interface';

@Injectable()
export class DataService {

    constructor(private http: HttpClient) {}

    getData(): Observable<Item[]> {
        return this.http.get('/assets/json/items.json')
        .pipe(
            pluck('items')
        );
    }
}
