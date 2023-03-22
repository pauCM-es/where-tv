import { Component, OnInit, Input, Output, EventEmitter,SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() currentPage!: number;
  @Input() amountPages!: number;

  @Output() goTo: EventEmitter<number> = new EventEmitter()

  pages: number[] = []

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      (changes['amountPages'] && changes['amountPages'].currentValue)
    ) {
      this.createPagination(this.amountPages)
    }
  }

  ngOnInit(): void {
    this.createPagination(this.amountPages)
  }


  createPagination(number: number) {
    this.pages = [];
    for (let i = 0; i < number; i++) {
      this.pages.push(i + 1)
    }
  }

  public onGoTo(page: number) {
    this.goTo.emit(page)
  }

}
