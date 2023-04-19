import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InMemoryService } from './services/in-memory.service';
import { LocaleService } from './services/locale.service';
import { ProductListComponent } from './product-list/product-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import {PricePipe} from './pipes/price/price.pipe';
import {ProductService} from './services/product.service';
import {StarComponent} from './star/start.component';

@NgModule({
  declarations: [AppComponent, ProductListComponent, TopBarComponent, PricePipe, StarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryService),
  ],
  providers: [LocaleService, InMemoryService, ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
