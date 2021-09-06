import { Component, OnInit } from '@angular/core';
import { Product } from './interfaces/product';
import { ProductsService } from './services/products/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'ecommerce-angular-fundamentals';

  constructor(

  ) { }

  ngOnInit(): void {

  }

}
