import { ItemsService } from '../../services';
import { Component, OnInit } from '@angular/core';
import { Item } from '../../model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html'
})
export class ItemListComponent implements OnInit {
  items: Item[] = [];

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    this.getItemsFromApi();
  }

  getItemsFromApi() {
    this.itemsService.getItem()
      .subscribe(
        (items: Item[]) => {
          const internalArray = [];
          for (const item in items) {
            if (item) {
              internalArray.push(items[item]);
            }
          }
          this.items = internalArray;
          console.log(this.items)
        },
        error => console.error(error)
      );
  }

}
