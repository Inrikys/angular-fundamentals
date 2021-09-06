import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products!: Product[];
  isEnabledToBuy: boolean = false;

  constructor(
    private ProductsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.products = this.ProductsService.getProducts();
  }

  changeBuyingStatus(){
    this.isEnabledToBuy = !this.isEnabledToBuy;
  }
}
