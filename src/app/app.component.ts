import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import {
  Router,
  Event,
  NavigationStart,
  NavigationEnd,
  NavigationError
} from '@angular/router';
import { AuthenticationService } from './_services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'Aloia Aerospace';
  showHeader = true;
  showFooter = true;
  navigationError: any = { hasError: false, errorMessage: '' };

  public hourExpiration = 0;
  public minuteExpiration = 0;
  public secondExpiration = 0;
  public systemMessage = null;
  private expirationTimeSubscription: Subscription;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        if (event.url.match('login')) {
          this.showHeader = false;
          this.showFooter = false;
        } else {
          this.showHeader = true;
          this.showFooter = true;
        }
      }

      if (event instanceof NavigationEnd) {
        this.navigationError = { hasError: false, errorMessage: '' };
      }

      if (event instanceof NavigationError) {
        this.navigationError.hasError = true;
        this.navigationError.errorMessage = event.error;
      }
    });
    document.getElementById('overlay').classList.remove('overlay');
  }

  ngOnDestroy() {
    this.expirationTimeSubscription.unsubscribe();
  }
}
