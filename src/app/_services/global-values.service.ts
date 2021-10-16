import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class GlobalValuesService {
  private showMainMenuSource = new BehaviorSubject<boolean>(false);
  showMainMenu = this.showMainMenuSource.asObservable();

  private applicationPageLoadingSource = new BehaviorSubject<boolean>(false);
  applicationPageLoading = this.applicationPageLoadingSource.asObservable();

  private userNameSource = new BehaviorSubject<string>('');
  userName = this.userNameSource.asObservable();
  loading = false;

  constructor() { }

  setLoading(loading: boolean) {
    this.loading = loading;
    this.applicationPageLoadingSource.next(loading);
  }

  getLoading() {
    return this.loading;
  }

  setShowMainMenu(show: boolean) {
    this.showMainMenuSource.next(show);
  }

  setUserName(userName: string) {
    this.userNameSource.next(userName);
  }
}
