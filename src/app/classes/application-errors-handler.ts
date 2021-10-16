import { Injectable, ErrorHandler, Injector, NgZone } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ApplicationError } from './application-error';
import { AlertService } from './../_services/alert.service';

@Injectable()
export class ApplicationErrorsHandler implements ErrorHandler {
  constructor(
    // Because the ErrorHandler is created before the providers, we’ll have to use the Injector to get them.
    private injector: Injector,
    private zone: NgZone
  ) { }

  // we must implement this to this type of class
  handleError(error: Error | HttpErrorResponse | any) {
    // console.log(error);
    if (error.rejection) {
      error = error.rejection;
    }
    // only business logic erros using 'ApplicationError' will be displayed in the toast
    else if (error instanceof ApplicationError) {
      this.showMessage(error.message);
      // if we wanted it translated we would processa errors as a key:
      // this.showMessageI18n(error.message);
    } else {
      console.error('Error: ', error);
    }
  }

  private offlineError(error: Error | HttpErrorResponse) {
    console.error('Http Offline: ', error);
  }

  private showMessage(message: string, params = {}, description?: string) {
    const alertService = this.injector.get(AlertService);
    this.zone.run(() => {
      alertService.error(message);
    });
  }
  private showMessageI18n(i18nkey: string, params = {}, description?: string) {
    const alertService = this.injector.get(AlertService);
    this.zone.run(() => {
      // alertService.error(this.translateI18nKey(i18nkey)); //not yet implemented
    });
  }
}
