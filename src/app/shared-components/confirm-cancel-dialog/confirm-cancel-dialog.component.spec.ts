import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ConfirmCancelDialogComponent } from './confirm-cancel-dialog.component';

describe('ConfirmCancelDialogComponent', () => {
  let component: ConfirmCancelDialogComponent;
  let fixture: ComponentFixture<ConfirmCancelDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmCancelDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmCancelDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
