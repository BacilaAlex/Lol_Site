import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DocumentData } from 'firebase/firestore';
import { Observable } from 'rxjs';

import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  constructor() { }
  ngOnInit() {
  }
  searchValue: string = '';
  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();
  onSearchTextChanged() {
    this.searchTextChanged.emit(this.searchValue);
  }

}
