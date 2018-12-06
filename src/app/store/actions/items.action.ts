import { ItemType, Item } from '../../shared/interfaces/item.interface';

export const LOAD_ITEMS_PENDING = 'LOAD_ITEMS_PENDING';
export const LOAD_ITEMS_SUCCESS = 'LOAD_ITEMS_SUCCESS';

export class LoadItemsSuccess {
    readonly type = LOAD_ITEMS_SUCCESS;
    constructor(public items: Item[]) {}
}

export class LoadItemsPending {
    readonly type = LOAD_ITEMS_PENDING;
    constructor(public itemType: ItemType) {}
}
