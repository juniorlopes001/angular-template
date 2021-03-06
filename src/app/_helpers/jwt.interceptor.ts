import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


        // add authorization header with jwt token if available
        const userActive = JSON.parse(localStorage.getItem('userActive'));
        if (userActive && userActive.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${userActive.token}`
                }
            });
        }

        return next.handle(request);
    }
}
