import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'filter-menu',
  templateUrl: './filter-menu.component.html',
  styleUrls: ['./filter-menu.component.scss']
})
export class FilterMenuComponent implements OnInit {
  public isMenuActive = false;
  public isBigMenu = false;
  constructor() {}
  ngOnInit() {}

  showMenu(active: boolean, isBigMenu: boolean = false) {
    this.isMenuActive = active;
    this.isBigMenu = isBigMenu;
  }

  closeFilter() {
    this.showMenu(false);
  }
}
