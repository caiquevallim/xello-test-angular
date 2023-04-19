import { Component } from '@angular/core';
import { LocaleService } from '../services/locale.service';
import {ProductService} from '../services/product.service';
import {FavoriteService} from '../services/favorite.service';
import {switchMap, map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Product} from '../models';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  locale = this.localeService.currentlocale;
  products$: Observable<Product[]> = this.favouriteService.favourites$.pipe(
    switchMap((favorites) => {
      const favoritesMap = new Map<number, boolean>();
      favorites.forEach(({ id }) => {
        favoritesMap.set(id, true)
      })
      return this.productService.products$.pipe(
        map((products) => (
          products.map((product) => ({
            ...product,
            isFavourite: favoritesMap.has(product.id),
          }))
        ))
      )
    })
  );
  readonly onSaleLimit = this.productService.onSaleLimit;
  constructor(
    private localeService: LocaleService,
    private productService: ProductService,
    private favouriteService: FavoriteService,
  ) {
    this.favouriteService.loadFavourites();
    this.productService.loadProducts();
    this.localeService.getLocale().subscribe((locale) => this.locale = locale);
  }

  share() {
    window.alert('The product has been shared!');
  }
  createFavourite(product: Product): void {
    this.favouriteService.createFavourite(product).subscribe(() => {
      this.favouriteService.loadFavourites();
    })
  }

  removeFavourite(product: Product): void {
    this.favouriteService.removeFavourite(product).subscribe(() => {
      this.favouriteService.loadFavourites();
    })
  }
}
