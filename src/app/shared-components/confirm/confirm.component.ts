import { Component, OnInit, EventEmitter } from '@angular/core';
import { Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent {
  onAdd = new EventEmitter();

  constructor(
    public dialogRef: MatDialogRef<ConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public count: number = 0) { }

  noClick(): void {
    this.dialogRef.close();
  }

  yesClick(): void {
    this.onAdd.emit();
    this.dialogRef.close();
  }

  getText() {
    if (this.count === undefined || this.count === 0 || this.count === 1) {
      return 'Tem certeza que deseja remover esse registro?';
    }

    return `Tem certeza que deseja remover os ${this.count} registros?`;
  }
}
