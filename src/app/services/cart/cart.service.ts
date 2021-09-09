import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart } from 'src/app/interfaces/cart';
import { Product } from '../../interfaces/product';
import { CartItem } from '../../interfaces/cart';

@Injectable({
    providedIn: 'root'
})
export class CartService {

    public cart!: BehaviorSubject<Cart>;

    constructor() {
        this.initializeCart();
    }

    initializeCart() {
        const cart = this.getCart();
        this.calculateCartValues(cart);
        this.cart = new BehaviorSubject<Cart>(cart);
    }

    addProductToCart(product: Product): void {
        const cart = this.getCart();
        const cartItem: CartItem = {
            product,
            quantity: 1,
            total: product.price,
        }
        cart.items.push(cartItem);
        this.setCart(cart);
    }

    addQty(cartItem: CartItem) {
        const cart: Cart = this.getCart();

        cart.items.map(data => {
            data.quantity += data.product.id === cartItem.product.id ? 1 : 0
        });

        this.setCart(cart);
    }

    removeQty(cartItem: CartItem) {
        const cart: Cart = this.getCart();

        cart.items.map(data => {
            data.quantity -= data.product.id === cartItem.product.id && data.quantity > 1 ? 1 : 0
        });

        console.log(cart);

        this.setCart(cart);
    }

    clearCart() {
        this.createEmptyCart();
    }

    verifyIfItemIsNotAdded(product: Product): boolean {
        const cart: Cart = this.getCart();

        return cart.items.every(data => {
            return data.product.id !== product.id;
        })
    }

    private getCart(): Cart {
        const cart: Cart = JSON.parse(localStorage.getItem('cart') || JSON.stringify(this.createEmptyCart()));
        return cart;
    }

    private setCart(cart: Cart): void {
        const updatedCart: Cart = this.calculateCartValues(cart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        this.cart.next(updatedCart);
    }

    private calculateCartValues(cart: Cart): Cart {
        let total = 0;
        
        cart.items.forEach(element => {
            element.total = element.product.price * element.quantity;
            total += element.total;
        });
        cart.total = total;

        return cart;
    }

    private createEmptyCart(): Cart {
        const cart: Cart = {
            total: 0,
            subTotal: 0,
            items: []
        }
        this.setCart(cart);
        return cart;
    }
}
