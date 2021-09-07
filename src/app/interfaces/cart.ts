import { Product } from "./product";

export interface Cart {
    total: number,
    subTotal: number,
    items: Array<CartItem>;
}

export interface CartItem{
    product: Product,
    quantity: number,
    total: number,
}