import { ActionReducerMap, Action } from '@ngrx/store';

import { Item } from '../shared/interfaces/item.interface';
import { itemsReducer } from './reducers/items.reducer';
import { selectedItemReducer } from './reducers/selected-item.reducer';

export interface AppState {
    items: Item[];
    selectedItem: Item;
}

export const reducers: ActionReducerMap<AppState, Action> = {
    items: itemsReducer,
    selectedItem: selectedItemReducer
};
