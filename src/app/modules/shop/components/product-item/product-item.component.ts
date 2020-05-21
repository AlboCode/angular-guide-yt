import {Component, Directive, HostBinding, OnInit, ViewEncapsulation} from '@angular/core';
import {Product} from '../../../../models/product';

@Directive({
  selector: 'appProductItemTitle, [appProductItemTitle]'
})
export class ProductItemTitleDirective {
  @HostBinding('class') class = 'app-product-item-title';
}

@Directive({
  selector: 'appProductItemDescription, [appProductItemDescription]'
})
export class ProductItemDescriptionDirective {
  @HostBinding('class') class = 'app-product-item-description';
}

@Directive({
  selector: 'appProductItemPrice, [appProductItemPrice]'
})
export class ProductItemPriceDirective {
  @HostBinding('class') class = 'app-product-item-price';
}

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductItemComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
}
