import { createSelector } from '@ngrx/store';

import { Item } from '../../shared/interfaces/item.interface';
import { ITEMS_FILTERED, LOAD_ITEMS_SUCCESS } from '../actions/items.action';

const initialState: Item[] = [];

export function itemsReducer(state = initialState, action: any) {
    switch (action.type) {
        case LOAD_ITEMS_SUCCESS:
        case ITEMS_FILTERED:
            return action.items;
        default:
            return state;
    }
}

const filteredItemsSelector = (state: any) => state.items;

export const firstItem = createSelector(
    filteredItemsSelector,
    (items: Item[]) => items[0]
);
