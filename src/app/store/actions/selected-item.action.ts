import { Item } from '../../shared/interfaces/item.interface';

export const SELECT_ITEM = 'SELECT_ITEM';

export class SelectItem {
    readonly type = SELECT_ITEM;
    constructor(public item: Item) {}
}
