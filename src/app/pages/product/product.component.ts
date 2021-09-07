import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart/cart.service';
import { ProductsService } from '../../services/products/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public product!: Product;
  public addedToCart: boolean = false;
  public highlightText: string = 'This product was added in your cart!'

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService,
    private cartService: CartService,
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

  addToCart() {
    this.addedToCart = !this.addedToCart;
    if (this.cartService.verifyIfItemIsNotAdded(this.product)) {
      this.cartService.addProductToCart(this.product);
    }
  }
}
