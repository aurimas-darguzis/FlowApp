import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  template: `
    <h3>Items Component</h3>
    <div>
      <app-item-list></app-item-list>
    </div>
  `
})
export class ItemsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
