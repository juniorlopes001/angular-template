import { Output, EventEmitter } from '@angular/core';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {

  @Input() title: string;
  @Input() headerTitle: string;
  @Input() buttonText: string;
  @Input() buttonTitle: string;
  @Input() buttonUrl: string;
  @Input() icon: string;
  @Input() buttonVisible: boolean;
  @Input() buttonVisibleExcel: boolean;
  @Output() clickEvent = new EventEmitter<any>();
  @Output() clickButton = new EventEmitter<any>();
  @Output() clickButtonExcel = new EventEmitter<any>();
  @Output() clickExportInvoice = new EventEmitter<any>();


  constructor() {
    document.getElementById('overlay').classList.remove('overlay');
  }

  ngOnInit() {
  }

  onClick() {
    this.clickEvent.emit();
  }

  onClickButton() {
    this.clickButton.emit();
  }

  onClickButtonExcel() {
    this.clickButtonExcel.emit();
  }

  onClickExportInvoice() {
    this.clickExportInvoice.emit();
  }
}
