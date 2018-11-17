import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Item } from '../models/item.model';

@Component({
  selector: 'course-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  @Input() items: Item[];

  @Output() filterSelected: EventEmitter<string>;
  @Output() itemSelected: EventEmitter<Item>;

  constructor() {
    this.filterSelected = new EventEmitter<string>();
    this.itemSelected = new EventEmitter<Item>();
  }

  selectFilter(itemType): void {
    this.filterSelected.emit(itemType);
  }

  selectItem(item: Item) {
    this.itemSelected.emit(item);
  }

  ngOnInit() {
  }

}
