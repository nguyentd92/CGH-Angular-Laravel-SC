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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MockBackEndInterceptor } from './_mock/mock-back-end.interceptor';
import { ApiInterceptor } from './_shared/interceptors/api.interceptor';

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
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MockBackEndInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
