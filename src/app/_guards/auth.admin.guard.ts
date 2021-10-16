import { AuthenticationService } from 'src/app/_services/authentication.service';
import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthAdminGuard implements CanActivate {

    subscription: Subscription;

    constructor(private router: Router,
        private authenticationService: AuthenticationService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('userActive') && this.authenticationService.isAdmin()) {
            return true;
        }

        this.router.navigate(['/']);
        return false;
    }
}
