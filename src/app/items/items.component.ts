import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Item } from '../shared/interfaces/item.interface';

@Component({
  selector: 'course-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent {

  private selectedItem: Item;

  @Input() items: Item[];

  @Output() itemSelected: EventEmitter<Item>;

  constructor() {
    this.itemSelected = new EventEmitter<Item>();
  }

  selectItem(item: Item) {
    this.selectedItem = item;
    this.itemSelected.emit(item);
  }

  isSelected(item: Item) {
    return item === this.selectedItem;
  }

}
