import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

interface PaginationPage {
  pageIndex: number;
  number: number;
}

@Component({
  selector: 'grid-pagination',
  templateUrl: './grid-pagination.component.html',
  styleUrls: ['./grid-pagination.component.scss']
})
export class GridPaginationComponent implements OnInit {

  public totalItemsCount: number = 0;
  @Input()
  tableRequestReturned: boolean;
  @Input()
  tableListLength: number;
  @Input()
  itemsPerPageFixed: number;
  @Input()
  selectedPageIndex: number;

  @Input()
  showDisplay = true;


  @Output()
  pageRequested = new EventEmitter<number>();

  @Output()
  itemsPerPageRequested = new EventEmitter<number>();

  @Input()
  set totalItemsCountUpdate(_totalItemsCount: number) {
    if (_totalItemsCount > 0) {
      this.totalItemsCount = _totalItemsCount;
      this.updatePagination(_totalItemsCount);
    } else {
      this.totalItemsCount = 0;
    }
  }

  public totalPages: number = 0;
  public pages: PaginationPage[] = [];
  public pagesToDisplay: PaginationPage[] = [];
  public displayStart: number = 0;
  public showingFirstPage: boolean = true;
  public showingLastPage: boolean = false;
  public itemsPerPage: number = 0;

  // Option Itens per Page
  selectedOption: any;
  options = [10, 25, 50, 100, 1000];

  constructor() { }

  ngOnInit() {
    this.selectedOption = 10;
  }

  emitPageRequested(pageRequested: number) {
    this.pageRequested.emit(pageRequested);
  }

  emitItemsPerPageRequested(itemsPerPageRequested: number) {
    this.itemsPerPageRequested.emit(itemsPerPageRequested);
  }

  onChange() {
    this.itemsPerPageFixed = this.selectedOption;
    this.itemsPerPage = this.selectedOption;
    this.updatePagination(this.totalItemsCount);
    this.showFirstPage();
  }

  updatePagination(totalItemsCount: number) {
    this.pages = [];
    if (totalItemsCount < this.itemsPerPage) {
      this.itemsPerPage = totalItemsCount;
    } else {
      this.itemsPerPage = this.itemsPerPageFixed;
    }
    this.totalPages = Math.ceil(totalItemsCount / this.itemsPerPage);

    for (let i = 1; i <= this.totalPages; i++) {
      const page: PaginationPage = {
        number: i,
        pageIndex: i - 1
      }
      this.pages.push(page);
    }
    this.setPagesSubArray(this.pages, this.displayStart);
  }

  setPagesSubArray(fullPagesArray: PaginationPage[], startingIndex: number) {
    this.pagesToDisplay = [];

    // if total pages are more than 3, it will limit to 3
    let pagesLimit = 0;
    if (this.totalPages > 3) {
      pagesLimit = 3;
      if (this.selectedPageIndex < this.totalPages - 4) {
        this.showingLastPage = false;
      }
    } else if (this.totalPages <= 3) {
      pagesLimit = this.totalPages;
      this.showingLastPage = true;
      this.showingFirstPage = true;
    }

    if (this.totalPages > 3 && this.selectedPageIndex < this.totalPages - 4) {
      this.showingLastPage = false;
    }

    for (let i = 0; i < pagesLimit; i++) {
      this.pagesToDisplay.push(fullPagesArray[startingIndex + i]);
    }

  }

  showNextPage() {
    if (this.showingLastPage) {
      return false;
    }
    this.showingFirstPage = false;
    this.displayStart++;
    this.setPagesSubArray(this.pages, this.displayStart);
    if (this.displayStart >= this.totalPages - 3) {
      this.showingLastPage = true;
    } else {
      this.showingLastPage = false;
    }
    return false;
  }

  showPreviousPage() {
    if (this.showingFirstPage) {
      return false;
    }
    this.showingLastPage = false;
    this.displayStart--;
    this.setPagesSubArray(this.pages, this.displayStart);
    if (this.displayStart === 0) {
      this.showingFirstPage = true;
    }
    return false;
  }

  showFirstPage() {
    /* if (this.selectedPageIndex === 0) {
      return false;
    } */
    this.displayStart = 0;
    this.showingFirstPage = true;
    this.showingLastPage = false;
    this.setPagesSubArray(this.pages, this.displayStart);
    this.itemsPerPageRequested.emit(this.itemsPerPageFixed);
    this.pageRequested.emit(0);
  }

  movePagesArrayToShowFirstPage() {
    this.displayStart = 0;
    this.showingFirstPage = true;
    this.showingLastPage = false;
    this.setPagesSubArray(this.pages, 0);
  }

  showLastPage() {
    if (this.selectedPageIndex === this.totalPages - 1) {
      return false;
    }

    if (this.totalPages === 2) {
      this.displayStart = this.totalPages - 2;
    } else {
      this.displayStart = this.totalPages - 3;
    }
    this.setPagesSubArray(this.pages, this.displayStart);
    this.showingLastPage = true;
    if (this.totalPages > 3) {
      this.showingFirstPage = false;
    }
    this.itemsPerPageRequested.emit(this.itemsPerPageFixed);
    this.pageRequested.emit(this.totalPages - 1);
  }

  pageLostShiftCheck() {
    if (this.selectedPageIndex > this.totalPages - 4) {
      this.showPreviousPage();
      this.showingLastPage = true;
    }
    if (this.selectedPageIndex === this.totalPages - 1) {
      return true;
    } else {
      return false;
    }
  }
}