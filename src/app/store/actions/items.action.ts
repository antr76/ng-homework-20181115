import { ItemType, Item } from '../../shared/interfaces/item.interface';

export const LOAD_ITEMS_PENDING = 'LOAD_ITEMS_PENDING';
export const LOAD_ITEMS_SUCCESS = 'LOAD_ITEMS_SUCCESS';
export const FILTER_ITEMS = 'FILTER_ITEMS';
export const ITEMS_FILTERED = 'ITEMS_FILTERED';

export class LoadItemsSuccess {
    readonly type = LOAD_ITEMS_SUCCESS;
    constructor(public items: Item[]) {}
}

export class LoadItemsPending {
    readonly type = LOAD_ITEMS_PENDING;
}

export class FilterItems {
    readonly type = FILTER_ITEMS;
    constructor(public itemType: ItemType) {}
}

export class ItemsFiltered {
    readonly type = ITEMS_FILTERED;
    constructor(public items: Item[]) {}
}
