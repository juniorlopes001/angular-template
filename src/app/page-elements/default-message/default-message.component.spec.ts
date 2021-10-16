import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DefaultMessageComponent } from './default-message.component';

describe('DefaultMessageComponent', () => {
  let component: DefaultMessageComponent;
  let fixture: ComponentFixture<DefaultMessageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
