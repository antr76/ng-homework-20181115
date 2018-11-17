import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject, combineLatest, merge, Subject } from 'rxjs';
import { tap, map, distinctUntilChanged, shareReplay } from 'rxjs/operators';

import { Item } from './models/item.model';
import { items$ } from './db/db-data';

@Component({
  selector: 'course-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  selectedItem$: Observable<Item>;
  filteredItems$: Observable<Item[]>;

  private filterSubject: BehaviorSubject<string>;
  private selectedItemSubject: Subject<Item>;

  constructor() {
    this.filterSubject = new BehaviorSubject('all');
    this.selectedItemSubject = new Subject();
  }

  ngOnInit() {
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

  onFilterSelection(itemType: string): void {
    this.filterSubject.next(itemType);
  }

  onItemSelection(selectedItem: Item): void {
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
