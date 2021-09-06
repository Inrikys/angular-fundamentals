import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  @Input() product!: Product;
  @Input() isEnabledToBuy!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  showAlert() {
    window.alert(`${this.product.name} are available in your location to purchase`)
  }

}
