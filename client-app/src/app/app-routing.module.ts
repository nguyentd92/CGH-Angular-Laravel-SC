import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CheckOutPageComponent } from './check-out-page/check-out-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProductDetailsPageComponent } from './product-details-page/product-details-page.component';
import { ShopPageComponent } from './shop-page/shop-page.component';
import { LayoutComponent } from './_shared/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: LandingPageComponent
      },
      {
        path: 'shop',
        component: ShopPageComponent
      },
      {
        path: 'product/:slug',
        component: ProductDetailsPageComponent
      },
      {
        path: 'cart',
        component: CartPageComponent
      },
      {
        path: 'check-out',
        component: CheckOutPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
