import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthLoginGuard implements CanActivate {

    subscription: Subscription;

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (!localStorage.getItem('userActive')) {
            return true;
        }

        this.router.navigate(['/']);
        return false;
    }
}
