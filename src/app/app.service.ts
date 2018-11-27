import { Observable, BehaviorSubject, Subject, combineLatest, Subscription } from 'rxjs';
import { distinctUntilChanged, map, tap, merge, shareReplay } from 'rxjs/operators';

import { allItems$ } from './shared/db/db-data';
import { Item, ItemType } from './shared/interfaces/item.interface';

export class AppService {

  selectedItem$: Observable<Item>;
  filteredItems$: Observable<Item[]>;

  private filterSubject: BehaviorSubject<ItemType>;
  private selectedItemSubject: Subject<Item>;

  constructor() {
    this.filterSubject = new BehaviorSubject<ItemType>('all');
    this.selectedItemSubject = new Subject<Item>();

    this.initialize();
  }

  initialize() {
    this.filteredItems$ =
      this.configureFilteredItemsStream(this.filterSubject, allItems$);
    this.selectedItem$ =
      this.configureSelectedItemStream(this.filteredItems$, this.selectedItemSubject);
  }

  setFilterCriteria(itemType: ItemType): any {
    this.filterSubject.next(itemType);
  }

  getDistinctFilterItems(): ItemType[] {
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

  setItemSelection(selectedItem: Item): any {
    this.selectedItemSubject.next(selectedItem);
  }

  private mapToItemTypes(items: Item[]): ItemType[] {
    return items.map((item: Item) => item.type);
  }

  private prepareFilteredItemsStream(
        filter$: Observable<ItemType>,
        items$: Observable<Item[]>
  ): Observable<{ itemType: ItemType, allItems: Item[] }> {
    return combineLatest(
      filter$
        .pipe(
          distinctUntilChanged()
        ),
      items$,
      (itemType, allItems) => {
        return { itemType, allItems };
      }
    );
  }

  private configureFilteredItemsStream(
        filter$: Observable<ItemType>,
        items$: Observable<Item[]>
  ): Observable<Item[]> {

    return this.prepareFilteredItemsStream(filter$, items$)
      .pipe(
        // tap((data) => console.log('before map: ', data)),
        map(data => this.filterItems(data.itemType, data.allItems)),
        tap(filteredItems => console.log('filtered items emitted new value: ', filteredItems)),
        shareReplay()
      );
  }

  private configureFirstItemStream(
        items$: Observable<Item[]>
  ): Observable<Item> {
    return items$
      .pipe(
        map(items => this.findItem(0, items)),
        distinctUntilChanged(),
        tap(firstItem => console.log('first item emitted new value: ', firstItem))
      );
  }

  private configureSelectedItemStream(
        items$: Observable<Item[]>,
        selectedItem$: Observable<Item>
  ): Observable<Item> {

    return this.configureFirstItemStream(items$)
      .pipe(
        merge(selectedItem$),
        distinctUntilChanged(),
        tap(selectedItem => console.log('selected item emitted new value: ', selectedItem))
      );
  }

  private filterItems(itemType: ItemType, allItems: Item[]): Item[] {
    const filteredItems = allItems.filter(
      item => [item.type, 'all'].includes(itemType.toLowerCase())
    );

    return filteredItems;
  }

  private findItem(itemIndex: number, items: Item[]): Item {
    return items[itemIndex];
  }

}
