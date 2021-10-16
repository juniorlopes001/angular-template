import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalValuesService } from '../../_services/global-values.service';
import { AuthenticationService } from '../../_services/authentication.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  public showMenu: boolean;
  public dropdownMenu: boolean;
  private user: any = null;
  public userName: string;
  public userId: number;
  public userLastName: string;

  constructor(
    private globals: GlobalValuesService,
    private authenticationService: AuthenticationService,
    public router: Router,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    if (this.user) {
      this.userName = this.user.name;
    }

    this.globals.showMainMenu.subscribe(show => (this.showMenu = show));
  }

  openMenu() {
    this.globals.setShowMainMenu(true);
  }

  toogleDropdown() {
    if (this.globals.getLoading()) {
      return;
    }

    this.dropdownMenu = !this.dropdownMenu;
  }

  changePassword() {
    
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
