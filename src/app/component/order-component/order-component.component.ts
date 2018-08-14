import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'; 7
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../shared/services/products.service'
import { IProduct } from '../../model/product';
import { Iresponse } from '../../model/response';

@Component({
  selector: 'app-order-component',
  templateUrl: './order-component.component.html',
  styleUrls: ['./order-component.component.css']
})
export class OrderComponentComponent implements OnInit {

  OrderFormGroup: FormGroup;
  errorMessage: string;
  successMessage: Iresponse;
  products: IProduct[];


  constructor(private _productService: ProductsService, private _router: Router) {
    this._productService.getAllFoodName().subscribe(data => { this.products = <any> data }, (err) => {
      this.errorMessage = err;
      console.log(err);
    });
  }

  ngOnInit() {
    this.OrderFormGroup = new FormGroup({
      product_order: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      productId: new FormControl(Object, Validators.required)
    });
  }

  onSubmit() {
    this._productService.placeOrder(this.OrderFormGroup.value)
      .subscribe(response => {
        this.successMessage = <Iresponse>response;
        this._router.navigate(['/home'])
      }, (err) => {
        this.errorMessage = err;
        console.log(err);
      });
  }

  
}
