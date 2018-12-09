import { Pipe, PipeTransform } from '@angular/core';

import { Item, ItemType } from './shared/interfaces/item.interface';

@Pipe({
  name: 'navItems'
})
export class NavItemsPipe implements PipeTransform {

  transform(allItems: Item[]): any {
    return this.getNavItems(allItems);
  }

  private getNavItems(items: Item[]): ItemType[] {
    items = items || [];
    const navItemsSet = new Set<ItemType>();

    // Fill the set with the filter types
    items.forEach(
      (item: Item) => navItemsSet.add(item.type)
    );

    // Spreading does NOT function filterItems = [...filterItemsSet]
    // I get a typescript error --downlevelIteration compiler option must be set!
    // So I'm gonna use Array.from method instead.
    const navItems: ItemType[] = Array.from(navItemsSet);

    // Add filter item 'all' to the first position
    navItems.unshift('all');

    return navItems;
  }

}
