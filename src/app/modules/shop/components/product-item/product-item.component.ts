import { Component, OnInit } from '@angular/core';
import {Product} from '../../../../models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  product: Product = {
    id: 1,
    name: 'Fotocamera',
    description: 'Una bella fotocamera',
    price: 99.99
  };
  constructor() { }

  ngOnInit(): void {
  }

}
