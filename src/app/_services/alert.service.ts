import { Subject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AlertService {
  constructor(private toastr: ToastrService) {
  }

  private subject = new Subject<any>();

  success(message: string) {
    console.log(message);
    this.toastr.success(message, 'Success');
    // this.subject.next({ type: 'success', text: message });
  }

  error(message: string) {
    console.log(message);
    this.toastr.error(message, 'Warning');
    // this.subject.next({ type: 'error', text: message });
  }

  info(message: string) {
    console.log(message);
    this.toastr.info(message, 'Attention');
    // this.subject.next({ type: 'error', text: message });
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}
