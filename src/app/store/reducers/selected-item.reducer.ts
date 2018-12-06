import { SELECT_ITEM } from '../actions/selected-item.action';

export function selectedItemReducer(state, action: any) {
    switch (action.type) {
        case SELECT_ITEM:
            return action.item;
        default:
            return state;
    }
}
