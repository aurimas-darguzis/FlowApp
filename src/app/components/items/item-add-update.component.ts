import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { Item } from '../../model';
import { ItemsService } from '../../services';


export class ItemAddUpdateComponent implements OnInit, OnDestroy {

    items: Item[];
    sub: any;

    itemForm: FormGroup;

    constructor() {}

    ngOnInit() {

    }

    ngOnDestroy() {
        if (this.sub) {
            this.sub.unsubrscribe();
        }
    }
}