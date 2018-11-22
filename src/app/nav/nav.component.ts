import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'course-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent  {

  @Input() items: string[];

  @Output() selected: EventEmitter<string>;

  constructor() {
    this.selected = new EventEmitter<string>();
  }

  handleFilterSelection(filterCriteria) {
    this.selected.emit(filterCriteria);
  }

}
