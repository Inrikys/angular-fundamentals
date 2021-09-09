import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from 'src/app/interfaces/cart';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem!: CartItem;

  constructor(
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
  }

  addQty() {
    this.cartService.addQty(this.cartItem);
  }

  removeQty() {
    this.cartService.removeQty(this.cartItem);
  }

}
