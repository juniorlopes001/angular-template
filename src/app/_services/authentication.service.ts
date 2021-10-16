import { GlobalValuesService } from './global-values.service';
import { HelpersService } from './helpers.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { ServiceBase } from './service.base';

@Injectable({ providedIn: 'root' })
export class AuthenticationService extends ServiceBase {
    authenticationApi: string = environment.aloiaApi;

    constructor(
        private http: HttpClient,
        private helpers: HelpersService,
        private global: GlobalValuesService) { super(); }

    login(username: string, password: string) {
        const preparedObject = JSON.stringify({
            Email: username,
            Password: password
        });
        return this.http.post<any>(this.authenticationApi + 'authentication', preparedObject, this.getHeaderJson())
            .pipe(map(userToken => {
                if (userToken.success) {
                    localStorage.setItem('token', userToken.data.token);
                    localStorage.setItem('user', JSON.stringify(userToken.data.user));
                    localStorage.setItem('profile', JSON.stringify(userToken.data.user.profile));
                    localStorage.setItem('userActive', 'true');
                    return userToken.success;
                }

                return false;
            }));
    }

    logout() {
        this.removeUserToken();
    }

    public removeUserToken() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('profile');
        localStorage.removeItem('userActive');
    }

    public getUserToken(): string {
        return localStorage.getItem('token').replace('"', '');
    }

    public changeUserData(user: any) {
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('profile', JSON.stringify(user.profile));
    }

    getUser(): any {
        return JSON.parse(localStorage.getItem('user'));
    }

    public getUserId(): number {
        return this.getUser().id;
    }

    public isAdmin(): boolean {
        return this.getUser().profile == 0;
    }
}
