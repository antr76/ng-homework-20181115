import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { tap, switchMap, map, pluck, shareReplay, distinctUntilChanged } from 'rxjs/operators';

import { Item, ItemType } from '../../shared/interfaces/item.interface';
import { allItems } from '../../shared/db/db-data';
import { LoadItemsSuccess, LOAD_ITEMS_PENDING } from '../actions/items.action';
import { SelectItem } from '../actions/selected-item.action';

@Injectable()
export class ItemsEffects {

    // This effect dispatches LoadItemsSuccess action to the store.
    @Effect()
    loadItemsSuccess$: Observable<Action>;

    // This effect dispatches SelectItem action to the store.
    @Effect()
    selectItem$: Observable<Action>;

    constructor(private actions$: Actions) {
        this.initialize();
    }

    private initialize() {
        const filteredItems$: Observable<Item[]> = this.actions$
        .pipe(
            ofType(LOAD_ITEMS_PENDING),
            pluck('itemType'),
            // ignore if itemType has the same value (multiple clicks to the same filter)
            distinctUntilChanged(),
            switchMap((itemType: ItemType) => this.loadAndFilterItems(itemType)),
            tap(filteredItems => console.log('filtered items emitted new value: ', filteredItems)),
            shareReplay()
        );

        this.loadItemsSuccess$ = filteredItems$
        .pipe(
            map(filteredItems => this.mapToLoadItemsSuccess(filteredItems)),
        );

        this.selectItem$ = filteredItems$
        .pipe(
            map(items => this.findItem(0, items)),
            distinctUntilChanged(),
            tap(firstItem => console.log('first item emitted new value: ', firstItem)),
            map(firstItem => this.mapToSelectItem(firstItem)),
        );
}

    private mapToLoadItemsSuccess(items: Item[]): Action {
        return new LoadItemsSuccess(items);
    }

    private mapToSelectItem(item: Item): Action {
        return new SelectItem(item);
    }

    private loadAndFilterItems(itemType: ItemType) {
        const filteredItems: Item[] = allItems.filter(
            (item) => [item.type, 'all'].includes(itemType)
        );
        return of(filteredItems);
    }

    private findItem(itemIndex: number, items: Item[]): Item {
        return items[itemIndex];
    }
}
