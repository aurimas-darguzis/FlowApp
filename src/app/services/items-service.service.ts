import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Response, Headers } from '@angular/http';
import { Item } from '../model';

// const _serviceUrl = 'https://openenergi-4b230.firebaseio.com/items.json';



@Injectable()
export class ItemsService {
  private _serviceUrl = 'https://localhost:3000/items';

  // items: Item[] = [];

  constructor(private http: Http) { }

  getItems(): Observable<Item[]> {
    const url = this._serviceUrl;

    return this.http.get(url)
      .map((response: Response) => <Item[]>response.json())
      .catch(this.handleError);
  }

  saveItem(item: Item): Observable<Item> {
    const url = this._serviceUrl;

    return this.http.post(url, item)
                    .map(res => res.json());
  }

  handleError(error) {
    return Observable.throw(error);
  }

}
