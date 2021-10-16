import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quick-search',
  templateUrl: './quick-search.component.html',
  styleUrls: ['./quick-search.component.scss']
})
export class QuickSearchComponent implements OnInit {
  @Input()
  queryOnKeyUp: boolean;
  @Input()
  placeholder: string;
  @Input()
  placeholderText: string;
  @Output()
  searchTerm = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  quickSearch(event: KeyboardEvent) {
    const input = event.target as any; // .value is dinamic
    const searchTerm = input.value.trim();
    if (
      (event.code === 'Enter' || event.keyCode === 13) &&
      event.type === 'keydown'
    ) {
      this.searchTerm.emit(searchTerm);
    }
    if (this.queryOnKeyUp && event.type === 'keyup') {
      this.searchTerm.emit(searchTerm);
    }
  }

}
