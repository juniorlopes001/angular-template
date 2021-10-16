import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.scss']
})
export class AppFooterComponent implements OnInit {

  constructor() { }

  public yearNow: Number;

  ngOnInit() {
    this.yearNow = new Date().getFullYear();
  }

}
