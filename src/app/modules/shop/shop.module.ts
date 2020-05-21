import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductItemComponent } from './components/product-item/product-item.component';




@NgModule({
  declarations: [ProductsListComponent, ProductItemComponent],
  exports: [
    ProductsListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ShopModule { }
