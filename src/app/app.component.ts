import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap, filter } from 'rxjs/operators';

import { Item, ItemType } from './shared/interfaces/item.interface';
import { LoadItemsPending, FilterItems } from './store/actions/items.action';
import { SelectItem } from './store/actions/selected-item.action';
import { firstItem } from './store/reducers/items.reducer';
import { DataService } from './shared/db/data.service';

@Component({
  selector: 'course-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  navItems: ItemType[];

  allItems$: Observable<Item[]>;
  selectedItem$: Observable<Item>;
  filteredItems$: Observable<Item[]>;

  constructor(private store: Store<any>, private dataService: DataService) {}

  ngOnInit() {
    // By default all items should be shown.
    // We dispatch LoadItemsPending action which retrieves
    // all items.
    this.store.dispatch(new LoadItemsPending());

    // allItems$ is needed for calculating of navItems
    // navItems a calculated by using navItems pipe.
    this.allItems$ = this.dataService.getData();

    // Store contains already filtered items as the key 'items'
    this.filteredItems$ = this.store.select('items');

    // Store contains currently selected item as the key 'selectedItem'
    this.selectedItem$ = this.store.select('selectedItem');

    // When firstItem gets changed in the store
    // (it happenes when the property 'items' in the store gets changed)
    // we dispatch the SelectItem action with that item as payload.
    // For that purpose we are using the firstItem selector defined in the items reducer.
    this.store.select(firstItem)
      .pipe(
        filter(item => item !== undefined),
        tap(item => this.handleItemSelection(item))
      )
      .subscribe();
  }

  handleFilterSelection(itemType: ItemType): void {
    // If filter criteria has been changed we dispatch the FilterItems action
    this.store.dispatch(new FilterItems(itemType));
  }

  handleItemSelection(selectedItem: Item): void {
    // If selected item has been changed we dispatch the SelectItem action
    this.store.dispatch(new SelectItem(selectedItem));
  }

}
