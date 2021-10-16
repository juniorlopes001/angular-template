import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalValuesService } from '../../_services/global-values.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  public showMenu: boolean;

  constructor(private globals: GlobalValuesService, private router: Router) { }

  ngOnInit() {
    this.globals.showMainMenu.subscribe(show => {
      this.showMenu = show;
    });
  }

  home() {
    this.closeMenu();
    this.router.navigate(['/']);
  }

  openPage(page: string) {
    this.closeMenu();
    this.router.navigate(['/' + page]);
  }

  closeMenu() {
    this.showMenu = false;
  }

}
