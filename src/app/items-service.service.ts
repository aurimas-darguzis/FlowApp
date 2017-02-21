import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Response, Headers } from '@angular/http';
import { Item } from './item.model';

const meTheItems = 'https://openenergi-4b230.firebaseio.com/items.json';


@Injectable()
export class ItemsService {
  items: Item[] = [];

  constructor(private http: Http) { }

  getItem(): Observable<Item[]> {

    return this.http.get(meTheItems)
      .map((response: Response) => <Item[]>response.json())
      .catch(this.handleError);
  }

  handleError(error) {
    return Observable.throw(error);
  }

}
