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
        const cart = this.getCart()
        this.cart = new BehaviorSubject<Cart>(cart)
    }

    addProductToCart(product: Product): void {
        const cart = this.getCart()
        const cartItem: CartItem = {
            product,
            quantity: 1,
            total: product.price,
        }
        cart.items.push(cartItem);
        this.setCart(cart);
    }

    clearCart() {
        this.createEmptyCart();
    }

    verifyIfItemIsNotAdded(product: Product): boolean {
        const cart: Cart = this.getCart();

        return cart.items.every(data => {
            return data.product.id !== product.id
        })
    }

    private getCart(): Cart {
        const cart: Cart = JSON.parse(localStorage.getItem('cart') || JSON.stringify(this.createEmptyCart()));
        return cart;
    }

    private setCart(cart: Cart): void {
        this.calculateCartValues(cart);
        localStorage.setItem('cart', JSON.stringify(cart));
        this.cart.next(cart);
    }

    private calculateCartValues(cart: Cart): void {
        cart.items.forEach(element => {
            const price = element.total;
            cart.total += price;
        });
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
