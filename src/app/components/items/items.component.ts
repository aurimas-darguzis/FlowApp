import { Component, OnDestroy, OnInit } from '@angular/core';
import { ItemsService } from '../../services';
import { Item } from '../../model';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html'
})
export class ItemsComponent implements OnInit, OnDestroy {
  items: Item[] = [];
  sub: any;

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    // this.sub = this.itemsService.getItem()
    //                .subscribe(items => this.items = items);
    this.sub = this.getItemsFromApi();
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
        },
        error => console.error(error)
      );
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

}



// template: `
//     <h3>Items Component</h3>
//     <div>
//       <app-item-list></app-item-list>
//     </div>
//   `