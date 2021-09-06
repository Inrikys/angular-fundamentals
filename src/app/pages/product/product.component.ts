import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ProductsService } from '../../services/products/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public product!: Product;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService,
  ) { }

  ngOnInit(): void {
    this.getRouterParams();
  }

  getRouterParams() {
    const params = this.activatedRoute.snapshot.paramMap;
    const productId = Number(params.get('id'));
    this.getProductById(productId);
  }

  getProductById(id: number) {
    this.product = this.productsService.getProductById(id);
  }
}
