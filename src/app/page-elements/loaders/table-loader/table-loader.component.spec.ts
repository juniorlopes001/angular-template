import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TableLoaderComponent } from './table-loader.component';

describe('TableLoaderComponent', () => {
  let component: TableLoaderComponent;
  let fixture: ComponentFixture<TableLoaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TableLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
