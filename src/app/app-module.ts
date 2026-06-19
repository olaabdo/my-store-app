import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ProductListComponent } from './components/product-list/product-list';
import { CartComponent } from './components/cart/cart';
import { ProductDetailsComponent } from './components/product-details/product-details';
import { CheckoutComponent } from './components/checkout/checkout';
import { OrderConfirmationComponent } from './components/checkout/order-confirmation/order-confirmation'; 

@NgModule({
  declarations: [
    App,
    ProductListComponent,
    CartComponent,
    ProductDetailsComponent,
    CheckoutComponent,
    OrderConfirmationComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [App]
})
export class AppModule { }