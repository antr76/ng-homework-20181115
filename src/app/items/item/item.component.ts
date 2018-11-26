import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../../shared/interfaces/item.interface';

@Component({
  selector: 'course-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {

  @Input() item: Item;

  @Output() selected: EventEmitter<Item>;

  constructor() {
    this.selected = new EventEmitter<Item>();
  }

  handleSelection() {
    this.selected.emit(this.item);
  }

}
