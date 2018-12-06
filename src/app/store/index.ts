import { ActionReducerMap, Action } from '@ngrx/store';

import { itemsReducer } from './reducers/items.reducer';
import { selectedItemReducer } from './reducers/selected-item.reducer';

export const reducers: ActionReducerMap<any, Action> = {
    items: itemsReducer,
    selectedItem: selectedItemReducer
};
