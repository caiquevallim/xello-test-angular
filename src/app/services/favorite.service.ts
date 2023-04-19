import {Injectable} from '@angular/core';
import {Product} from '../models';
import {InMemoryService} from './in-memory.service';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Subscription, BehaviorSubject, catchError, Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  url = 'api/favourites/';
  favourites$ = new BehaviorSubject<Product[]>([]);

  constructor(
    private inMemoryService: InMemoryService,
    private http: HttpClient,
  ) {
  }

  loadFavourites(): Subscription {
    return this.http.get<Product[]>(this.url).subscribe((products) => this.favourites$.next(products))
  }
  createFavourite(product: Product): Observable<Product> {
    return this.http.post<Product>(this.url, product).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => {
          console.error(error);
        })
      })
    )
  }
  removeFavourite(product: Product): Observable<Product> {
    return this.http.delete<Product>(`${this.url}${product.id}`).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => {
          console.error(error);
        })
      })
    )
  }
}
