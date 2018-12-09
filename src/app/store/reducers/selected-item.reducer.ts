import { Item } from '../../shared/interfaces/item.interface';
import { SELECT_ITEM } from '../actions/selected-item.action';

export function selectedItemReducer(state: Item, action: any): Item {
    switch (action.type) {
        case SELECT_ITEM:
            return action.item;
        default:
            return state;
    }
}
