import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../services';
import { Item } from '../../model';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html'
})
export class ItemsComponent implements OnInit {
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



// template: `
//     <h3>Items Component</h3>
//     <div>
//       <app-item-list></app-item-list>
//     </div>
//   `