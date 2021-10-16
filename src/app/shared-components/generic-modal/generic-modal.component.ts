import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as $ from 'jquery';
import { GlobalValuesService } from 'src/app/_services/global-values.service';

@Component({
  selector: 'generic-modal',
  templateUrl: './generic-modal.component.html',
  styleUrls: ['./generic-modal.component.scss']
})
export class GenericModalComponent implements OnInit {
  public isGenericModalShowing: boolean;
  @Input()
  modalTitle: string;
  @Input()
  isLarge: boolean;
  @Input()
  set isShowingModal(_isShowingModal: boolean) {
    this.isGenericModalShowing = _isShowingModal;
    if (_isShowingModal) {
      $('body').addClass('hide-scroll-bars');
    } else {
      $('body').removeClass('hide-scroll-bars');
    }
  }
  @Output()
  modalShowChange = new EventEmitter<boolean>();

  constructor(private globals: GlobalValuesService) {}

  ngOnInit() {}

  closeModal() {
    $('body').removeClass('hide-scroll-bars');
    this.modalShowChange.emit(false);
  }

  dontCloseModal(e) {
    e.stopPropagation();
  }
}
