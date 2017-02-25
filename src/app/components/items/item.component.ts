import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../../model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html'
})
export class ItemsComponent implements OnInit {
  @Input() item: Item[];

  constructor() { }

  ngOnInit() {
  }

}
