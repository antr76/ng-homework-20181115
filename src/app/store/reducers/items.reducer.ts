import { Item } from '../../shared/interfaces/item.interface';
import { LOAD_ITEMS_SUCCESS } from '../actions/items.action';

const initialState: Item[] = [];

export function itemsReducer(state = initialState, action: any) {
    switch (action.type) {
        case LOAD_ITEMS_SUCCESS:
            return action.items;
        default:
            return state;
    }
}
