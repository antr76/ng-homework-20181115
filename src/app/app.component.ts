import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { Item, ItemType } from './shared/interfaces/item.interface';
import { allItems$ } from './shared/db/db-data';
import { LoadItemsPending } from './store/actions/items.action';
import { SelectItem } from './store/actions/selected-item.action';

@Component({
  selector: 'course-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  navItems: ItemType[];

  selectedItem$: Observable<Item>;
  filteredItems$: Observable<Item[]>;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    // By default all items should be shown.
    // We dispatch LoadItemsPending action which retrieves
    // all items for filter criteria 'all'.
    this.store.dispatch(new LoadItemsPending('all'));

    // Store contains already filtered items as the key 'items'
    this.filteredItems$ = this.store.select('items');
    // Store contains currently selected item as the key 'selectedItem'
    this.selectedItem$ = this.store.select('selectedItem');

    this.navItems = this.getDistinctFilterItems();
  }

  handleFilterSelection(itemType: ItemType): void {
    // If filter criteria has been changed we dispatch the LoadItemsPending action
    this.store.dispatch(new LoadItemsPending(itemType));
  }

  handleItemSelection(selectedItem: Item): void {
    // If selected item has been changed we dispatch the SelectItem action
    this.store.dispatch(new SelectItem(selectedItem));
  }

  private getDistinctFilterItems(): ItemType[] {
    let filterItems: ItemType[];

    const sub: Subscription = allItems$
      .pipe(
        map(items => this.mapToItemTypes(items)),
        // tap((data) => console.log('after map: ', data)),
      )
      .subscribe(
        (items: ItemType[]) => filterItems = items
      );
      sub.unsubscribe();

      const filterItemsSet = new Set<ItemType>(filterItems);
      // Spreading does NOT function filterItems = [...filterItemsSet]
      // I get a typescript error --downlevelIteration compiler option must be set!
      // So I'm gonna use Array.from method instead.
      const distinctFilterItems: ItemType[] = Array.from(filterItemsSet);

      // Add filter item 'all' to the first position
      distinctFilterItems.unshift('all');

      return distinctFilterItems;
  }

  private mapToItemTypes(items: Item[]): ItemType[] {
    return items.map((item: Item) => item.type);
  }

}
