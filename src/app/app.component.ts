import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Item } from './shared/models/item.model';
import { AppService } from './app.service';

@Component({
  selector: 'course-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  navItems: string[];

  selectedItem$: Observable<Item>;
  filteredItems$: Observable<Item[]>;

  constructor(private appService: AppService) {
    this.navItems = appService.getDistinctFilter();
  }

  ngOnInit() {
    this.appService.getDistinctFilter();
    this.selectedItem$ = this.appService.selectedItem$;
    this.filteredItems$ = this.appService.filteredItems$;
  }

  handleFilterSelection(itemType: string): void {
    this.appService.setFilterCriteria(itemType);
  }

  handleItemSelection(selectedItem: Item): void {
    this.appService.setItemSelection(selectedItem);
  }
}
