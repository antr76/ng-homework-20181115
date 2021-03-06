import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Item, ItemType } from './shared/interfaces/item.interface';
import { AppService } from './app.service';

@Component({
  selector: 'course-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  navItems: ItemType[];

  selectedItem$: Observable<Item>;
  filteredItems$: Observable<Item[]>;

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.navItems = this.appService.getDistinctFilterItems();
    this.selectedItem$ = this.appService.selectedItem$;
    this.filteredItems$ = this.appService.filteredItems$;
  }

  handleFilterSelection(itemType: ItemType): void {
    this.appService.setFilterCriteria(itemType);
  }

  handleItemSelection(selectedItem: Item): void {
    this.appService.setItemSelection(selectedItem);
  }
}
