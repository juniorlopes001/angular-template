import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'confirm-cancel-dialog',
  templateUrl: './confirm-cancel-dialog.component.html',
  styleUrls: ['./confirm-cancel-dialog.component.scss']
})
export class ConfirmCancelDialogComponent implements OnInit {
  @Input()
  dialogText: string;
  @Input()
  atentionText: string;
  @Input()
  usingObs: boolean;

  @Output()
  confirmClick = new EventEmitter<string>();

  @Output()
  cancelClick = new EventEmitter<string>();

  constructor() { }

  ngOnInit() { }

  confirm() {
    this.confirmClick.emit('confirm');
  }

  cancel() {
    this.cancelClick.emit('cancel');
  }
}
