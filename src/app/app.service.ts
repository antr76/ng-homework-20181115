import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject, combineLatest, merge } from 'rxjs';
import { Item } from './shared/models/item.model';
import { distinctUntilChanged, map, tap, shareReplay } from 'rxjs/operators';
import { items$ } from './shared/db/db-data';
/*
@Injectable({
  providedIn: 'root'
})
*/
export class AppService {

  selectedItem$: Observable<Item>;
  filteredItems$: Observable<Item[]>;

  private filterSubject: BehaviorSubject<string>;
  private selectedItemSubject: Subject<Item>;

  constructor() {
    this.filterSubject = new BehaviorSubject('all');
    this.selectedItemSubject = new Subject();

    this.initialize();
  }

  initialize() {
    const filterCombinedStream$ = combineLatest(
      this.filterSubject
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

    const firstItem$: Observable<Item> = this.filteredItems$
      .pipe(
        map(items => this.findItem(0, items)),
        distinctUntilChanged(),
        tap(firstItem => console.log('first item emitted new value: ', firstItem))
      );

    this.selectedItem$ = merge(firstItem$, this.selectedItemSubject)
      .pipe(
        distinctUntilChanged(),
        tap(selectedItem => console.log('selected item emitted new value: ', selectedItem))
      );

  }

  setFilterCriteria(itemType: string): any {
    this.filterSubject.next(itemType);
  }

  setItemSelection(selectedItem: Item): any {
    this.selectedItemSubject.next(selectedItem);
  }

  filterItems(itemType: string, allItems: Item[]): Item[] {
    const filteredItems = allItems.filter(
      item => [item.item.type, 'all'].includes(itemType)
    );

    return filteredItems;
  }

  findItem(itemIndex: number, items: Item[]): Item {
    return items[itemIndex];
  }

}
