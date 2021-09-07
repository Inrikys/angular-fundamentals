import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/interfaces/cart';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart!: Cart;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.cartService.cart.subscribe(data => {
      this.cart = data;
      console.log(this.cart);
    })
  }

}
