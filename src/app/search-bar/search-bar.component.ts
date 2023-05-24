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
    this.blur();
  }
  searchValue: string = '';
  @Output()
  searchTextChanged = new EventEmitter<string>();
  onSearchTextChanged() {
    this.searchTextChanged.emit(this.searchValue);
  }
  blur() {
    document.addEventListener('DOMContentLoaded', function () {
      const searchInput = document.querySelector('.search-input') as HTMLInputElement;

      searchInput.addEventListener('focus', function () {
        searchInput.style.opacity = '1'; // Set opacity to 100% when clicked
      });

      searchInput.addEventListener('blur', function () {
        searchInput.style.opacity = '0.8'; // Set opacity back to 80% when not clicked
      });
    });

  }
}
