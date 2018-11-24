import { Observable, BehaviorSubject, Subject, combineLatest, merge } from 'rxjs';
import { distinctUntilChanged, map, tap, shareReplay } from 'rxjs/operators';

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
    this.configureFilterStream(this.filterSubject, allItems$);
    this.configureSelectedItemStream(this.filteredItems$, this.selectedItemSubject);
  }

  setFilterCriteria(itemType: ItemType): any {
    this.filterSubject.next(itemType);
  }

  getDistinctFilter(): ItemType[] {
    return [
      'all',
      'hotel',
      'fishing',
      'tours'
    ];
  }

  setItemSelection(selectedItem: Item): any {
    this.selectedItemSubject.next(selectedItem);
  }

  private configureFilterStream(filter$: Observable<ItemType>, items$: Observable<Item[]>): void {
    const filterCombinedStream$ = combineLatest(
      filter$
        .pipe(
          distinctUntilChanged()
        ),
      items$,
      (itemType, allItems) => {
        return { itemType, allItems };
      }
    );

    this.filteredItems$ = filterCombinedStream$
      .pipe(
        // tap((data) => console.log('before map: ', data)),
        map(data => this.filterItems(data.itemType, data.allItems)),
        tap(filteredItems => console.log('filtered items emitted new value: ', filteredItems)),
        shareReplay()
      );
  }

  private configureSelectedItemStream(items$: Observable<Item[]>, selectedItem$: Observable<Item>): void {
    const firstItem$: Observable<Item> = items$
      .pipe(
        map(items => this.findItem(0, items)),
        distinctUntilChanged(),
        tap(firstItem => console.log('first item emitted new value: ', firstItem))
      );

    this.selectedItem$ = merge(firstItem$, selectedItem$)
      .pipe(
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
