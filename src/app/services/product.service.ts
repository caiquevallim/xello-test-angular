import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Product} from '../models';
import {InMemoryService} from './in-memory.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = 'api/products/';
  readonly onSaleLimit = 40;
  products$ = new BehaviorSubject<Product[]>([]);

  constructor(
    private inMemoryService: InMemoryService,
    private http: HttpClient,
  ) {
  }
  loadProducts() {
    return this.http.get<Product[]>(this.url).subscribe((products) => this.products$.next(products));
  }
}
