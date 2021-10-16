import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../_services/alert.service';

@Component({
  selector: 'default-message',
  templateUrl: './default-message.component.html',
  styleUrls: ['./default-message.component.scss']
})
export class DefaultMessageComponent implements OnInit {

  message: any = {};
  showMessage: Boolean = false;
  messageDescription: String = '';
  lastTimeOpened: number = 0;

  constructor(private alertService: AlertService) { }

  ngOnInit() {
    this.alertService.getMessage().subscribe(message => {
      if (!message) {
        return false;
      }

      this.lastTimeOpened = Date.now();

      this.message = message;
      this.showMessage = true;
      this.messageDescription = this.message.text;

      setTimeout(() => {
        const now = Date.now();
        const secondsShowing = (now - this.lastTimeOpened) / 1000;
        if (secondsShowing >= 4.9) {
          this.closeMessage();
        }
      }, 5000);
    });
  }

  closeMessage() {
    this.showMessage = false;
  }
}
