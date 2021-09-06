import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-alert-product-details',
  templateUrl: './alert-product-details.component.html',
  styleUrls: ['./alert-product-details.component.scss']
})
export class AlertProductDetailsComponent implements OnInit {

  @Input() product!: Product;
  @Output() clickAlert = new EventEmitter<Product>();
  @Input() isEnabledToBuy!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  clickedAlert(){
    this.clickAlert.emit(this.product);
  }

}
