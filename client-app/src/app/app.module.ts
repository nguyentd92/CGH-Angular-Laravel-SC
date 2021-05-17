import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './_shared/layout/layout.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ShopPageComponent } from './shop-page/shop-page.component';
import { ProductDetailsPageComponent } from './product-details-page/product-details-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CheckOutPageComponent } from './check-out-page/check-out-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LandingPageComponent,
    ShopPageComponent,
    ProductDetailsPageComponent,
    CartPageComponent,
    CheckOutPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
