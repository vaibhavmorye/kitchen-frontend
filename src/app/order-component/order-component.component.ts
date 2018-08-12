import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'; 7
import { ProductsService } from '../shared/services/products.service'
import { IProduct } from '../model/product';

@Component({
  selector: 'app-order-component',
  templateUrl: './order-component.component.html',
  styleUrls: ['./order-component.component.css']
})
export class OrderComponentComponent implements OnInit {

  OrderFormGroup: FormGroup;
  errorMessage: string;
  successMessage: string;
  products: IProduct[];

  constructor(private _productService: ProductsService) {
    this._productService.getOrderes().subscribe(data => { this.products = data });
  }

  ngOnInit() {
    this.OrderFormGroup = new FormGroup({
      product_order: new FormControl('',[ Validators.required, Validators.pattern("^[0-9]*$")]),
      productId: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    console.log(this.OrderFormGroup.value);
    this._productService.placeOrder(this.OrderFormGroup.value);
  }

}
