import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Item } from '@production-angular/api-interfaces';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  model = 'items';

  constructor(private http: HttpClient) {}

  all() {
    return this.http.get<Item[]>(this.getUrl());
  }

  find(id: string) {
    return this.http.get<Item>(this.getUrlWithId(id));
  }

  create(widget: Item) {
    return this.http.post(this.getUrl(), widget);
  }

  update(widget: Item) {
    return this.http.put(this.getUrlWithId(widget.id), widget);
  }

  delete(widget: Item) {
    return this.http.delete(this.getUrlWithId(widget.id));
  }

  private getUrl() {
    return `${environment}${this.model}`;
  }

  private getUrlWithId(id: string | null) {
    return `${this.getUrl()}/${id}`;
  }
}
