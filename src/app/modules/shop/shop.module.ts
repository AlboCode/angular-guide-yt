import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './components/products-list/products-list.component';
import {
  ProductItemComponent,
  ProductItemDescriptionDirective, ProductItemPriceDirective,
  ProductItemTitleDirective
} from './components/product-item/product-item.component';




@NgModule({
  declarations: [
    ProductsListComponent,
    ProductItemComponent,
    ProductItemTitleDirective,
    ProductItemDescriptionDirective,
    ProductItemPriceDirective
  ],
  exports: [
    ProductsListComponent,
    ProductItemTitleDirective
  ],
  imports: [
    CommonModule
  ]
})
export class ShopModule { }
