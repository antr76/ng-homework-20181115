import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, switchMap, map, pluck, distinctUntilChanged, delay } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';

import { Item, ItemType } from '../../shared/interfaces/item.interface';
import { allItems } from '../../shared/db/db-data';
import { LOAD_ITEMS_PENDING, FILTER_ITEMS, ItemsFiltered, LoadItemsSuccess } from '../actions/items.action';

@Injectable()
export class ItemsEffects {

    private allItems: Item[] = allItems;

    // This effect dispatches LoadItemsSuccess action to the store.
    @Effect()
    loadItemsSuccess$;

    // This effect dispatches ItemsFiltered action to the store.
    @Effect()
    itemsFiltered$: Observable<Action>;

    constructor(private actions$: Actions) {
        this.initialize();
    }

    private initialize() {
        this.loadItemsSuccess$ = this.actions$
        .pipe(
            ofType(LOAD_ITEMS_PENDING),
            switchMap(() => this.loadItems()),
            tap(items => this.allItems = items),
            tap(items => console.log('all items emitted new value: ', items)),
            map(items => this.mapToLoadItemSuccess(items)),
        );

        this.itemsFiltered$ = this.actions$
        .pipe(
            ofType(FILTER_ITEMS),
            pluck('itemType'),
            // ignore if itemType has the same value (multiple clicks to the same filter)
            distinctUntilChanged(),
            map((itemType: ItemType) => this.filterItems(itemType)),
            tap(filteredItems => console.log('filtered items emitted new value: ', filteredItems)),
            map(filteredItems => this.mapToItemsFiltered(filteredItems))
        );
    }

    private mapToLoadItemSuccess(items: Item[]): Action {
        return new LoadItemsSuccess(items);
    }

    private mapToItemsFiltered(items: Item[]): Action {
        return new ItemsFiltered(items);
    }

    private loadItems() {
        // todo retrieve items by using httpClient service
        return of(allItems).pipe(delay(500));
    }

    private filterItems(itemType: ItemType) {
        const items = this.allItems;
        return items.filter(
            (item) => [item.type, 'all'].includes(itemType)
        );
    }
}
