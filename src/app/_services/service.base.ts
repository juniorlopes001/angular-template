import { HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';
import { appInjector } from './injector';

export abstract class ServiceBase {

    protected getHeaderJson() {
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    }

    protected getHeaderJsonToken() {
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.getUserToken()
            })
        };
    }

    protected getHeaderBlobToken() {
        return new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.getUserToken()
        });
    }

    protected extractedData(response: any) {
        return response.dados || {};
    }

    protected serviceError(error: Response | any) {
        if (error.status === 0 || error.status === 401 || error.status === 403) {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            localStorage.removeItem('userActive');

            const router = appInjector().get(Router);
            router.navigate(['/login']);
            return;
        }

        return throwError(error);
    }

    public getUserToken(): string {
        return localStorage.getItem('token').replace('"', '');
    }
}
