import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray,  } from '@angular/forms';
import { Router } from '@angular/router';

import { Item } from '../../model';
import { ItemsService } from '../../services';

@Component({
    templateUrl: './item-add-update.component.html'
})

export class ItemAddUpdateComponent implements OnInit, OnDestroy {

    items: Item[];
    sub: any;

    itemForm: FormGroup;
    item: Item;

    constructor(private fb: FormBuilder,
                private router: Router,
                private itemsService: ItemsService) {}

    ngOnInit() {
        this.item = new Item();
        this.createForm(this.item);
    }

    ngOnDestroy() {
        if (this.sub) {
            this.sub.unsubrscribe();
        }
    }

    createForm(item: Item) {
        this.itemForm = new FormGroup({
            name: new FormControl(),
            email: new FormControl()
         });
    }

    save(item: Item) {
        console.log(this.itemForm);
        this.itemsService.saveItem(item)
                         .subscribe(response => {
                             this.router.navigate(['/items']);
                         });
    }
}