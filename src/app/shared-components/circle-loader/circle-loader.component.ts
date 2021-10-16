import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-circle-loader',
  templateUrl: './circle-loader.component.html',
  styleUrls: ['./circle-loader.component.scss']
})
export class CircleLoaderComponent implements OnInit {

  @Input() usingBtnSave: Boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
