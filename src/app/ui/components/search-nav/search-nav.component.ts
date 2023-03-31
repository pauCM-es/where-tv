import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-nav',
  templateUrl: './search-nav.component.html',
  styleUrls: ['./search-nav.component.scss']
})
export class SearchNavComponent {

  titleFilter = ''
  @Output() searchFilter: EventEmitter<string> = new EventEmitter()

  public onSearch(filter: string) {
    this.searchFilter.emit(filter)
  }

}
