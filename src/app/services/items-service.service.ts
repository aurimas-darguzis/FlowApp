import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Response, Headers } from '@angular/http';
import { Item } from '../model';

// const _serviceUrl = 'https://openenergi-4b230.firebaseio.com/items.json';
const _serviceUrl = 'https://localhost:3000/items';


@Injectable()
export class ItemsService {
  items: Item[] = [];

  constructor(private http: Http) { }

  getItem(): Observable<Item[]> {

    return this.http.get(_serviceUrl)
      .map((response: Response) => <Item[]>response.json())
      .catch(this.handleError);
  }

  handleError(error) {
    return Observable.throw(error);
  }

}
