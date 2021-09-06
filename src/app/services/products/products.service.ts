import { Injectable } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { products } from 'src/app/data/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts(): Product[] {
    return products;
  }

}
